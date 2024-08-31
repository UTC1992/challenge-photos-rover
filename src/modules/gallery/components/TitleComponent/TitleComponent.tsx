interface ITitleComponentProps {
  title: string
}

const TitleComponent: React.FC<ITitleComponentProps> = ({ title }) => {
  return <h1>{title}</h1>
}

export default TitleComponent
