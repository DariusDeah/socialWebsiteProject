<template>
  <div class="container">
    <div class="row  ">
      <div class="col-lg-12 mt-5">
        <div class="card px-2 " style="width: 70vw;">
          <img :src="profile.coverImg" alt="" class="img-fluid" style="height:40rem">
          <div class="card-body">
            <div class="row">
              <div class="postion">
                <img :src="profile.picture" class="img-fluid rounded-circle" style="height:7rem" alt="">
              </div>
            </div>
            <h1>{{ profile.name }}</h1>
            <p class="card-text border-bottom">
              {{ profile.bio }}
            </p>
          </div>
          <div class="row justify-content-between">
            <div class="col-6 d-flex">
              <i v-if="profile.graduated === true" class="mdi mdi-school fs-2 text-primary"> </i>

              <h5>{{ profile.class }}</h5>
              <a :href="profile.github" class="mdi mdi-github fs-2 color-dark">

              </a>
              <!-- FIXME links back to homepage instead of linked in  -->
              <a :href="profile.linkedin" class="mdi mdi-linkedin fs-2">
              </a>
            </div>
          </div>
        <!-- TODO should only show couunt for people that arent user -->
        </div>
      </div>
      <h2>{{ posts.length }} Posts | {{ profile.subs.length }} Followers</h2>
      <Posts v-for="p in posts " :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import { logger } from '../utils/Logger'

export default {
  setup() {
    const route = useRoute()
    async function getPosts() {
      try {
        await postsService.getPost({ creatorId: route.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        await profileService.getProfileById(route.params.id)
        getPosts()
      }
    })
    return {
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts)

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
