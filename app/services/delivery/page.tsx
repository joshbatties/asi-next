import { Metadata } from 'next'

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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Materials Delivery</h1>
      </div>
    </>
  )
}