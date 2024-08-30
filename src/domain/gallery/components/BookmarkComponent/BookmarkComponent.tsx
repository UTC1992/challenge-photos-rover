interface IBookmarkComponentProps {
  title: string
}

const BookmarkComponent: React.FC<IBookmarkComponentProps> = ({ title }) => {
  return <button>{title}</button>
}

export default BookmarkComponent
