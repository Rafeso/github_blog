import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { Link } from '../../../../components/Link'
import { PostInfoContainer } from './styles'

export function PostInfo() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      <header>
        <Link
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          href="#"
          variant="iconLeft"
        />
        <Link text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          Rafeso
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          ha 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentarios
        </li>
      </ul>
    </PostInfoContainer>
  )
}
