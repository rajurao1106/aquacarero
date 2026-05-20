import React from "react";
import SpareParts from "./SpareParts";
import Consultation from "@/components/homepage/CTA";
import FAQ from "@/components/homepage/FAQ";
import Services from "@/components/homepage/Services";
import Breadcrumbs from '@/components/layout/Breadcrumbs'
export default function page() {
  return (
    <div><Breadcrumbs pagename={"Spare Parts"}/>
      <SpareParts /> 
      <Services />
      <FAQ />
      <Consultation />
    </div>
  );
}
