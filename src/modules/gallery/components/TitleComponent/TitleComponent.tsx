import { Typography } from '@mui/material'

interface ITitleComponentProps {
  title: string
}

const TitleComponent: React.FC<ITitleComponentProps> = ({ title }) => {
  return <Typography variant="h3">{title}</Typography>
}

export default TitleComponent
