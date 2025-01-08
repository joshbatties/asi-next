import { ServiceJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Processing Services | ASI Steel Melbourne',
  description: 'Professional steel processing services including cutting, bending, and shaping. Expert steel processing solutions in Melbourne.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/processing'
  }
}

export default function ProcessingBar() {
  return (
    <>
      <ServiceJsonLd
        name="Steel Processing Services"
        description="Professional steel processing services including cutting, bending, and shaping for construction projects in Melbourne."
        image="/images/services/processing.jpg"
      />
      <MetaTags
        title="Steel Processing Services | ASI Steel Melbourne"
        description="Expert steel processing services in Melbourne. Custom cutting, bending, and shaping solutions for construction projects."
        image="/images/services/processing-social.jpg"
        pathname="/services/processing"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Processing Bar</h1>
      </div>
    </>
  )
}
