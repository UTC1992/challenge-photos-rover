'use client'

import Image from 'next/image'

interface IImageComponentProps {
  url: string
  description: string
}

const ImageComponent: React.FC<IImageComponentProps> = ({
  url,
  description,
}) => {
  return (
    <Image
      quality={75}
      src={url}
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
    />
  )
}

export default ImageComponent
