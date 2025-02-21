import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steel Technical Support | ASI Steel Melbourne',
  description: 'Expert technical support and consultation for steel construction projects. Professional advice and solutions in Melbourne.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/support'
  }
}

export default function TechnicalSupport() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Technical Support</h1>
      </div>
    </>
  )
}