'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

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
    <header className="fixed w-full bg-black text-white z-50">
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
            <ul className="flex space-x-8 items-center">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`py-2 px-4 hover:text-blue-500 transition-colors ${
                      item.isPrimary
                        ? 'bg-blue-600 text-white rounded-md hover:bg-blue-700'
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && activeDropdown === item.label && (
                    <ul className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.label}>
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition-colors"
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
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-black z-40 md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li className="mobile-only-nav">
                <Link
                  href="/"
                  className="block py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.label}>
                  {!item.dropdown ? (
                    <Link
                      href={item.href}
                      className={`block py-2 ${
                        item.isPrimary
                          ? 'text-blue-500 font-semibold'
                          : 'hover:text-blue-500'
                      } transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full text-left py-2 hover:text-blue-500 transition-colors"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                      </button>
                      {activeDropdown === item.label && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.label}>
                              <Link
                                href={dropdownItem.href}
                                className="block py-2 text-gray-300 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}