import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steel Mesh Products | ASI Steel Melbourne',
  description: 'High-quality steel mesh for construction and reinforcement. Available in standard and custom sizes, compliant with Australian Standards.',
  alternates: {
    canonical: 'https://asisteel.com.au/products/mesh'
  }
}

export default function SteelMesh() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Steel Mesh</h1>
      </div>
    </>
  )
}
