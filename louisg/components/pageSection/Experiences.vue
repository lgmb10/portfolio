<template>
  <div class="experiences">
    <div class="experience_container">
      <div class="experience">
        <div>
          <a href="https://www.blaaaz.com/" target="_blank"><h4>Blaaaz</h4></a>
          <h5>Développeur Full Stack</h5>
        </div>
        <p class="duration">
          <span><span class="duration_detail">aou&nbsp;</span>2024</span>
          <span>&nbsp;-&nbsp;</span><span class="only_mobile">ajd</span
          ><span class="only_desktop">aujourd'hui</span>
        </p>
      </div>
      <div class="carousel_container">
        <Swiper
          :breakpoints="swiperOptions"
          :effect="'cards'"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.' + 'swiper_next_1',
            prevEl: '.' + 'swiper_prev_1',
          }"
          :slides-per-view="1"
          class="experiences_swiper"
        >
          <SwiperSlide>
            <ExperienceCard
              :example="[
                {
                  title: 'Concessions Suzuki',
                  link: 'https://concession.suzuki.fr/',
                },
              ]"
              :techno="['Nuxt 3']"
              description="Développement d’un site web national multi-concessions automobiles dynamique pour Suzuki"
              title="Site web"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              :techno="['Nuxt 3', 'Playwright (tests e2e)']"
              description="Création d’un outil de création d’emails (email builder) avec système d’authentification et gestion des droits"
              title="Email builder"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ExperienceCard
              :techno="['Nuxt 2']"
              description="Maintenance et évolution d’outils internes type back-office pour la configuration des concessions, la génération de landing pages, la gestion des formulaires et des contenus des sites web Suzuki."
              title="Maintenance et évolutions"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              :techno="['Nuxt 3', 'FLOA Pay']"
              description="Création d’une campagne de précommande avec limitation du stock et de la durée, intégrant un prestataire de paiement"
              title="Campagne de précommande"
            />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev swiper_prev_1"></div>
        <div class="swiper-button-next swiper_next_1"></div>
      </div>
    </div>
    <div class="experience_container">
      <div class="experience">
        <div>
          <a href="https://www.blaaaz.com/" target="_blank"><h4>SwiftUp (Freelance)</h4></a>
          <h5>Développeur Front-End</h5>
        </div>
        <p class="duration">
          <span><span class="duration_detail">jan&nbsp;</span>2024</span>
        </p>
      </div>
      <div class="carousel_container">
        <Swiper
          :breakpoints="swiperOptions"
          :effect="'cards'"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.' + 'swiper_next_3',
            prevEl: '.' + 'swiper_prev_3',
          }"
          :slides-per-view="1"
          class="experiences_swiper"
        >
          <SwiperSlide>
            <ExperienceCard
              :techno="['React']"
              description="Développement d’un site web pour une marque d’energy drink."
              title="Site web"
            />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev swiper_prev_3"></div>
        <div class="swiper-button-next swiper_next_3"></div>
      </div>
    </div>
    <div class="experience_container">
      <div class="experience">
        <div>
          <a href="https://www.syneidolab.com/" target="_blank"
            ><h4>DPS / SyneidoLab</h4></a
          >
          <h5>Développeur Front-End</h5>
        </div>
        <p class="duration">
          <span><span class="duration_detail">oct&nbsp;</span>2020</span>
          <span>&nbsp;-&nbsp;</span
          ><span><span class="duration_detail">sep&nbsp;</span>2023</span>
        </p>
      </div>
      <div class="carousel_container">
        <Swiper
          :breakpoints="swiperOptions"
          :effect="'cards'"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.' + 'swiper_next_2',
            prevEl: '.' + 'swiper_prev_2',
          }"
          :slides-per-view="1"
          class="experiences_swiper"
        >
          <SwiperSlide>
            <ExperienceCard
              :example="[
                {
                  title: 'Agence Pictural',
                  link: 'https://www.agencepictural.com/',
                },
                {
                  title: 'MEL',
                  link: 'https://xn--changerarapporte-ipb.fr/participant/',
                },
                {
                  title: 'Altaprofits simulateur',
                  link: 'https://app.altaprofits.com/?lg_u=0',
                },
                { title: 'Odalys', link: 'https://www.odalys-vacances.com/' },
                { title: 'Le Blan Promotion', link: 'https://www.leblan.fr/' },
              ]"
              :techno="['Nuxt 2', 'Wordpress', 'Vanilla']"
              description="Développement et intégrations de sites web"
              title="Sites web"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              :example="[
                {
                  title: 'Atelier Syneido',
                  link: 'https://atelier.syneido.com/',
                },
                { title: 'Chanel' },
                { title: 'Nocibé' },
                { title: 'Marionnaud' },
                { title: 'MEL' },
                { title: 'Thermor' },
              ]"
              :techno="['Vue 2', 'Vanilla']"
              description="Réalisation de landing pages pour du B2B, de présentation de produits, ou encore pour la Métropole Lilloise ainsi que pour des projets internes"
              title="Landing Pages"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              :example="[
                { title: 'Davril' },
                { title: 'Becity' },
                { title: 'Oney' },
                { title: 'Veralti' },
              ]"
              :techno="['Vue 2', 'Symfony']"
              description="Création de formulaires pour le secteur immobilier et le secteur des banques et assurances"
              title="Formulaires"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              :example="[{ title: 'Suzuki' }]"
              :techno="['Nuxt 2']"
              description="Correction de bugs et modifications lors de phases de TMA"
              title="Maintenance"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              :techno="['Docker', 'Portainer', 'Wordpress']"
              description="Migration sous docker de projets Wordpress"
              title="Migration"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              :example="[
                { title: 'Auchan' },
                { title: 'Courir' },
                { title: 'Parc Astérix' },
                { title: 'MACSF' },
                { title: 'Thermor' },
                { title: 'Walibi' },
                { title: 'Oney' },
              ]"
              description="Intégration d'emails et créations d'assets implémentés dans un outil d'automatisations de création de newsletters avec de fortes contraintes de compatibilité"
              title="Emailing"
            />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev swiper_prev_2"></div>
        <div class="swiper-button-next swiper_next_2"></div>
      </div>
    </div>

    <!-- <div class="experience_container">
      <div class="experience">
        <div>
          <a href="https://sofratel.fr/c-a-t/" target="_blank"
            ><h4>Sofratel CAT</h4></a
          >
          <h5>Téléopérateur</h5>
        </div>
        <p class="duration">
          <span
            ><span class="duration_detail duration_detail_separator"
              >jul&nbsp;-&nbsp;</span
            ><span class="duration_detail">sep&nbsp;</span>2019</span
          >
        </p>
      </div>
      <div class="carousel_container">
        <Swiper
          :breakpoints="swiperOptions"
          :effect="'cards'"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.' + 'swiper_next_2',
            prevEl: '.' + 'swiper_prev_2',
          }"
          :slides-per-view="1"
          class="experiences_swiper_2"
        >
          <SwiperSlide>
            <ExperienceCard
              description="Réception d'appels de services d'astreinte d'urgences de bailleurs sociaux, essentiellement pour des incidents graves tels que des incendies, inondations, blocage d'ascenseurs, fuites de gaz, etc."
              title="Réception d'appels d'urgences"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCard
              description="Gestions et suivi de dossiers en cours, contact avec les services d'astreintes et les services publics"
              title="Gestion et suivi de dossiers en cours"
            />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev swiper_prev_2"></div>
        <div class="swiper-button-next swiper_next_2"></div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const swiperOptions = {
  640: {
    slidesPerView: 2,
    spaceBetween: 32,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 32,
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 32,
  },
};
</script>

