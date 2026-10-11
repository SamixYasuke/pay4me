import HeroSection from "../components/HeroSection";
import MainContentSection from "../components/MainContentSection";
import DocumentMeta, { type DocumentMetaProps } from "react-document-meta";
import Pay4MePurpose from "../components/Pay4MePurpose";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Partnerships from "../components/Partnerships";
import BlogCarousel from "../components/BlogCarousel";
import FaQ from "../components/FaQ";
import JoinNow from "../components/JoinNow";

const Homepage = () => {
  const meta = {
    title: "Home | Pay4me",
    description:
      "Welcome to Pay4me, your go-to solution for seamless online payments.",
    canonical: "https://pay4me-azure.vercel.app/",
    meta: {
      property: {
        "og:type": "website",
        "og:site_name": "Pay4Me",
        "og:title": "Home | Pay4me",
        "og:description":
          "Welcome to Pay4me, your go-to solution for seamless online payments.",
        "og:url": "https://pay4me-azure.vercel.app/",
        "og:image": "https://pay4me-azure.vercel.app/landing_page.png",
      },
      name: {
        "twitter:card": "summary_large_image",
        "twitter:title": "Home | Pay4me",
        "twitter:description":
          "Welcome to Pay4me, your go-to solution for seamless online payments.",
        "twitter:image":
          "https://pay4me-azure.vercel.app/landing_page.png",
      },
    },
  } as unknown as DocumentMetaProps;
  return (
    <DocumentMeta {...meta}>
      <HeroSection />
      <MainContentSection />
      <Pay4MePurpose />
      <TestimonialCarousel />
      <Partnerships />
      <BlogCarousel />
      <FaQ />
      <JoinNow />
    </DocumentMeta>
  );
};

export default Homepage;
