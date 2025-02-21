import { Metadata } from 'next'

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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Our Products</h1>
      </div>
    </>
  )
}