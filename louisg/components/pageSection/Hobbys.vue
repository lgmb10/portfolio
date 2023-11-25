<template>
  <div class="hobby_container">
    <div class="hobby_wrapper">
      <img alt="" src="~/assets/img/f1.png">
      <article>
        <p>Grand passionné d'automobile, je touche à tous les domaines qui l'entourent. Que ce soit les nouvelles technologies intégrées dans les véhicules ou l'arrivée des véhicules autonomes, le design, la mécanique ou encore plus récemment le sport automobile.</p>
      </article>
    </div>
    <div class="hobby_wrapper hobby_wrapper_reverse">
      <img alt="" src="~/assets/img/piano.png">
      <article>
        <p>J'ai pas d'inspi</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hobby_container{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 95rem;
  margin-inline: auto;
  padding-inline: 0;

  @include tablet{
    gap: 6rem;
  }

  @include desktop{
    padding-inline: 3rem;

  }
}

.hobby_wrapper{
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: rgba(#171134, 0.8);
  border-radius: var(--container-border);
  border: $border;
  padding: 1.5rem 1rem;
  --separation : 1.5rem;

  @include tablet{
    --separation: 0;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    background-color: inherit;
    border-radius: 0;
    border: inherit;
    padding: 0;
  }

  @include desktop{
    gap: 5rem;
  }

  img{
    width: 100%;
    margin-inline: auto;
    object-fit: contain;
    display: block;
    border-radius: var(--container-border);
    padding-bottom: var(--separation);

    @include tablet{
      width: 40%;
    }
  }

  article{
    flex-grow: 1;

    p{
      padding-top: var(--separation);
      border-top: $border;

      @include tablet{
        border-top: 0;
      }

      @include desktop{
        font-size: 1.4rem;
        line-height: 1.3;
      }
    }
  }

  &_reverse{
    @include tablet{
      flex-direction: row-reverse;

      p{
        text-align: right;
      }
    }
  }
}
</style>