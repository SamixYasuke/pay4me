import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainContentSection from "../components/MainContentSection";
import DocumentMeta, { type DocumentMetaProps } from "react-document-meta";
import Pay4MePurpose from "../components/Pay4MePurpose";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Partnerships from "../components/Partnerships";
import BlogCarousel from "../components/BlogCarousel";
import FaQ from "../components/FaQ";
import JoinNow from "../components/JoinNow";
import Footer from "../components/Footer";

const Homepage = () => {
  const meta: DocumentMetaProps = {
    title: "Home | Pay4me",
    description:
      "Welcome to Pay4me, your go-to solution for seamless online payments.",
    canonical: "http://pay4me-azure.vercel.app/",
  };
  return (
    <DocumentMeta {...meta}>
      <Header />
      <HeroSection />
      <MainContentSection />
      <Pay4MePurpose />
      <TestimonialCarousel />
      <Partnerships />
      <BlogCarousel />
      <FaQ />
      <JoinNow />
      <Footer />
    </DocumentMeta>
  );
};

export default Homepage;
