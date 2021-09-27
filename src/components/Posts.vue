<template>
  <div class="card mt-3 borders" style="width: 35vw;">
    <div class="card-title p-2 border-bottom">
      <div class="row text-start">
        <div class="col-lg-11">
          <router-link :to="{ name: 'Profile',params:{id:post.creatorId} }">
            <img :src="post.creatorPic" alt="" class="selectable img-fluid rounded-circle me-2 " style="height:5rem">
          </router-link>
          <span class="fw-bold">{{ post.creatorName }}  </span>
        </div>
        <div class="col-lg-1 text-end pe-4">
          <div v-if="account.id == post.creatorId" class="">
            <div class="dropdown">
              <div class="mdi mdi-dots-horizontal fs-2 text-muted  hover-color " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              </div>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li class="dropdown-item" @click="deletePost()">
                  Delete
                </li>
                <li class="dropdown-item" @click="editPost()">
                  Edit
                </li>
                <li><hr class="dropdown-divider"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <p class="card-text">
        {{ post.body }}
      </p>
    </div>
    <div class="row">
      <div class="card-body border-bottom ">
        <img :src="post.imgUrl" class="card-img-top text-muted" alt="much sad no pic :(">
      <!-- if  -->
      </div>
      <div class="row ">
        <div class="col-6 text-muted d-flex justify-content-between .need_to_be_rendered() ">
          {{ post.createdAt }}
        </div>
        <!-- find a way for the heart to become read and stay read as long as the user likes  -->
        <div class="col-6">
          <div class=" d-flex justify-content-end " @click="likePost()" @dblclick="dislikePost()">
            <i v-if="post.likes.find(el => el.id === account.id)" class="mdi mdi-heart mdi-48px d-flex select text-danger "></i>
            <i v-else class="mdi mdi-heart mdi-48px d-flex select  "></i>
          </div>
          <!-- FIXME show first index of the person that like the post  -->

          <h4 v-if="post.likes.length > 0">
            liked by:
            <router-link :to="{ name: 'Profile',params:{id:post.creatorId} }">
              <img :src="post.likes[0].picture" alt="" class="selectable img-fluid rounded-circle me-2 " style="height:2rem">
            </router-link>
            and
            {{ post.likes.length }} other<span v-if="post.likes.length > 2">s</span>
          </h4>
          <h4 v-else>
            {{ post.likes.length }}likes
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { PostsModel } from '../Models/PostsModel'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
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
      },
      async editPost() {
        await postsService.editPost()
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.hover-color:hover{
color: black !important;
}
.borders{
  border-radius: .5rem;
}
.select:hover{
cursor: pointer;
}
</style>
