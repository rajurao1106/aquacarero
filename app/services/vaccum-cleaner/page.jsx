import React from 'react'
import VaccumCleaner from './VaccumCleaner'
import Consultation from '@/components/homepage/CTA'
import FAQ from '@/components/homepage/FAQ'
import Services from '@/components/homepage/Services'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
export default function page() {
  return (
    <div><Breadcrumbs pagename={"Vaccum Cleaner"}/>
      <VaccumCleaner/> <Services/>
      <FAQ/>
      <Consultation/>
    </div>
  )
}
