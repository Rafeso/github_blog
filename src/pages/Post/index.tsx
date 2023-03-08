import { api } from '@lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from '../Blog'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'

const username = 'Rafeso'
const repoName = 'blog-posts'

export function Post() {
  const [isLoading, setIsLoading] = useState(true)
  const [postData, setPostData] = useState<IPost>({} as IPost)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <>
      <PostInfo isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
