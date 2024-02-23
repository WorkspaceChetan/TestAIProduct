import { ClipboardListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Product Description ",
  desc: "Quickly create a product description based on some basic details",
  category: "Business",
  Icon: ClipboardListIcon,
  // tags: [],
  permissions: ["user"],

  to: "/ai/product-description",
  api: "/ai/product-description",

  fromColor: "yellow-400",
  toColor: "yellow-600",

  output: {
    title: "Product Description Preview",
    desc: "Example of a possible product description",
    // Icon: RefreshIcon,
    // color: "",
  },

  prompts: [
    {
      title: "Details",
      desc: "Write a short few words about your product",
      // n: 1,
      prompts: [
        {
          title: "Title",
          attr: "title",
          value: "",
          placeholder: "Buzz Lightyear",
          label:
            "Examples: Buzz Lightyear, Woody action figure, Jessie doll, Rex dinosaur toy, Hamm piggy bank",
          // type: "textarea",
          maxLength: 100,
          // max: 100,
          min: 10,
          required: true,
          error: "",
          example: "buzz lightyear",
        },
        {
          title: "Basic description",
          attr: "description experience reviews",
          value: "",
          placeholder: "A Buzz Lightyear toy is a vibrant, action-packed...",
          label:
            'Example: A Buzz Lightyear toy is a vibrant, action-packed figure modeled after the iconic space ranger from the "Toy Story" movies, complete with lights, sounds, and movable parts for intergalactic adventures.',
          type: "textarea",
          maxLength: 4000,
          // max: 100,
          min: 100,
          required: true,
          error: "",
          example:
            'A Buzz Lightyear toy is a vibrant, action-packed figure modeled after the iconic space ranger from the "Toy Story" movies, complete with lights, sounds, and movable parts for intergalactic adventures.',
        },
        {
          title: "Experience",
          attr: "experience",
          value: "",
          placeholder: "Playing with the Buzz Lightyear toy ...",
          label:
            'Examples: Playing with the Buzz Lightyear toy brought hours of imaginative fun, as I embarked on daring space missions, fought off evil Emperor Zurg, and soared to "infinity and beyond" with the push of a button.',
          type: "textarea",
          maxLength: 1500,
          // max: 100,
          // min: 1,
          // required: true,
          error: "",
          example:
            'Playing with the Buzz Lightyear toy brought hours of imaginative fun, as I embarked on daring space missions, fought off evil Emperor Zurg, and soared to "infinity and beyond" with the push of a button.',
        },
        {
          title: "Reviews",
          attr: "reviews",
          value: "",
          placeholder: "Absolutely fantastic—this...",
          label:
            'Absolutely fantastic—this Buzz Lightyear toy exceeded all expectations with its attention to detail, durability, and the endless joy it brings to kids, truly making it feel like a part of the "Toy Story" universe.',
          type: "textarea",
          maxLength: 500,
          // max: 100,
          // min: 1,
          // required: true,
          error: "",
          example:
            'Absolutely fantastic—this Buzz Lightyear toy exceeded all expectations with its attention to detail, durability, and the endless joy it brings to kids, truly making it feel like a part of the "Toy Story" universe.',
        },
      ],
      example: {
        output: `Buzz Lightyear Action Figure

Embark on a thrilling space adventure with the Buzz Lightyear action figure! Inspired by Disney Pixar's "Toy Story," this vibrant and action-packed toy brings the beloved space ranger to life. Equipped with lights, sounds, and movable parts, Buzz is ready for intergalactic missions against Emperor Zurg or exploring the limitless realms of your child's imagination. Critics and fans alike rave about its exceptional attention to detail, robust construction, and the ability to ignite endless joy and creativity in children, making it a cherished addition to any toy collection. Join Buzz Lightyear as he goes to "infinity and beyond," offering hours of imaginative play and heroic adventures!`,
        // outputs: [],
        // Icon: RefreshIcon,
        // color: "",
      },
    },
  ],
};

export default obj;
