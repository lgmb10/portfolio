<template>
  <main class="content">
  <section class="presentation">
    <div class="presentation_text">
      <h1>Louis<br> Gambier</h1>
      <h3>Développeur Front-End</h3>
      <p>totototerj hdjkhvb dsjfhkbv djhbv jkdhb hsdbv hjdb v,hb vdhfb vdhjsfb vdbv dsfjbv sdfh vbsdh </p>
    </div>
    <div class="profile_picture">
      <div class="img_container">
        <img src="img/profil.jpg" alt="photo de profile">
      </div>
    </div>
  </section>
  
  </main>
</template>

<script setup>
</script>

<style scoped lang="scss">
.content{
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.presentation{
  display: flex;
  padding-top: 5rem;
  width: 100%;

  .presentation_text, .profile_picture{
    width: 50%;
  }

  .presentation_text{
    display: flex;
    flex-direction: column;
    justify-content: start;

    h1{
      font-size: 6rem;
      margin-bottom: 2rem;
      line-height: 1;
    }

    h3{
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
  }

  .profile_picture{
    flex-grow: 1;
    text-align: center;
    display: flex;
    justify-content: center;

    .img_container{
      position: relative;
      --border : 0.7rem;

      &:after{
        content: '';
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        border: $border;
        width: 100%;
        height: 100%;
        border-radius: var(--border);
        background-color: rgba($b, 0.4);
        z-index: -1;
      }

      img{
        display: block;
        position: relative;
        max-width: 20rem;
        border-radius: var(--border);
      }
    }
  }
}
</style>