<template>
  <div class="card" style="width: 18rem;">
    <img :src="post.imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">
        <span>{{ post.creatorName }}</span>
        <!-- if  -->
        <button v-if="account.id == post.creatorId" class="btn btn-danger" @click="deletePost()">
          X
        </button>

        <button>
          <router-link :to="{ name: 'Profile',params:{id:post.creatorId} }">
            <img :src="post.creatorPic" alt="">
          </router-link>
        </button>
      </h5>
      <p class="card-text">
        {{ post.body }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { PostsModel } from '../Models/PostsModel'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
export default {
  props: {
    post: { type: PostsModel, required: true }
  },
  setup(props) {
    watchEffect(){
      AppState.posts
  }
    return {
      // allows me to use accounts from app state in this component
      account: computed(() => AppState.account),
      
      // ---
      async deletePost() {
        try {
          // first we must check for user confirmation before executicution
          if (await Pop.confirm()) { await postsService.removePost(props.post.id) }
          Pop.toast('Post deleted', 'success')
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
