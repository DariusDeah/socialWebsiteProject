import { axios } from 'axios'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getPost() {
    const res = await api.get('api/posts')
    logger.log(res.data)
  }
}
export const postsService = new PostsService()
