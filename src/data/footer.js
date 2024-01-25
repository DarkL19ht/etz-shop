import meta from "../assets/meta.svg";
import linkedIn from "../assets/linkedIn.svg";
import x from "../assets/x.svg";
import insta from "../assets/insta.svg";
import tikTok from "../assets/tikTok.svg";

const footer = [
  {
    id: 1,
    title: "COMPANY",
    text: [
      { name: "About us", to: "https://google.com" },
      { name: "Waitlist", to: "/" },
      { name: "Features", to: "https://google.com" },
      { name: "Blog", to: "https://google.com" },
      { name: "FAQ", to: "https://google.com" },
    ],
  },
  {
    id: 2,
    title: "SUPPORT",
    text: [
      { name: "Contact us", to: "/contactUs" },
      { name: "Terms and Conditions", to: "/terms&conditions" },
      { name: "Privacy policy", to: "/privacyPolicy" },
    ],
  },
  {
    id: 3,
    title: "SOCIALS",
    img: [
      { logo: [meta], link: "https://google.com", alt: "meta" },
      { logo: [linkedIn], link: "https://google.com", alt: "linkedIn" },
      { logo: [x], link: "https://google.com", alt: "x" },
      { logo: [insta], link: "https://google.com", alt: "insta" },
      { logo: [tikTok], link: "https://google.com", alt: "tikTok" },
    ],
    // img: [meta, linkedIn, x, insta, tikTok],
  },
];

export default footer;
