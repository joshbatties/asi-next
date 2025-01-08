export default function ProductsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-black">
        {children}
      </div>
    )
  }
  