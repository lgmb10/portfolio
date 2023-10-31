<template>
  <div class="main_outside_container">
    <div class="main_outside_wrapper">
      <div class="main_inside_container">
        <Nav></Nav>
<!--        <div id="blur_cursor"></div>-->
        <section class="header">
          <a class="link" href="https://www.linkedin.com/in/louis-gambier-b22b91172" target="_blank">
            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
              <path
                  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
            </svg>
          </a>
          <Button title="CV" url="/cv_louis_gambier.pdf"></Button>
          <Button title="Contact" url="mailto:louisgambier10@gmail.com"></Button>
        </section>
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

.main_outside_container {
  height: 100vh;
  max-height: -webkit-fill-available;
  max-height: -moz-available;
  background: linear-gradient(109.6deg, $a 33%, $b 66%, $d 100%);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  overflow: hidden;


  // Only here for IOS height adaptation (-webkit-fill-available take into account padding)
  .main_outside_wrapper {
    max-width: var(--max-width);
    margin-inline: auto;
    height: 100%;
    padding: 0.7rem;

    @include tablet {
      padding: 1.2rem;
    }

    @include desktop {
      padding-right: 2.2rem;
    }
  }

  .main_inside_container {
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    background-color: rgba($background, 0.8);

    .main_inside_wrapper {
      height: 100%;
      overflow-y: scroll;
      scroll-behavior: smooth;
      display: flex;
      flex-direction: column;
      padding-top: 3rem;

      @include desktop {
        padding-top: 0;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .main_inside_container, .main_inside_wrapper {
    border-radius: var(--container-border);

    @include tablet {
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
    to {
      transform: rotate(360deg)
    }
  }
}

.header {
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 0.8rem;
  padding: 0.6rem;
  border-top-left-radius: var(--container-border);
  border-top-right-radius: var(--container-border);
  background-color: rgba($b, 0.3);
  backdrop-filter: blur(10px);
  z-index: 4;

  @include desktop{
    width: fit-content;
    right: 0;
    left: inherit;
    flex-direction: row;
    padding: 1rem;
    justify-content: flex-end;
    border-top-right-radius: var(--container-border);
    border-top-left-radius: 0;
    border-bottom-left-radius: var(--container-border);
  }

  .link {
    display: block;
    width: 2rem;
    aspect-ratio: 1 / 1;

    &:hover {
      svg {
        path{
          fill: $light-purple;
        }
      }
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      path{
        transition: $transition;
      }
    }
  }
}

</style>