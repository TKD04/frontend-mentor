type Faq = Readonly<{
  answer: string;
  question: string;
}>;

const FAQS: readonly Faq[] = [
  {
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    question: "What is Frontend Mentor, and how will it help me?",
  },
  {
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    question: "Is Frontend Mentor free?",
  },
  {
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    question: "Can I use Frontend Mentor projects in my portfolio?",
  },
  {
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
  },
];

export default FAQS;
