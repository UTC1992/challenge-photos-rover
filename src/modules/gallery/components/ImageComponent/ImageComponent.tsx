'use client'

import { Box, Paper } from '@mui/material'
import Image from 'next/image'
import { ImageBoxStyled } from './styledComponents'

interface IImageComponentProps {
  url: string
  description: string
}

const ImageComponent: React.FC<IImageComponentProps> = ({
  url,
  description,
}) => {
  return (
    <ImageBoxStyled>
      <Image
        quality={75}
        src={url}
        alt={description}
        style={{
          objectFit: 'contain',
          position: 'relative',
          width: '100%',
          height: 'auto',
          borderRadius: '9px',
        }}
        width={300}
        height={350}
        priority
      />
    </ImageBoxStyled>
  )
}

export default ImageComponent
