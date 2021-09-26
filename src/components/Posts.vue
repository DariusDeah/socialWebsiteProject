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
      <div class="row">
        <div class="col d-flex justify-content-between">
          {{ new Date( post.createdAt).toDateString() }}
          <div>
            <!-- find a way for the heart to become read and stay read as long as the user likes  -->
            <div class="mdi mdi-heart mdi-48px d-flex selectable " @lclick="likePost()" @dblclick="dislikePost()"></div>
            <!-- FIXME show first index of the person that like the post  -->
            <h4>liked by:  post.likes[0].name  </h4> <h4>{{ post.likes.length }}</h4>
          </div>
        </div>
      </div>
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
    return {
      // allows me to use accounts from app state in this component
      account: computed(() => AppState.account),

      // ---
      async deletePost() {
        try {
          // first we must check for user confirmation before executicution
          // TODO stretch goal get the page to delete a post without needing to refresh page to see deletion
          if (await Pop.confirm()) {
            await postsService.removePost(props.post.id)
            Pop.toast('Post deleted', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async likePost() {
        await postsService.likePost(props.post.id)

        Pop.toast('post liked', 'success')
      },
      async dislikePosts() {
        await postsService.unlikePost(props.post.id)
        Pop.toast('post unliked', 'success')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
