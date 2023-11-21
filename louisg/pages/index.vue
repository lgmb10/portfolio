<template>
  <main class="content">
    <Hero/>
    <ContentSection id="parcours">
      <h3 class="section_title" data-parallax="-0.08">Mon Parcours</h3>
      <Course />
    </ContentSection>
    <ContentSection id="experiences">
      <h3 class="section_title" data-parallax="-0.08">Mes Expériences</h3>
      <Experiences />
    </ContentSection>
    <ContentSection id="passions">
      <h3 class="section_title" data-parallax="-0.08">Mes Passions</h3>
      <p>TEST eedsthbrte</p>
      <img alt="" src="~/assets/img/f1.png" style="width: 50%;">
    </ContentSection>
    <Footer />
  </main>
</template>

<script setup>
import Experiences from "~/components/pageSection/Experiences.vue";
import Footer from "~/components/pageSection/Footer.vue";
import Course from "~/components/pageSection/Course.vue";
</script>

<style lang="scss" scoped>
.content {
  padding: 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @include tablet {
    padding: 0 3rem 2rem;
  }

  #parcours{

    .section_title{
      @include desktop{
        padding-top: 0;
      }
    }
  }
}
</style>

<style lang="scss">
.experiences_swiper, .experiences_swiper_2 {
  margin-inline: 1rem;
  overflow: hidden;

  .swiper-wrapper {
    align-items: stretch;

    .swiper-slide {
      height: auto;
    }
  }

  @include tablet {
    margin-inline: 3rem;
  }
}

</style>