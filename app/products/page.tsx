import { WebPageJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Products & Materials | ASI Steel Melbourne',
  description: 'Complete range of steel products including reinforcing bar, mesh, fabrication services, and construction tools. Quality steel supplies in Melbourne.',
  alternates: {
    canonical: 'https://asisteel.com.au/products'
  }
}

export default function Products() {
  return (
    <>
      <WebPageJsonLd
        name="Steel Products - ASI Steel"
        description="Browse our comprehensive range of steel products including reinforcing bar, mesh, fabrication services, and construction tools."
        type="CollectionPage"
      />
      <MetaTags
        title="Steel Products & Materials | ASI Steel Melbourne"
        description="Complete range of quality steel products and construction materials. Melbourne's trusted steel supplier for all your building needs."
        image="/images/products/products-overview.jpg"
        pathname="/products"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Our Products</h1>
      </div>
    </>
  )
}