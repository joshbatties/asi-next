// app/components/JsonLd.tsx
interface JsonLdProps {
    name: string;
    description: string;
    image?: string;
    price?: string;
  }
  
  export function LocalBusinessJsonLd() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ASI Steel",
            "image": "https://asisteel.com.au/images/logo-transparent-white.png",
            "@id": "https://asisteel.com.au",
            "url": "https://asisteel.com.au",
            "telephone": "+61XXXXXXXXX", // Add your phone number
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "Your Postal Code",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -37.8136, // Replace with actual coordinates
              "longitude": 144.9631 // Replace with actual coordinates
            },
            "areaServed": {
              "@type": "State",
              "name": "Victoria"
            }
          })
        }}
      />
    )
  }
  
  export function ProductJsonLd({ name, description, image, price }: JsonLdProps) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name,
            description,
            image,
            brand: {
              "@type": "Brand",
              name: "ASI Steel"
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "AUD",
              availability: "https://schema.org/InStock",
              areaServed: {
                "@type": "State",
                name: "Victoria"
              }
            }
          })
        }}
      />
    )
  }
  
  export function ServiceJsonLd({ name, description, image }: JsonLdProps) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: name,
            name,
            description,
            image,
            provider: {
              "@type": "LocalBusiness",
              name: "ASI Steel",
              areaServed: {
                "@type": "State",
                name: "Victoria"
              }
            }
          })
        }}
      />
    )
  }
  
  export function WebPageJsonLd({ name, description, type = "WebPage" }: JsonLdProps & { type?: string }) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type,
            name,
            description,
            provider: {
              "@type": "LocalBusiness",
              name: "ASI Steel"
            }
          })
        }}
      />
    )
  }