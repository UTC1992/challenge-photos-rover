interface ISelectButtonProps {
  title: string
}

const SelectButton: React.FC<ISelectButtonProps> = ({ title }) => {
  return <button>{title}</button>
}

export default SelectButton
