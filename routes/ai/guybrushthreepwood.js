const express = require("express");
const openai = require("../middlewares/openai");
const db = require("../models");
const User = db.user;

let app = express.Router();

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post("/ai/product-description", async (req, res, next) => {
  let { content, currentPrompt, title, description, experience, reviews } =
    req.body;

  let prompt = "";
  let inputRaw = "";

  if (currentPrompt === "Detailed Ad") {
    prompt = `Create a detailed Product Description from the following details:\n###`;

    inputRaw = `TITLE: ${title}\nDESCRIPTION: ${description}\nEXPERIENCE: ${experience}\nREVIEWS: ${reviews}\nENDOFDOCUMENT:\n`;
    prompt += inputRaw;
  }

  const gptResponse = await openai.complete({
    engine: "curie",
    prompt,
    maxTokens: 4600,
    temperature: 0.5,
    topP: 1,
    frequencyPenalty: 0.2,
    presencePenalty: 0,
    bestOf: 1,
    n: 1,
    user: req.user._id,
    stream: false,
    stop: ["###", "<|endoftext|>", "ENDOFDOCUMENT", "TEXT"],
  });

  let output = `${gptResponse.data.choices[0].text}`;

  req.locals.input = prompt;
  req.locals.inputRaw = inputRaw;
  req.locals.output = output;

  next();
});

app.post("/reduce-generation", async (req, res) => {
  let { type, experience, reviews } = req.body;

  let inc;
  if (type === "free") inc = { $inc: { remaining_free_credits: -1 } };
  else inc = { $inc: { remaining_paid_credits_this_month: -1 } };

  const resData = await User.findByIdAndUpdate(
    {
      _id: req.user._id,
    },
    { $set: { experience: experience, reviews: reviews } },
    inc
  );
  console.log(resData);

  if (resData)
    res.status(200).json({
      success: true,
    });
  else
    res.status(500).json({
      success: false,
    });
});

module.exports = app;
