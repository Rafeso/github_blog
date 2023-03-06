import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 16.25rem;
  border-radius: 10px;
  transition: 0.4s;
  background: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes['title-m']};
      color: ${({ theme }) => theme.colors['base-title']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      font-size: ${({ theme }) => theme.textSizes['text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  p {
    font-size: ${({ theme }) => theme.textSizes['text-m']};
    color: ${({ theme }) => theme.colors['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
