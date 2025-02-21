import { Metadata } from 'next'

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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Tools & Accessories</h1>
      </div>
    </>
  )
}