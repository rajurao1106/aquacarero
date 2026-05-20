import About from "@/components/homepage/About";
import Consultation from "@/components/homepage/CTA";
import FAQ from "@/components/homepage/FAQ";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Stats from "@/components/homepage/Stats";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChoose from "@/components/homepage/WhyChoose";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
       <Stats />
      <About />
      <Services />
      <Features />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Consultation />
    </div>
  );
}
