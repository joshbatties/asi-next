import { ProductJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Mesh Products | ASI Steel Melbourne',
  description: 'High-quality steel mesh for construction and reinforcement. Available in standard and custom sizes, compliant with Australian Standards.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/mesh'
  }
}

export default function SteelMesh() {
  return (
    <>
      <ProductJsonLd
        name="Steel Mesh Products"
        description="High-quality steel mesh for construction and reinforcement. Available in standard and custom sizes."
        image="/images/products/mesh.jpg"
      />
      <MetaTags
        title="Steel Mesh Products | ASI Steel Melbourne"
        description="Premium steel mesh products in Melbourne. Standard and custom sizes available. Reliable mesh solutions for construction projects."
        image="/images/products/mesh-social.jpg"
        pathname="/products/mesh"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Steel Mesh</h1>
      </div>
    </>
  )
}
