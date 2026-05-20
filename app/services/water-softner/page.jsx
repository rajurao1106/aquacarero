import React from "react";
import WaterSoftner from "./WaterSoftner";
import Consultation from "@/components/homepage/CTA";
import FAQ from "@/components/homepage/FAQ";
import Services from "@/components/homepage/Services";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
export default function page() {
  return (
    <div> <Breadcrumbs pagename={"Water Softner"} />
      <WaterSoftner /> <Services />
      <FAQ />
      <Consultation />
    </div>
  );
}
