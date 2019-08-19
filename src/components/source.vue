<template>
  <pre>{{valueString}}</pre>
</template>
<script>
export default {
  name: 'v-source',
  props: {
    value: Array
  },
  computed: {
    valueString () {
      return JSON.stringify(this.value, null, 2)
    }
  }
}
</script>
