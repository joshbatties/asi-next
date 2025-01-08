'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string
    item: string
  }>
}

function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://asisteel.com.au${item.item}`
          }))
        })
      }}
    />
  )
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)
  
  // Generate breadcrumb items
  const breadcrumbItems = paths.map((path, index) => {
    const href = '/' + paths.slice(0, index + 1).join('/')
    const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
    return { href, label }
  })

  // Create items for JSON-LD
  const jsonLdItems = [
    { name: 'Home', item: '/' },
    ...breadcrumbItems.map(item => ({
      name: item.label,
      item: item.href
    }))
  ]

  if (paths.length === 0) return null

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <nav aria-label="Breadcrumb" className="bg-black py-2 px-4">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-400">
              Home
            </Link>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-300">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-blue-500 hover:text-blue-400">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}