interface FrontendMentorSolutionLink {
  readonly name: string;
  readonly urls: {
    readonly demo: string;
    readonly frontendMentor: string;
    readonly github: string;
  };
}

const FRONTEND_MENTOR_BASE = "https://www.frontendmentor.io/solutions";
const GITHUB_BASE = "https://github.com/TKD04/frontend-mentor/tree/main/app";
const FRONTEND_MENTOR_SOLUTION_LINKS = [
  {
    name: "QR code component",
    urls: {
      demo: "/qr-code-component",
      frontendMentor: `${FRONTEND_MENTOR_BASE}/qr-code-component-using-nextjs-iR6DXx_bov`,
      github: `${GITHUB_BASE}/qr-code-component`,
    },
  },
  {
    name: "Blog preview card",
    urls: {
      demo: "/blog-preview-card",
      frontendMentor: `${FRONTEND_MENTOR_BASE}/blog-preview-card-using-nextjs-boQFBiXson`,
      github: `${GITHUB_BASE}/blog-preview-card`,
    },
  },
  {
    name: "Social links profile",
    urls: {
      demo: "/social-links-profile",
      frontendMentor: `${FRONTEND_MENTOR_BASE}/social-links-profile-using-nextjs-MzV9oOg7hQ`,
      github: `${GITHUB_BASE}/social-links-profile`,
    },
  },
  {
    name: "Recipe page",
    urls: {
      demo: "/recipe-page",
      frontendMentor: `${FRONTEND_MENTOR_BASE}/recipe-page-using-nextjs-w96PdtQ1LZ`,
      github: `${GITHUB_BASE}/recipe-page`,
    },
  },
  {
    name: "Product preview card component",
    urls: {
      demo: "/product-preview-card-component",
      frontendMentor: `${FRONTEND_MENTOR_BASE}/product-preview-card-component-using-nextjs-ycANnBkb9q`,
      github: `${GITHUB_BASE}/product-preview-card-component`,
    },
  },
  {
    name: "FAQ accordion",
    urls: {
      demo: "/faq-accordion",
      frontendMentor: `${FRONTEND_MENTOR_BASE}/faq-accordion-using-nextjs-lt2w9bdNBQ`,
      github: `${GITHUB_BASE}/faq-accordion`,
    },
  },
  {
    name: "Four card feature section",
    urls: {
      demo: "/four-card-feature-section",
      frontendMentor: `${FRONTEND_MENTOR_BASE}/four-card-feature-section-using-nextjs-GzWb4jSKrg`,
      github: `${GITHUB_BASE}/four-card-feature-section`,
    },
  },
] as const satisfies readonly FrontendMentorSolutionLink[];

export default FRONTEND_MENTOR_SOLUTION_LINKS;