<style lang="scss" scoped>
.experiences {
  @include desktop-xl {
    padding-inline: 2rem;
  }

  .experience_container {
    margin-bottom: 4rem;

    @include desktop {
      margin-bottom: 8rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .experience {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;

    @include desktop {
      padding-bottom: 6rem;
      display: inherit;

      &:hover {
        .duration {
          .duration_detail {
            width: 3ch;
            opacity: 1;

            &_separator {
              width: 4ch;
            }
          }
        }
      }
    }

    h4 {
      font-size: clamp(1.7rem, 1.54rem + 0.8vw, 2.5rem);
      font-weight: 600;
      display: inline-block;
      transition: $transition;

      &:hover {
        color: $light-purple;
      }
    }

    h5 {
      font-size: clamp(1.3rem, 1.22rem + 0.3999999999999999vw, 1.7rem);
      color: $light-purple;
    }

    .duration {
      text-align: right;
      font-size: clamp(2rem, 1rem + 5vw, 7rem);
      font-weight: 800;
      opacity: 0.3;
      vertical-align: baseline;

      @include desktop {
        position: absolute;
        bottom: 0;
        right: 0;
        line-height: 1;
      }

      span {
        color: $light-purple;
        line-height: 1;
      }

      > span {
        display: block;

        &:nth-child(2) {
          display: none;

          @include desktop {
            display: inline-block;
          }
        }

        @include desktop {
          display: inline-block;
        }
      }

      .duration_detail {
        transition: all ease-in-out 0.4s;
      }

      .duration_detail {
        display: none;
        text-align: right;
        width: 0;
        opacity: 0;

        @include desktop {
          display: inline-block;
        }
      }
    }
  }

  .carousel_container {
    position: relative;

    .swiper-button-next,
    .swiper-button-prev {
      --swiper-theme-color: $white;
      --swiper-navigation-sides-offset: -0.6rem;
      --swiper-navigation-size: 2rem;

      @include tablet {
        --swiper-navigation-sides-offset: 0rem;
        --swiper-navigation-size: 3rem;
      }
    }
  }
}
</style>
