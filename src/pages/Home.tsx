import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainContentSection from "../components/MainContentSection";
import DocumentMeta, { type DocumentMetaProps } from "react-document-meta";

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
    </DocumentMeta>
  );
};

export default Homepage;
