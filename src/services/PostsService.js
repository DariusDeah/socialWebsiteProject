import { axios } from 'axios'
import { AppState } from '../AppState'
import { PostsModel } from '../Models/PostsModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getPost() {
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data.posts.map(p => new PostsModel(p))
  }
}
export const postsService = new PostsService()
