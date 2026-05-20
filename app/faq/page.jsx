import React from 'react'
import FAQ from './FAQ'
import Consultation from '@/components/homepage/CTA'
import FAQ1 from '@/components/homepage/FAQ'
import Services from '@/components/homepage/Services'
export default function page() {
  return (
    <div>
      <FAQ1/>
       <Services/>
      <FAQ/>
      <Consultation/>
    </div>
  )
}
