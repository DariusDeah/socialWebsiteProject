<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="modal-title"></slot>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal">
          </button>
          <button type="button" class="btn btn-primary">
            Post it
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
