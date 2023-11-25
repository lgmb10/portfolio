<template>
  <div class="card_container">
    <div>
      <h4>{{ title }}</h4>
      <ul class="techno_container">
        <li class="techno" v-for="techno in props.techno">{{techno}}</li>
      </ul>
      <p class="description">{{props.description}}</p>
    </div>
    <div class="example" v-if="props.example">
      <p>Exemple<span v-if="props.example.length > 1">s</span> :</p>
      <ul>
        <template v-for="example in props.example">
          <li>
            <a v-if="example.link != null" :href="example.link" target="_blank">{{example.title}} </a>
            <p v-else>{{example.title}}</p>
          </li>
          <span>-</span>
        </template>

      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  'title': String,
  'techno': Array<String>,
  'description': String,
  'example': Array<Object>,
});

</script>

<style lang="scss" scoped>
li{
  list-style: none;
}

.card_container{
  --border: 0.7rem;
  border: $border;
  background-color: rgba(#171134, 0.8);
  border-radius: var(--border);
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p, a{
    font-size: 1.1rem;
  }

  h4{
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }

  .techno_container{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .techno{
      display: inline-block;
      background: $light-purple;
      border-radius: 0.3rem;
      padding: 0.2rem 0.3rem;
      color: $background;
    }
  }

  .description{
      padding-bottom: 0.5rem;
  }

  .example{
    margin-top: 1.5rem;

    > p{
      padding-bottom: 0.5rem;
      font-weight: 700;
    }

    ul{
      display: flex;
      flex-wrap: wrap;
      gap: 0 0.5rem;

      span:last-child{
        display: none;
      }

      li{

        a,p{
          display: inline;
        }

        a{
          color: lighten($light-purple, 8);

          &:hover{
            color: $light-purple;
          }
        }
      }
    }
  }
}

</style>