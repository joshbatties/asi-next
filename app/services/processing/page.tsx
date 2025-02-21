import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steel Processing Services | ASI Steel Melbourne',
  description: 'Professional steel processing services including cutting, bending, and shaping. Expert steel processing solutions in Melbourne.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/processing'
  }
}

export default function ProcessingBar() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Processing Bar</h1>
      </div>
    </>
  )
}
