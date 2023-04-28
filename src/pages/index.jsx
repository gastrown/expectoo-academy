import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { Reviews } from "@/components/Reviews";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import Footer from "@/components/Footer";
import { useState } from "react";
import Register from "@/components/Registeration";
import Modal from "@/components/Modal";
import ReactGA from "react-ga";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  if (typeof window !== "undefined") {
    // code that uses the window object
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  const handleShowRegisterationForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <Head>
        <title>Expectoo Academy</title>
        <meta name="description" content="Tech Traning for Everyone " />
      </Head>
      <Header handleRegisterForm={handleShowRegisterationForm} />
      <main>
        <Hero handleRegisterForm={handleShowRegisterationForm} />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Faqs />
        {showForm && (
          <Modal>
            <Register handleRegisterForm={handleShowRegisterationForm} />
          </Modal>
        )}
      </main>
      <Footer />
    </>
  );
}
