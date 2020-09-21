<template>
  <span
    :id="getIdVal(idVal)"
    class="leancloud-visitors"
    :data-flag-title="flagTitle"
  >
    <a
      class="leancloud-visitors-count"
      :style="numStyle"
    />
  </span>
</template>

<script>
export default {
  props: {
    idVal: {
      type: String,
      default: ''
    },
    numStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    flagTitle: {
      type: String,
      default: 'Your Article Title'
    }
  },
  methods: {
    getIdVal (path) {
      const base = this.$site.base
      return base.slice(0, base.length - 1) + path
    }
  }
}
</script>
