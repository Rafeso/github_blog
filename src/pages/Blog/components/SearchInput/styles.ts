import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    h3 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: ${({ theme }) => theme.textSizes['title-s']};
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.textSizes['text-s']};
      font-weight: 400;
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    color: ${({ theme }) => theme.colors['base-text']};
    transition: 0.4s;

    &:focus::placeholder {
      border-color: ${({ theme }) => theme.colors['brand-blue']};
      color: ${({ theme }) => theme.colors['base-text']};
      outline: none;
    }
  }
`
