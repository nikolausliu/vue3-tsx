<template>
  <div :style="{ color }">
    {{ count }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)

const props = withDefaults(defineProps<{
  color: string
}>(), {
  color: 'red'
})

</script>

<script lang="ts">
export default {
  name: 'HelloWorld',
}
</script>

<style lang="less" scoped>


</style>