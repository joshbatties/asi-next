
import Hero from '@/components/hero'
import { Metadata } from 'next'

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
    <Hero />
    </>
  )
}