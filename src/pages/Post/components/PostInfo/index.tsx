import { Link } from '@component/Link'
import { Spinner } from '@component/Spinner'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateFormatter } from '@utils/formatter'
import { useNavigate } from 'react-router-dom'
import { IPost } from 'pages/Blog'
import { PostInfoContainer } from './styles'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostInfo({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = DateFormatter(postData?.created_at)
  return (
    <PostInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <Link
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              href="#"
              variant="iconLeft"
            />
            <Link
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentarios
            </li>
          </ul>
        </>
      )}
    </PostInfoContainer>
  )
}
