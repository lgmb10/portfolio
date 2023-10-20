<template>
  <div class="button">
    <a :href="props.url" target="_blank" class="link">{{ props.title }}</a>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'url'])

</script>

<style scoped lang="scss">
  .button{
    transition: $transition;
    width: fit-content;
    backdrop-filter: blur(40px);
    background-color: rgba($d, 0.5);
    border: $border;
    border-radius: 5rem;

    &:hover{
      background-color: rgba($white, 1);
      .link{
        color: $b;
      }
    }

    .link{
      display: block;
      padding: 0.3rem 0.6rem;
      color: $white;
      font-size: 1.1rem;
    }
  }
</style>