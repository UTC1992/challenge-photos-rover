interface ISelectButtonComponentProps {
  title: string
}

const SelectButtonComponent: React.FC<ISelectButtonComponentProps> = ({
  title,
}) => {
  return <button>{title}</button>
}

export default SelectButtonComponent
