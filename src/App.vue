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
import { computed } from 'vue'
import { AppState } from './AppState'
import { adsService } from '../src/services/AdsService'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      async getAdds() {
        await adsService.getAdds()
      }
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
