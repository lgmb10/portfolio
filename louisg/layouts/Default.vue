<template>
  <div class="main_outside_container">
    <div class="main_inside_container">
      <div id="blur_cursor"></div>
      <div class="main_inside_wrapper">
        <Nav></Nav>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style scoped lang="scss">
.main_outside_container{
  padding: 0.7rem;
  height: 100vh;
  background: linear-gradient(109.6deg, rgb(8, 8, 101) 11.2%, rgb(119, 8, 133) 53.7%, rgb(0, 73, 133) 100.2%);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @include tablet{
    padding: 1.5rem;
  }

  .main_inside_container{
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    background-color: rgba($background, 0.9);

    .main_inside_wrapper{
      height: 100%;
      overflow: scroll;
    }
  }

  .main_inside_container, .main_inside_wrapper{
    border-radius: var(--container-border);

    @include tablet{
      border-radius: var(--container-border);
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>