import { ServiceJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Technical Support | ASI Steel Melbourne',
  description: 'Expert technical support and consultation for steel construction projects. Professional advice and solutions in Melbourne.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/support'
  }
}

export default function TechnicalSupport() {
  return (
    <>
      <ServiceJsonLd
        name="Technical Support Services"
        description="Professional technical support and consultation for steel construction projects in Melbourne. Expert guidance and solutions."
        image="/images/services/support.jpg"
      />
      <MetaTags
        title="Steel Technical Support | ASI Steel Melbourne"
        description="Professional technical support for steel construction projects. Expert consultation and solutions in Melbourne."
        image="/images/services/support-social.jpg"
        pathname="/services/support"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Technical Support</h1>
      </div>
    </>
  )
}