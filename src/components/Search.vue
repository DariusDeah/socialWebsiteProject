<template>
  <form @submit.prevent="querySearch()">
    <input v-model="query" type="text" required>
  </form>
</template>

<script>
import { postsService } from '../services/PostsService'
export default {
  setup() {
    return {
      async querySeach(query) {
        try {
          postsService.getPost(query.params)
        } catch (error) {

        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
