'use client'

import Image from 'next/image'
import { useState } from 'react'

interface IImageComponentProps {
  url: string
  description: string
}

const ImageComponent: React.FC<IImageComponentProps> = ({
  url,
  description,
}) => {
  const [src, setSrc] = useState(url)
  return (
    <Image
      quality={75}
      src={src}
      alt={description}
      style={{
        objectFit: 'cover',
        width: '100%',
        height: 'auto',
        borderRadius: '9px',
      }}
      width={300}
      height={350}
      priority
      blurDataURL="/404Image.png"
      onError={(e) => setSrc('/404Image.png')}
    />
  )
}

export default ImageComponent
