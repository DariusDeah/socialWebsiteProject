<template>
  <div class="row">
    <div class="col-4">
      <h5>{{ ad.title }}</h5>
      <img :src="ad.tall" alt="">
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AdsModel } from '../Models/AdsModel'
import { AppState } from '../AppState'
export default {
  props: {
    ad: { type: AdsModel, required: true }
  },
  setup(props) {
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
