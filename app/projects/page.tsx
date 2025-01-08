import { WebPageJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Steel Construction Projects | ASI Steel Melbourne',
  description: 'Explore our portfolio of completed steel construction projects across Melbourne. Quality steel solutions for commercial and industrial projects.',
  alternates: {
    canonical: 'https://asisteel.com.au/projects'
  }
}

export default function Projects() {
  return (
    <>
      <WebPageJsonLd
        name="Steel Construction Projects - ASI Steel"
        description="View our showcase of successful steel construction and fabrication projects across Melbourne and Victoria."
        type="CollectionPage"
      />
      <MetaTags
        title="Steel Construction Projects | ASI Steel Melbourne"
        description="Explore our portfolio of successful steel construction projects. Quality steel solutions for commercial and industrial builds in Melbourne."
        image="/images/projects-social.jpg"
        pathname="/projects"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Thing",
                "name": "Commercial Construction Projects",
                "description": "Major commercial construction projects completed by ASI Steel"
              },
              {
                "@type": "Thing",
                "name": "Industrial Projects",
                "description": "Industrial steel fabrication and construction projects"
              },
              {
                "@type": "Thing",
                "name": "Infrastructure Projects",
                "description": "Infrastructure development projects using ASI Steel products"
              }
            ]
          })
        }}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Our Projects</h1>
      </div>
    </>
  )
}