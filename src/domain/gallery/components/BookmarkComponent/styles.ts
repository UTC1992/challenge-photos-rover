import styled from 'styled-components'

export const BookmarkStyled = styled('button')`
  background-color: #e0e5e0;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  &:hover {
    background-color: #d4d5d4;
    cursor: pointer;
  }
`
