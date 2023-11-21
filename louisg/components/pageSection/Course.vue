<template>
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
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
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

      &:last-child {
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

        @include mobile {
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

        @include tablet {
          margin-inline: 1rem;
        }
      }

      .timeline_description {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
          @include tablet {
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