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
          <li @click="closeNavbarOnMenuClick" v-for="item in ['Formations', 'Expérience', 'Compétences', 'Passions']">
            <a class="navigation" :href="'#'+item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')"
               target="_self">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
let navIcon, navMenu, mainContainer = null;

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
  margin: 1rem;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: var(--white);
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

  &_close {
    .menu_container {
      opacity: 0;
      @include desktop {
        opacity: 1;
      }
    }
  }

  &_open {
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

  .menu_container {
    position: absolute;
    width: 100%;
    z-index: 4;
    background-color: $background;
    border-radius: var(--container-border);
    height: 100%;
    transition: $transition;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .menu {
      pointer-events: all;
      list-style: none;
      text-align: center;
      margin-inline: 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-block: 1rem;

      li {
        &:nth-child(even) {
          margin-left: -10rem;
        }
        &:nth-child(odd) {
          margin-right: -10rem;
        }

        @include tablet{
          &:nth-child(even), &:nth-child(odd) {
            margin: 0;
          }
        }
      }

      li {
        transition: $transition;

        a {
          &:hover {
            color: red;
          }
        }
      }
    }
  }
}

</style>