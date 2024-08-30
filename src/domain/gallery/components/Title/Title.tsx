interface ITitleProps {
  title: string
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  return <h1>{title}</h1>
}

export default Title
