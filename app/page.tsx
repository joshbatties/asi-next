import { WebPageJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'ASI Steel | Leading Steel Suppliers Melbourne',
  description: 'Melbourne\'s trusted steel supplier. Quality steel products, fabrication services, and construction solutions. Expert service across Victoria.',
  alternates: {
    canonical: 'https://asisteel.com.au'
  }
}

export default function Home() {
  return (
    <>
      <WebPageJsonLd
        name="ASI Steel - Melbourne Steel Suppliers"
        description="Leading steel suppliers in Melbourne. Premium steel products and fabrication services for construction projects."
        type="WebSite"
      />
      <MetaTags
        title="ASI Steel | Leading Steel Suppliers Melbourne"
        description="Melbourne's premier steel supplier. Quality steel products, fabrication services, and construction solutions. Servicing all of Victoria."
        image="/images/asi-homepage-social.jpg"
        pathname="/"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Welcome to ASI Steel</h1>
      </div>
    </>
  )
}