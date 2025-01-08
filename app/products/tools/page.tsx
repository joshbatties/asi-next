import { ProductJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Construction Tools & Accessories | ASI Steel Melbourne',
  description: 'Professional-grade construction tools and steel working accessories. Quality tools for construction and steel fabrication projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/tools'
  }
}

export default function ToolsAndAccessories() {
  return (
    <>
      <ProductJsonLd
        name="Construction Tools & Accessories"
        description="Professional-grade construction tools and steel working accessories. Quality tools for construction and steel fabrication projects."
        image="/images/products/tools.jpg"
      />
      <MetaTags
        title="Construction Tools & Accessories | ASI Steel Melbourne"
        description="Quality construction tools and accessories in Melbourne. Complete range of professional building and steel working equipment."
        image="/images/products/tools-social.jpg"
        pathname="/products/tools"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Tools & Accessories</h1>
      </div>
    </>
  )
}