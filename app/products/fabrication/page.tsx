import { Metadata } from 'next'

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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Steel Fabrication</h1>
      </div>
    </>
  )
}