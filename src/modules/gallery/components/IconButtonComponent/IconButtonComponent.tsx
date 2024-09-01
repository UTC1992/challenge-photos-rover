'use client'

import { ReactNode } from 'react'

import styles from './IconButtonComponent.module.css'

interface IIconButtonComponentProps {
  icon: ReactNode
}

const IconButtonComponent: React.FC<IIconButtonComponentProps> = ({ icon }) => {
  return <button className={styles['icon-button']}>{icon}</button>
}

export default IconButtonComponent
