type FrontendMentorSolutionLink = Readonly<{
  name: string;
  urls: {
    frontendMentor: string;
    github: string;
    demo: string;
  };
}>;

const frontendMentorSolutionsLinks: Readonly<FrontendMentorSolutionLink[]> = [
  {
    name: "QR code component",
    urls: {
      frontendMentor:
        "https://www.frontendmentor.io/solutions/qr-code-component-using-nextjs-iR6DXx_bov",
      github:
        "https://github.com/TKD04/frontend-mentor/tree/main/app/qr-code-component",
      demo: "/qr-code-component",
    },
  },
  {
    name: "Blog preview card",
    urls: {
      frontendMentor:
        "https://www.frontendmentor.io/solutions/blog-preview-card-using-nextjs-boQFBiXson",
      github:
        "https://github.com/TKD04/frontend-mentor/tree/main/app/blog-preview-card",
      demo: "/blog-preview-card",
    },
  },
  {
    name: "Social links profile",
    urls: {
      frontendMentor:
        "https://www.frontendmentor.io/solutions/social-links-profile-using-nextjs-MzV9oOg7hQ",
      github:
        "https://github.com/TKD04/frontend-mentor/tree/main/app/social-links-profile",
      demo: "/social-links-profile",
    },
  },
];

export default frontendMentorSolutionsLinks;
