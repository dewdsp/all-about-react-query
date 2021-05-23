import axios from 'axios'
import { useQuery, queryCache } from 'react-query'

export default function usePost(postId) {
  return useQuery(
    ['posts', postId],
    () => axios.get(`/api/posts/${postId}`).then((res) => res.data),
    {
      initialData: () => {
        return queryCache.getQueryData('posts')?.find((d) => d.id == postId)
      },
      initialStale: true,
    }
  )
}
