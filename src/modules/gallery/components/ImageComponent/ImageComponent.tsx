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
        objectFit: 'contain',
        position: 'relative',
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
      }}
      width={300}
      height={350}
      loading="lazy"
    />
  )
}

export default ImageComponent
