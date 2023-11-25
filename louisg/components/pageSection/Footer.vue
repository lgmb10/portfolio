<template>
  <footer>
    <section>
      <div>
        <a href="mailto:louisgambier10@gmail.com" target="_blank" class="footer_element">
          <Icon name="fa6-solid:envelope"></Icon>
          louisgambier10@gmail.com
        </a>
      </div>
      <span></span>
      <div>
        <a href="tel:+33781776431" target="_blank" class="footer_element">
          <Icon name="fa6-solid:phone"></Icon>
          07 81 77 64 31
        </a>
      </div>
      <span></span>
      <div class="footer_element">
        <Icon name="fa6-solid:map-location-dot"></Icon>
        <p>Lille</p>
      </div>

    </section>
  </footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
footer{
  width: 100%;

  @include desktop{
    padding-top: 4rem;
  }

  section{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 1.3rem;

    @include tablet{
      padding-top: 2rem;
      border-top: $border;
    }

    @include desktop{
      border-top: inherit;
      padding-top: 0;
      flex-direction: row;
      gap: 0;
    }

    >div{
      @include desktop{
        width: 33%;
      }
    }

    .footer_element, {
      display: flex;
      align-items: center;

      @include desktop{
        flex-direction: column;
      }

      .icon{
        font-size: 2rem;
        margin-right: 1rem;

        @include desktop{
          margin: 0 0 1rem;
        }
      }
    }

    a:hover{
      color: $light-purple;
    }

    span{
      display: none;
      width: 1px;
      height: 3.5rem;
      background-color: $border-color;

      @include desktop{
        display: block;

      }
    }
  }
}

</style>