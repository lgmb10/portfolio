<template>
  <div class="button">
    <NuxtLink to="/">Contact</NuxtLink>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
  .button{
    display: inline-block;
    border: 2px solid var(--white);
    border-radius: 5rem;
    padding: 0.1rem 0.4rem;

    a{
      color: var(--white);
    }
  }
</style>