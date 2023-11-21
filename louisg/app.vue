<template>
  <DefaultLayout onresize="whenTouchscreen">
    <NuxtPage/>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "./layouts/default.vue";
import {Parallax, offsetTop} from "./composables/parallax";


// Disable mouse animation on touchscreen and Safari (animation generate scroll issue on Safari)
window.matchMedia("(pointer: coarse)").matches ? document.documentElement.style.setProperty('--touchscreen-display', ('none')) : document.documentElement.style.setProperty('--touchscreen-display', ('block'));
if(/Safari/.test(navigator.userAgent)){
  document.documentElement.style.setProperty('--touchscreen-display', ('none'))
}

onMounted(() => {
  Parallax.bind();
});

// onMounted(() => {
//   // if(/Safari/.test(navigator.userAgent)){
//   //   document.documentElement.style.setProperty('--touchscreen-display', ('none'))
//   // }
//   document.body.addEventListener("mousemove", (e) => {
//     const mainOutsideWrapper = document.querySelector(".main_outside_wrapper");
//     let scrollX = window.scrollX;
//     let windowWidth = window.innerWidth;
//
//     // change position when screen is larger than main_outside_wrapper to avoid position shift
//     if(mainOutsideWrapper != null && windowWidth > mainOutsideWrapper.clientWidth){
//       scrollX = scrollX - (windowWidth - mainOutsideWrapper.clientWidth) / 2;
//     }
//
//     document.documentElement.style.setProperty(
//         '--x', (
//             e.clientX + scrollX
//         )
//         + 'px'
//     );
//     document.documentElement.style.setProperty(
//         '--y', (
//             e.clientY + window.scrollY
//         )
//         + 'px'
//     );
//   });
// })

</script>

<style scoped lang="scss">
</style>