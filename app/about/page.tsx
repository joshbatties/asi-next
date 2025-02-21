import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About ASI Steel | Steel Suppliers Melbourne',
  description: 'Learn about ASI Steel, Melbourne\'s leading steel supplier. Our history, commitment to quality, and dedication to excellent service.',
  alternates: {
    canonical: 'https://asisteel.com.au/about'
  }
}

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">About Us</h1>
      </div>
    </>
  )
}