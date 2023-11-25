<template>
  <section>
    <slot />
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
section{
  width: 100%;
  margin-inline: auto;
  margin-bottom: 3rem;
  padding-top: 1rem;

  @include mobile{
    margin-bottom: 5rem;
    padding-top: 1rem;
  }

  @include tablet{
    margin-bottom: 8rem;
    padding-top: 2rem;
  }
}



</style>