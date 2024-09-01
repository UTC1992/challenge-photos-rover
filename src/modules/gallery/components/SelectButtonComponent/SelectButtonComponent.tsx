'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import styles from './SelectButtonComponent.module.css'

interface ISelectButtonComponentProps {
  title: string
}

const SelectButtonComponent: React.FC<ISelectButtonComponentProps> = ({
  title,
}) => {
  return (
    <button className={styles.button}>
      {title}
      <ExpandMoreIcon />
    </button>
  )
}

export default SelectButtonComponent
