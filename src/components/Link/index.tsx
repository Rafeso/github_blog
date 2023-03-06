import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps } from 'react'
import { LinkContainer } from './styles'

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
}

export function Link({ text, ...props }: LinkProps) {
  return (
    <LinkContainer {...props}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </LinkContainer>
  )
}
