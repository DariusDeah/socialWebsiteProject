<template>
  <form @submit.prevent="createPost()">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text"
             class="form-control"
             name="title"
             placeholder="title"
             v-model="editable.title"
             required
      >
    </div>
    <div class="form-group">
      <input type="text"
             class="from-control"
             name="imgUrl"
             placeholder="post an image"
             v-model="editable.imageUrl"
             required
      >
    </div>
  </form>
</template>

<script>
export default {

  setup() {
    return {
      editable
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
