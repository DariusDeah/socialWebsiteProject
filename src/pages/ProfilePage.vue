<template>
  <h1>this is the profile page </h1>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
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
    return {
      profile: computed(() => AppState)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
