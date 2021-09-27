<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <img :src="profile.coverImg" alt="">
        <!-- TODO v if to display a grad symbol only if the user  graduted ===true -->
        <h4>graduted {{ profile.graduated }}</h4>
        <h5>{{ profile.class }}</h5>
        <p>{{ profile.bio }}</p>
        <a :href="profile.github" class="mdi mdi-github fs-2 color-dark">

        </a>
        <!-- FIXME links back to homepage instead of linked in  -->
        <a :href="profile.linkedin" class="mdi mdi-linkedin fs-2">
        </a>
        <h1>{{ profile.name }}</h1>
        <!-- TODO should only show couunt for people that arent user -->
      </div>
    </div>
    <Posts v-for="p in posts " :key="p.id" :post="p" />
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'

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
