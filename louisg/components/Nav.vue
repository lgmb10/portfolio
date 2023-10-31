<template>
  <nav class="nav nav_close">
    <div class="nav_container">
      <div class="nav_icon_wrapper hidden">
        <div @click="animateNav" id="nav_icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="menu_container">
        <ul class="menu">
          <li @click="closeNavbarOnMenuClick" v-for="item in navList">
            <a class="navigation" :href="'#'+item.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')"
               target="_self">
              <span class="nav_title">{{ item.title }}</span>
              <span class="nav_icon"><Icon :name="item.icon"></Icon></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
let navIcon, navMenu, mainContainer = null;

const navList = [
  {title: "Parcours", icon: "fa6-solid:graduation-cap"},
  {title: "Expériences", icon: "fa6-solid:briefcase"},
  {title: "Compétences", icon: "fa6-solid:award"},
  {title: "Passions", icon: "fa6-solid:heart"},
]

onMounted(() => {
  navIcon = document.querySelector("#nav_icon");
  navMenu = document.querySelector(".nav");
  mainContainer = document.querySelector(".main_inside_wrapper");

})

function disableOverflow(value) {
  if (value) {
    mainContainer.style.overflow = "hidden";
    navMenu.style.pointerEvents = "all";
  } else {
    mainContainer.style.overflow = "scroll";
    navMenu.style.pointerEvents = "none";
  }
}

function closeNavbar() {
  navIcon.classList.remove("open");
  navMenu.classList.remove("nav_open");
  navMenu.classList.add("nav_close");
  disableOverflow(false);
}

function animateNav() {
  if (navIcon.classList.contains("open")) {
    closeNavbar();
  } else {
    navIcon.classList.add("open");
    navMenu.classList.remove("nav_close");
    navMenu.classList.add("nav_open");
    disableOverflow(true);
  }
}

function closeNavbarOnMenuClick() {
  if (navIcon.classList.contains("open")) closeNavbar();
}

</script>

<style scoped lang="scss">
#nav_icon {
  pointer-events: all;
  width: 30px;
  height: 25px;
  position: relative;
  z-index: 5;
  margin: 0.9rem 1rem 1rem;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  @include tablet{
    margin: 1rem;
  }

  @include desktop {
    display: none;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: $white;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 3px;
    }

    &:nth-child(2), &:nth-child(3) {
      top: 11px;
    }

    &:nth-child(4) {
      top: 19px;
    }
  }

  &.open {
    span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }

    span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
}

.nav {
  position: fixed;
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--container-border);
  border: none;
  z-index: 5;

  @include desktop {
    right: -1.75rem;
    width: inherit;
    height: auto;
    pointer-events: all;
    transform: translateY(-50%);
    top: 50%;
    backdrop-filter: blur(40px);
    border: $border;
  }

  &_close {
    .menu_container {
      opacity: 0;
      @include desktop {
        opacity: 1;
      }
    }
  }

  &_open {
    backdrop-filter: blur(7px);

    .nav_container {
      .menu_container {
        opacity: 1;

        .menu {
          li {
            &:nth-child(even), &:nth-child(odd) {
              margin: 0;
            }
          }
        }
      }
    }
  }
}

.nav_container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  height: 100%;
  transition: $transition;

  @include desktop {
    justify-content: center;
  }

  .menu_container {
    position: absolute;
    width: 100%;
    background-color: rgba($background, 0.8);
    height: 100%;
    transition: $transition;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include desktop {
      height: auto;
      width: inherit;
      position: relative;
      background-color: rgba($d, 0.1);
    }

    .menu {
      list-style: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-block: 1.5rem;

      @include desktop {
        pointer-events: all;

        &:hover {
          .navigation {
            .nav_title {
              display: block;
              width: 6.5rem;
              opacity: 1;
              margin-left: 1rem;
            }
          }
        }
      }

      li {
        transition: $transition;

        &:nth-child(even) {
          margin-left: -10rem;
        }

        &:nth-child(odd) {
          margin-right: -10rem;
        }

        @include desktop {
          &:nth-child(even), &:nth-child(odd) {
            margin: 0;
          }

          &:hover {
            .navigation {
              .nav_icon {

                &:before {
                  content: '\2022';
                  position: absolute;
                  transform: translateX(-50%);
                  bottom: -1rem;
                  left: 50%;
                  width: 1rem;
                  height: 1rem;
                  color: $a;
                  font-size: 1rem;
                }
              }

              .nav_title{
                color: transparent;
                background: linear-gradient(109.6deg, $d 33%, $a 66%, $c 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                -moz-background-clip: text;
                -moz-text-fill-color: transparent;

              }
            }
          }
        }

        .navigation {
          display: flex;
          align-items: center;
          justify-content: center;

          @include desktop {
            align-items: flex-end;
            justify-content: flex-end;
          }

          .nav_title {
            text-align: center;
            font-size: 1.5rem;

            @include desktop {
              width: 0;
              transition: width ease-in 0.3s, opacity ease-in 0.3s, margin-left ease-in 0.3s;
              padding-left: 0;
              opacity: 0;
              flex-grow: 1;
              font-size: 1rem;
            }
          }

          .nav_icon {
            display: none;

            @include desktop {
              position: relative;
              margin-inline: 1rem;
              display: block;
              width: 1.5rem;
              height: 1.5rem;

              .icon {
                width: 1.5rem;
                height: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
}

</style>