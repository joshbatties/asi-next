import { WebPageJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Services & Solutions | ASI Steel Melbourne',
  description: 'Comprehensive steel services including processing, fabrication, technical support, delivery, and project planning across Melbourne and Victoria.',
  alternates: {
    canonical: 'https://asisteel.com.au/services'
  }
}

export default function Services() {
  return (
    <>
      <WebPageJsonLd
        name="Steel Services - ASI Steel"
        description="Complete range of professional steel services in Melbourne. From processing to delivery, we provide end-to-end steel solutions."
        type="CollectionPage"
      />
      <MetaTags
        title="Steel Services & Solutions | ASI Steel Melbourne"
        description="Expert steel services in Melbourne. Processing, fabrication, technical support, delivery, and project planning solutions."
        image="/images/services/services-overview.jpg"
        pathname="/services"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Our Services</h1>
      </div>
    </>
  )
}
