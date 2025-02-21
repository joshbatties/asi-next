'use client'

import Link from 'next/link'

interface SecondaryButtonProps {
  href: string
  label: string
  onClick?: () => void
}

const SecondaryButton = ({ href, label, onClick = () => {} }: SecondaryButtonProps) => {
  return (
    <Link
      href={href}
      className="border border-blue-500 text-blue-400 bg-transparent rounded-md py-2 px-4 
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] 
                hover:border-blue-300 hover:text-blue-200 backdrop-blur-sm hover:scale-105"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

export default SecondaryButton