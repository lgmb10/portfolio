<template>
  <main class="content">
    <Hero/>
    <ContentSection id="parcours">
      <h3 class="section_title" :data-parallax="-titleParallax">Mon Parcours</h3>
      <Course />
    </ContentSection>
    <ContentSection id="experiences">
      <h3 class="section_title" :data-parallax="-titleParallax">Mes Expériences</h3>
      <Experiences />
    </ContentSection>
    <ContentSection id="competences">
      <h3 class="section_title" :data-parallax="-titleParallax">Mes Compétences</h3>
      <Skills />
    </ContentSection>
    <ContentSection id="passions">
      <h3 class="section_title" :data-parallax="-titleParallax">Mes Passions</h3>
      <Hobbys />
    </ContentSection>
    <Footer />
  </main>
</template>

<script setup>
import Experiences from "~/components/pageSection/Experiences.vue";
import Footer from "~/components/pageSection/Footer.vue";
import Course from "~/components/pageSection/Course.vue";
import ContentSection from "../components/ContentSection.vue";
import Skills from "~/components/pageSection/Skills.vue";
import Hobbys from "~/components/pageSection/Hobbys.vue";

const titleParallax = 0.09;
</script>

<style lang="scss">
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