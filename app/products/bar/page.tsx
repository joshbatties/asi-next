// app/products/bar/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steel Reinforcing Bar | ASI Steel Melbourne',
  description: 'High-quality steel reinforcing bar for construction projects. Available in various sizes and grades, compliant with Australian Standards.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/bar'
  }
}

export default function SteelReinforcingBar() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Steel Reinforcing Bar</h1>
        {/* Page content */}
      </div>
    </>
  )
}