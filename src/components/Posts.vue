<template>
  <div class="card" style="width: 18rem;">
    <img :src="post.imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">
        <span>{{ post.creatorName }}</span>
        <img :src="post.creatorPic" alt="">
      </h5>
      <p class="card-text">
        {{ post.body }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { PostsModel } from '../Models/PostsModel'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
export default {
  props: {
    post: { type: PostsModel, required: true }
  },
  setup() {
    return {
      posts: computed(() => AppState.posts),
      async getPost(props) {
        try {
          await postsService.getPost()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
