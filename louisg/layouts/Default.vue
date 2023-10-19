<template>
  <div class="main_outside_container">
    <div class="main_outside_wrapper">
      <div class="main_inside_container">
        <Nav></Nav>
        <div id="blur_cursor"></div>
        <div class="main_inside_wrapper">
          <slot/>
        </div>
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
img{
  width: 100%;
}

.main_outside_container{
  height: 100vh;
  max-height: -webkit-fill-available;
  max-height: -moz-available;
  //background: linear-gradient(109.6deg, rgb(8, 8, 101) 11.2%, rgb(119, 8, 133) 53.7%, rgb(0, 73, 133) 100.2%);
  background: linear-gradient(109.6deg, $a 33%, $b 66%, $d 100%);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;


  // Only here for IOS height adaptation (-webkit-fill-available take into account padding)
  .main_outside_wrapper{
    height: 100%;
    padding: 0.7rem;

    @include tablet{
      padding: 1.5rem;
    }

    @include desktop{
      padding-right: 2.2rem;
    }
  }

  .main_inside_container{
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    background-color: rgba($background, 0.8);

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

  @keyframes rotate_gradient {
    to { transform: rotate(360deg) }
  }
}
</style>