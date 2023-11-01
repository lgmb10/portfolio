<template>
  <main class="content">
    <ContentSection class="presentation">
      <div class="title mobile_center">
        <h1>Louis<br> Gambier</h1>
        <h2>Développeur Web</h2>
      </div>
      <div class="profile_picture" data-parallax="0.05">
        <div class="img_container" data-parallax='{"y": -0.1, "variable": true}'>
          <img src="~/assets/img/profil.jpg" alt="photo de profile">
        </div>
      </div>
      <p class="mobile_center">Bonjour ! Jeune diplomé en master d'informatique, grâce à mes précedentes expériences je
        me suis spécialisé dans
        le développement Front-End.<br><br>
        Découvrez mon profil&nbsp;&nbsp;<Icon name="fa6-solid:arrow-down-long"></Icon>
      </p>
    </ContentSection>
    <ContentSection id="parcours">
      <h3 class="section_title" data-parallax="-0.05">Mon Parcours</h3>
      <article class="timeline">
        <ul class="timeline_wrapper">
          <li>
            <div class="timeline_date">
              <span>2023</span>
            </div>
            <Icon name="carbon:branch"></Icon>
            <div class="timeline_description">
              <p>Mastère - Expert en Ingénierie Informatique.
                Titre RNCP Niveau&nbsp;7</p>
              <p>Efficom. Lille</p>
            </div>
          </li>
          <li>
            <div class="timeline_date">
              <span>2021</span>
            </div>
            <Icon name="carbon:branch"></Icon>
            <div class="timeline_description">
              <p>Bachelor - Chargé de Projets en Systèmes
                Informatiques Appliqués. Titre RNCP Niveau&nbsp;6</p>
              <p>Efficom. Lille</p>
            </div>
          </li>
          <li>
            <div class="timeline_date">
              <span>2020</span>
            </div>
            <Icon name="carbon:branch"></Icon>
            <div class="timeline_description">
              <p>DUT informatique</p>
              <p>Institut Universitaire de Technologie A de Lille.
                Villeneuve-d’Ascq</p>
            </div>
          </li>
          <li>
            <div class="timeline_date">
              <span>2018</span>
            </div>
            <Icon name="carbon:branch"></Icon>
            <div class="timeline_description">
              <p>Baccalauréat Technologique STI2D spécialité SIN</p>
              <p>Lycée du Hainaut. Valenciennes.</p>
            </div>
          </li>
        </ul>
      </article>
    </ContentSection>
    <ContentSection id="experiences">
      <h3 class="section_title" data-parallax="-0.05">Mes Expériences</h3>
      <p>TEST</p>
    </ContentSection>
    <Footer/>
  </main>
</template>

<script setup>
</script>

<style scoped lang="scss">
.content {
  padding: 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @include tablet {
    padding: 1rem 3rem 2rem;
  }
}

.presentation {
  padding-top: 0.5rem;
  width: 100%;

  @include tablet {
    padding-top: 5rem;
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
    padding-top: 2.5rem;
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
    grid-column: 2;
    grid-row: 1 / 3;

    .img_container {
      position: relative;
      height: fit-content;
      margin-top: 1rem;
      --border: 0.7rem;
      width: 80%;
      max-width: 20rem;


      @include tablet {
        max-width: none;
        width: fit-content;
      }

      &:after {
        content: '';
        position: absolute;
        top: calc(var(--parallaxY, 0px) + 2rem);
        left: 1rem;
        border: $border;
        width: 100%;
        height: 100%;
        border-radius: var(--border);
        background-color: rgba($b, 0.3);

        @include tablet {
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

.timeline {
  width: 100%;
  max-width: 70rem;
  margin-inline: auto;

  .timeline_wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    --left-line: 3rem;


    li {
      display: flex;
      padding-bottom: 3rem;
      position: relative;
      overflow: hidden;

      &:last-child{
        padding-bottom: 0;
      }

      @include tablet {
        padding-left: var(--left-line);

        &:first-child {
          &:before {
            top: 1.8rem;
          }
        }

        &:last-child {
          &:before {
            top: inherit;
            bottom: 3.2rem;
          }
        }

        &:before {
          content: '';
          position: absolute;
          transform: translate(-50%, 0);
          top: 0;
          left: calc(-2rem + var(--left-line));
          height: 10rem;
          width: 5px;
          background-color: $white;
        }
      }


      .timeline_date {
        font-weight: 600;
        font-size: 1.2rem;
        padding-top: 0.2rem;
        display: block;

        @include mobile{
          font-size: 1.5rem;
          padding-top: 0.7rem;
        }

        @include tablet {
          font-size: 2rem;
          padding-top: 0.4rem;
        }

        span {
          position: relative;
          color: $light-purple;

          &:before {
            content: '';
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: -2rem;
            height: 10px;
            width: 10px;
            border: 5px solid $white;
            background-color: $background;
            border-radius: 50%;
            z-index: 2;
          }
        }
      }


      .icon {
        margin-inline: 0.5rem;
        flex-shrink: 0;
        display: block;
        font-size: 3rem;

        @include mobile {
          font-size: 5rem;
        }

        @include tablet{
          margin-inline: 1rem;
        }
      }

      .timeline_description {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
          @include tablet{
            font-size: 1.3rem;
          }

          &:last-child {
            font-style: italic;
            color: $a;
          }
        }
      }
    }
  }
}
</style>