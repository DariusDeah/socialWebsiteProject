<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <Modal id="post-modal">
    <template #modal-title>
      <h4>Post Form</h4>
    </template>
    <template #modal-body>
      <PostForm />
    </template>
  </Modal>
</template>

<script>

import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { adsService } from '../src/services/AdsService'
import Pop from './utils/Pop'
export default {
  name: 'App',

  setup() {
    onMounted(async() => {
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {

    }
  }
}

</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
