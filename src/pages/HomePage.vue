<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <Posts v-for="p in posts " :key="p.id" :post="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { adsService } from '../services/AdsService'
export default {
  setup() {
    onMounted(async() => {
      try {
        await postsService.getPost()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return { posts: computed(() => AppState.posts) }
  }
}

</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
