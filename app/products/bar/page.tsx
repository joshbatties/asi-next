// app/products/bar/page.tsx
import { ProductJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Reinforcing Bar | ASI Steel Melbourne',
  description: 'High-quality steel reinforcing bar for construction projects. Available in various sizes and grades, compliant with Australian Standards.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/bar'
  }
}

export default function SteelReinforcingBar() {
  return (
    <>
      <ProductJsonLd
        name="Steel Reinforcing Bar"
        description="High-quality steel reinforcing bar for construction projects. Available in various sizes and grades."
        image="/images/products/reinforcing-bar.jpg"
      />
      <MetaTags
        title="Steel Reinforcing Bar | ASI Steel Melbourne"
        description="Premium steel reinforcing bar supply in Melbourne. Custom cutting and bending available. AS/NZS compliant reinforcing solutions."
        image="/images/products/reinforcing-bar-social.jpg"
        pathname="/products/bar"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Steel Reinforcing Bar</h1>
        {/* Page content */}
      </div>
    </>
  )
}