/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from '@component/Spinner'
import { Post } from '@componentBlog/Post'
import { Profile } from '@componentBlog/Profile'
import { SearchInput } from '@componentBlog/SearchInput'
import { api } from '@lib/axios'
import { useCallback, useEffect, useState } from 'react'

import { PostListContainer } from './styles'

const username = 'Rafeso'
const repoName = 'blog-posts'
export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )
        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostListContainer>
      )}
    </>
  )
}
