<template>
  <form @submit.prevent="createPost()">
    <div class="form-group">
      <input type="text"
             class="from-control"
             name="imgUrl"
             placeholder="post an image"
             v-model="post.imgUrl"
             required
      >
    </div>
    <div class="form-group">
      <input type="text"
             class="from-control"
             name="body"
             placeholder="whats on your mind?"
             v-model="post.body"
             required
      >
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-success">
        Post
      </button>
    </div>
  </form>
</template>

<script>
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { ref } from '@vue/reactivity'
import { Modal } from 'bootstrap'
export default {

  setup() {
    const post = ref({ imgUrl: '', body: '' })
    return {
      post,
      async createPost() {
        try {
          await postsService.createPost(post.value)
          Pop.toast('workss', 'success')

          const modal = Modal.getInstance(document.getElementById('post-form'))
          modal.hide()
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
