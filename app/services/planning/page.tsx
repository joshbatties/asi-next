import { Metadata } from 'next'

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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Plan Scheduling</h1>
      </div>
    </>
  )
}