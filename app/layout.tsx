// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ASI Steel | Steel Suppliers Melbourne',
    template: '%s | ASI Steel Melbourne'
  },
  description: 'Leading steel suppliers in Melbourne. ASI Steel provides premium steel products, fabrication services, and reinforcing solutions across Victoria. Quality Australian steel solutions.',
  keywords: ['steel suppliers melbourne', 'steel fabrication', 'reinforcing bar', 'steel mesh', 'construction supplies melbourne', 'building materials victoria'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ASI Steel | Premium Steel Suppliers Melbourne',
    description: 'Melbourne\'s trusted steel supplier. Specializing in steel fabrication, reinforcing bar, and construction supplies across Victoria.',
    url: 'https://asisteel.com.au',
    siteName: 'ASI Steel',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASI Steel | Steel Suppliers Melbourne',
    description: 'Premium steel products and fabrication services in Melbourne. Quality Australian steel solutions for construction and building projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}