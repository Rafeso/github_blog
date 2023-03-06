import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.textSizes['title-l']};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      gap: 0.535rem;
      font-size: ${({ theme }) => theme.textSizes['text-m']};
      color: ${({ theme }) => theme.colors['base-span']};
      line-height: 0px;
    }

    svg {
      width: 1.125rem;
      height: 1.225rem;
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
