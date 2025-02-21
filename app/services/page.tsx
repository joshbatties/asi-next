import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steel Services & Solutions | ASI Steel Melbourne',
  description: 'Comprehensive steel services including processing, fabrication, technical support, delivery, and project planning across Melbourne and Victoria.',
  alternates: {
    canonical: 'https://asisteel.com.au/services'
  }
}

export default function Services() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Our Services</h1>
      </div>
    </>
  )
}
