<template>
  <form @submit.prevent="querySearch()">
    <div class="form-group">
      <input v-model="query" type="text" required class="form-control bg-white" placeholder="search">
    </div>
  </form>
</template>

<script>
import { postsService } from '../services/PostsService'
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const query = ref('')
    return {
      query,
      async querySearch() {
        try {
          await postsService.getPost(query.value)
          logger.log(query.value)
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
