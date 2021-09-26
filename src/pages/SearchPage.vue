<template>
  <div class="conatiner-fluid">
    <div class="row justify-content-center">
      <div class="col-8 ">
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <Search />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 ">
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <!-- <Profile /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 ">
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <Posts v-for="p in posts" :key="p.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
