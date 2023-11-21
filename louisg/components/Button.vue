<template>
  <div class="button">
    <a v-if="!props.isRouting" :href="props.url" class="link" target="_blank">{{ props.title }}</a>
    <NuxtLink v-if="props.isRouting" :to="props.url" class="link">{{props.title}}</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  'title' : String,
  'url' : String,
  'isRouting': {
    type : Boolean,
    default : false,
  }
})

</script>

<style lang="scss" scoped>
.button {
  transition: $transition;
  width: fit-content;
  backdrop-filter: blur(40px);
  background-color: rgba($d, 0.5);
  border: $border;
  border-radius: 5rem;

  &:hover {
    background-color: rgba($white, 1);

    .link {
      color: $b;
    }
  }

  .link {
    display: block;
    padding: 0.3rem 0.6rem;
    color: $white;
    font-size: 1.1rem;
  }
}
</style>