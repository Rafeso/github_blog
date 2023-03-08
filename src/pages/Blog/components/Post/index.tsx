import { DateFormatter } from '@utils/formatter'
import { IPost } from '../..'
import { PostContainer } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const formattedDate = DateFormatter(post.created_at)
  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}
