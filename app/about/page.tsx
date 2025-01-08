import { WebPageJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

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
      <WebPageJsonLd
        name="About ASI Steel"
        description="Discover ASI Steel's commitment to quality steel solutions and excellent service in Melbourne."
        type="AboutPage"
      />
      <MetaTags
        title="About ASI Steel | Steel Suppliers Melbourne"
        description="Melbourne's trusted steel supplier since [year]. Quality products, expert service, and commitment to excellence in the construction industry."
        image="/images/about-social.jpg"
        pathname="/about"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">About Us</h1>
      </div>
    </>
  )
}