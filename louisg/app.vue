<template>
  <DefaultLayout onresize="whenTouchscreen">
    <NuxtPage/>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "./layouts/Default.vue";

onMounted(() => {
  document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
        '--x', (
            e.clientX + window.scrollX
        )
        + 'px'
    );
    document.documentElement.style.setProperty(
        '--y', (
            e.clientY + window.scrollY
        )
        + 'px'
    );
  }

  //disable mouse animation on touchscreen
  window.matchMedia("(pointer: coarse)").matches ? document.documentElement.style.setProperty('--touchscreen-display', ('none')) : document.documentElement.style.setProperty('--touchscreen-display', ('block'));
})

</script>

<style scoped lang="scss">
</style>