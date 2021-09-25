import { axios } from 'axios'
import { AppState } from '../AppState'
import { PostsModel } from '../Models/PostsModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { convertToQuery } from '../utils/Query'

class PostsService {
  async getPost(query = {}) {
    AppState.posts = []
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log(res.data)
    AppState.posts = res.data.posts.map(p => new PostsModel(p))
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    AppState.posts.unshift(new PostsModel(res.data))
    logger.log('created data', res)
  }

  async removePost(postId) {
    const res = await api.delete(api / posts)
  }
}
export const postsService = new PostsService()
