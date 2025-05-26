type SocialSiteLink = Readonly<{
  siteName: string;
  url: string;
}>;

const socialSiteLinks: readonly SocialSiteLink[] = [
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
];

export default socialSiteLinks;
