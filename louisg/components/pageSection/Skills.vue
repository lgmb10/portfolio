<template>
  <div class="skills_container">
    <div class="skills_wrapper">
      <div :data-parallax="`{'y': -${parallaxVal}, 'stopAtInitialPosition': true}`" class="skill">
        <img src="~/assets/img/vue.png">
        <p>Vue</p>
      </div>
      <div :data-parallax="`{'y': ${parallaxVal}, 'stopAtInitialPosition': true}`" class="skill">
        <img src="~/assets/img/nuxt.png">
        <p>Nuxt</p>
      </div>
      <div :data-parallax="`{'y': -${parallaxVal}, 'stopAtInitialPosition': true}`" class="skill">
        <img src="~/assets/img/javascript.png">
        <p>Javascript</p>
      </div>
      <div :data-parallax="`{'y': ${parallaxVal}, 'stopAtInitialPosition': true}`" class="skill">
        <img src="~/assets/img/html.webp">
        <p>HTML</p>
      </div>
      <div :data-parallax="`{'y': -${parallaxVal}, 'stopAtInitialPosition': true}`" class="skill">
        <img src="~/assets/img/scss.png">
        <p>SCSS</p>
      </div>
      <div :data-parallax="`{'y': ${parallaxVal}, 'stopAtInitialPosition': true}`" class="skill">
        <img src="~/assets/img/symfony.svg">
        <p>Symfony</p>
      </div>
      <div :data-parallax="`{'y': -${parallaxVal}, 'stopAtInitialPosition': true}`" class="skill">
        <img src="~/assets/img/git.png">
        <p>Git</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {Parallax} from "~/composables/parallax";

const parallax = 0.1;
let parallaxVal = ref(0);
if (window.innerWidth > 1350) parallaxVal.value = parallax;

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1350) {
      parallaxVal.value = parallax;
    } else {
      parallaxVal.value = 0;
    }

    Parallax.bind();
  });
});

</script>

<style lang="scss" scoped>
.skills_container {
  padding-inline: 1.5rem;

  @include mobile {
    padding-inline: 3rem;
  }

  @include tablet {
    padding-inline:4rem;
    padding-block: 3rem 1rem;
  }

  @include desktop-xl{
    padding-block: 4rem 1rem;
  }

  .skills_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1.5rem 3rem;

    @include tablet {
      gap: 3rem 5rem;
    }

    .skill {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 2.5rem;

      @include tablet{
        margin-bottom: 4rem;
      }

      img {
        width: 3rem;
        aspect-ratio: 1 / 1;
        object-fit: contain;

        @include tablet {
          width: 5rem;
        }
      }

      p {
        position: absolute;
        transform: translateX(-50%);
        bottom: -2rem;
        left: 50%;
        padding-top: 1.5rem;

        @include tablet {
          font-size: 1.5rem;
          bottom: -3rem;
        }
      }
    }
  }
}

</style>