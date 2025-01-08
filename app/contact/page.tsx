import { WebPageJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Contact ASI Steel | Steel Suppliers Melbourne',
  description: 'Contact ASI Steel for all your steel supply needs in Melbourne. Expert consultation, quotes, and support for construction projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/contact'
  }
}

export default function Contact() {
  return (
    <>
      <WebPageJsonLd
        name="Contact ASI Steel"
        description="Get in touch with ASI Steel for quality steel products and expert service in Melbourne."
        type="ContactPage"
      />
      <MetaTags
        title="Contact ASI Steel | Steel Suppliers Melbourne"
        description="Connect with Melbourne's leading steel supplier. Expert consultation and support for your construction projects."
        image="/images/contact-social.jpg"
        pathname="/contact"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ASI Steel",
            "url": "https://asisteel.com.au",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+61-XXXXXXXXX",
              "contactType": "sales",
              "areaServed": "Victoria",
              "availableLanguage": "English"
            }]
          })
        }}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Contact Us</h1>
      </div>
    </>
  )
}