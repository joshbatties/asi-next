'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import SecondaryButton from './secondary-button'

interface NavItem {
  label: string
  href: string
  dropdown?: NavItem[]
  isPrimary?: boolean
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    dropdown: [
      { label: 'Steel Reinforcing Bar', href: '/products/bar' },
      { label: 'Steel Fabrication', href: '/products/fabrication' },
      { label: 'Steel Mesh', href: '/products/mesh' },
      { label: 'Tools & Accessories', href: '/products/tools' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Processing Bar', href: '/services/processing' },
      { label: 'Steel Fabrication', href: '/products/fabrication' },
      { label: 'Technical Support', href: '/services/support' },
      { label: 'Materials Delivery', href: '/services/delivery' },
      { label: 'Plan Scheduling', href: '/services/planning' },
    ],
  },
  { label: 'Contact', href: '/contact', isPrimary: true },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed w-full bg-black text-white z-50 border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-transparent-white.png"
              alt="ASI Logo"
              width={80}
              height={40}
              className="w-20 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.isPrimary ? (
                    <SecondaryButton href={item.href} label={item.label} />
                  ) : (
                    <Link
                      href={item.href}
                      className="py-2 px-3 hover:text-blue-400 transition-colors font-light relative after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:bottom-1 after:left-3 hover:after:w-[calc(100%-24px)] after:transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && activeDropdown === item.label && (
                    <ul className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-2 border border-white/10">
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.label}>
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm font-light hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 top-20 bg-black z-40 md:hidden border-t border-white/10 
                    transition-all duration-300 flex justify-center items-start 
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="container px-4 py-8 flex flex-col items-center">
          <ul className="space-y-0 w-full text-center divide-y divide-white/10">
            <li className="mobile-only-nav relative py-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:shadow-[0_0_5px_rgba(255,255,255,0.2)]">
              <Link
                href="/"
                className="inline-block py-3 text-xl hover:text-blue-400 transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            {navItems.map((item, index) => (
              <li key={item.label} className="py-5 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                {!item.dropdown ? (
                  <Link
                    href={item.href}
                    className="inline-block py-3 text-xl font-light hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-center py-3 text-xl font-light hover:text-blue-400 transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-3 py-3 bg-black rounded-lg border border-white/5">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.label}>
                            <Link
                              href={dropdownItem.href}
                              className="inline-block py-2 text-lg text-gray-300 font-light hover:text-blue-400 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}