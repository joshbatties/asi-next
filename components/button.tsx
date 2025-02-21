'use client'

import Link from 'next/link'

interface ButtonProps {
  href: string
  label: string
  onClick?: () => void
  className?: string
}

const Button = ({ href, label, onClick = () => {}, className = '' }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`border border-gray-500 text-gray-400 bg-transparent rounded-md py-2 px-4
                 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                 hover:border-blue-300 hover:text-blue-200 backdrop-blur-sm hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

export default Button