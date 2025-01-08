import { ServiceJsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import MetaTags from '@/components/MetaTags'

export const metadata: Metadata = {
  title: 'Construction Planning Services | ASI Steel Melbourne',
  description: 'Expert construction planning and project scheduling services. Professional material planning and construction coordination in Melbourne.',
  alternates: {
    canonical: 'https://asisteel.com.au/services/planning'
  }
}

export default function PlanScheduling() {
  return (
    <>
      <ServiceJsonLd
        name="Construction Planning Services"
        description="Professional construction planning and scheduling services for steel projects. Efficient project coordination and material planning."
        image="/images/services/planning.jpg"
      />
      <MetaTags
        title="Construction Planning Services | ASI Steel Melbourne"
        description="Expert construction planning services in Melbourne. Professional project scheduling and material planning solutions."
        image="/images/services/planning-social.jpg"
        pathname="/services/planning"
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Plan Scheduling</h1>
      </div>
    </>
  )
}