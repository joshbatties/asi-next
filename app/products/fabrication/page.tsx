import { ProductJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Fabrication Services | ASI Steel Melbourne',
  description: 'Professional steel fabrication services in Melbourne. Custom fabrication solutions for construction and industrial projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/fabrication'
  }
}

export default function SteelFabrication() {
  return (
    <>
      <ProductJsonLd
        name="Steel Fabrication Services"
        description="Professional steel fabrication services in Melbourne. Custom fabrication solutions for construction and industrial projects."
        image="/images/products/fabrication.jpg"
      />
      <MetaTags
        title="Steel Fabrication Services | ASI Steel Melbourne"
        description="Expert steel fabrication services in Melbourne. Custom solutions for construction and industrial projects. Quality assured fabrication."
        image="/images/products/fabrication-social.jpg"
        pathname="/products/fabrication"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Steel Fabrication</h1>
      </div>
    </>
  )
}