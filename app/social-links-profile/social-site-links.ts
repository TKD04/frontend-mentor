interface SocialSiteLink {
  readonly siteName: string;
  readonly url: string;
}

const SOCIAL_SITE_LINKS = [
  {
    siteName: "GitHub",
    url: "https://github.com/",
  },
  {
    siteName: "Frontend Mentor",
    url: "https://www.frontendmentor.io/",
  },
  {
    siteName: "LinkedIn",
    url: "https://www.linkedin.com/",
  },
  {
    siteName: "Twitter",
    url: "https://x.com/",
  },
  {
    siteName: "Instagram",
    url: "https://www.instagram.com/",
  },
] as const satisfies readonly SocialSiteLink[];

export default SOCIAL_SITE_LINKS;
