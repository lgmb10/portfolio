<template>
  <ContentSection class="presentation">
    <div class="title mobile_center">
      <h1>Louis<br> Gambier</h1>
      <h2>Développeur Web</h2>
    </div>
    <div class="profile_picture" data-parallax="-0.6">
      <div class="img_container">
        <div class="img_wrapper">
          <img alt="photo de profile" src="~/assets/img/profil.jpg">
        </div>
      </div>
    </div>
    <p class="mobile_center">Bonjour ! Jeune diplomé en master d'informatique, grâce à mes précedentes expériences je
      me suis spécialisé dans
      le développement Front-End.<br><br>
      <a href="#parcours">Découvrez mon profil&nbsp;&nbsp;<Icon name="fa6-solid:arrow-down-long"></Icon>
      </a>
    </p>
  </ContentSection>
</template>

<script lang="ts" setup>

onMounted(() => {
  const insideWindow = document.querySelector(".main_inside_wrapper");
  let insideWindowHeight = 'auto';

  insideWindow && (insideWindowHeight = window.getComputedStyle((insideWindow), null).getPropertyValue("height"));
  document.documentElement.style.setProperty('--hero-height', (insideWindowHeight));

  window.addEventListener('resize', () => {
    insideWindow && (insideWindowHeight = window.getComputedStyle((insideWindow), null).getPropertyValue("height"));
    document.documentElement.style.setProperty('--hero-height', (insideWindowHeight));
  });
});


</script>

<style lang="scss" scoped>
.presentation {
  height: auto;
  padding-top: 0.5rem;
  width: 100%;

  @include tablet {
    height: var(--hero-height);
    margin-bottom: 0;
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .title, > p {
    grid-column: 1 / 2;
  }

  .title {
    @include tablet {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      margin-right: 1rem;
    }

    h1 {
      font-size: clamp(3.5rem, 2.7857142857142856rem + 3.571428571428571vw, 6rem);
      margin-bottom: 1rem;
      line-height: 1;

      @include desktop {
        margin-bottom: 2rem;
      }
    }

    h2 {
      color: $light-purple;
      font-size: clamp(2rem, 1.7142857142857144rem + 1.4285714285714286vw, 3rem);
      margin-bottom: 1rem;
      font-weight: 600;
    }
  }

  > p {
    padding-top: 3.5rem;
    line-height: 1.3;

    @include tablet {
      padding-top: 0;
      margin-right: 1rem;
    }


    .icon {
      font-size: 1rem;
    }
  }


  .profile_picture {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 1 / 3;

    .img_container {
      margin-top: 1rem;
      width: 80%;
      max-width: 20rem;

      @include tablet {
        max-width: none;
        width: fit-content;

        &:hover {
          .img_wrapper {
            transform: translate(1.5rem, 1.5rem);

            &:after {
              top: -1.5rem;
              left: -1.5rem;
            }
          }
        }
      }

      .img_wrapper {
        position: relative;
        height: fit-content;
        --border: 0.7rem;
        width: 100%;
        transition: $transition;

        &:after {
          content: '';
          position: absolute;
          top: 1rem;
          left: 1rem;
          border: $border;
          width: 100%;
          height: 100%;
          border-radius: var(--border);
          background-color: rgba($b, 0.3);
          transition: $transition;

          @include tablet {
            top: 1.5rem;
            left: 1.5rem;
          }
        }

        img {
          z-index: 2;
          display: block;
          position: relative;
          width: 100%;
          border-radius: var(--border);

          @include tablet {
            width: 25vw;
            min-width: 20rem;
            max-width: 30rem;
          }
        }
      }
    }
  }
}
</style>