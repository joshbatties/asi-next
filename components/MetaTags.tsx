interface MetaTagsProps {
    title: string
    description: string
    image?: string
    type?: string
    pathname: string
  }
  
  export default function MetaTags({
    title,
    description,
    image = '/images/asi-social-share.jpg',
    type = 'website',
    pathname
  }: MetaTagsProps) {
    const baseUrl = 'https://asisteel.com.au'
    const url = `${baseUrl}${pathname}`
    
    return (
      <>
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}${image}`} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="ASI Steel" />
        <meta property="og:locale" content="en_AU" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}${image}`} />
  
        {/* Additional SEO */}
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />
      </>
    )
  }