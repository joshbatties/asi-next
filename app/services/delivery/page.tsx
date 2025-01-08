import { ServiceJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Materials Delivery | ASI Steel Melbourne',
  description: 'Reliable steel materials delivery across Melbourne and Victoria. Fast, secure transport for all steel products and construction materials.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/delivery'
  }
}

export default function MaterialsDelivery() {
  return (
    <>
      <ServiceJsonLd
        name="Steel Materials Delivery"
        description="Reliable and efficient steel materials delivery service across Melbourne and Victoria. Timely and secure delivery guaranteed."
        image="/images/services/delivery.jpg"
      />
      <MetaTags
        title="Steel Materials Delivery | ASI Steel Melbourne"
        description="Fast and reliable steel delivery services across Melbourne. Secure transport for all your construction materials."
        image="/images/services/delivery-social.jpg"
        pathname="/services/delivery"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Materials Delivery</h1>
      </div>
    </>
  )
}