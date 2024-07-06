<script setup>
import logo from "@/assets/pictures/logo.png";

const leftItems = reactive([
  {
    title: "Home",
    url: "/",
    isHovering: false,
  },
  {
    title: "ideas",
    url: "/ideas",
    isHovering: false,
  },
]);

const rightItems = reactive([
  {
    title: "write",
    url: "/write",
    isHovering: false,
  },
  {
    title: "About",
    url: "/about",
    isHovering: false,
  },
]);

const logoHover = ref(false);
const timeoutLogo = ref(null);

function onHover({ item, isHovering }) {
  item.isHovering = isHovering;
}

// wait user hover for 3s before animation
function onHoverLogo() {
  timeoutLogo.value = setTimeout(() => {
    logoHover.value = true;
  }, 3000);
}

function onLeaveLogo() {
  clearTimeout(timeoutLogo.value);
}
</script>

<template>
  <nav class="flex justify-center items-center gap-12 mt-12">
    <NavItems :items="leftItems" @onHover="onHover" />

    <RouterLink to="/" class="flex items-center justify-center">
      <img
        :src="logo"
        alt="logo"
        class="w-24"
        :class="{
          'show-animation': logoHover,
        }"
        @mouseover="onHoverLogo"
        @mouseleave="onLeaveLogo"
        @animationend="logoHover = false"
      />
    </RouterLink>

    <NavItems :items="rightItems" @onHover="onHover" />
  </nav>
</template>

<style lang="scss" scoped>
img[alt="logo"] {
  &.show-animation {
    animation: logo 3s forwards;
  }
}

@keyframes logo {
  0% {
    width: 6rem;
  }
  40% {
    width: 10rem;
    transform: rotate(0deg);
  }
  45% {
    transform: rotate(10deg);
  }
  55% {
    transform: rotate(-10deg);
  }
  60% {
    width: 10rem;
    transform: rotate(0deg);
  }
  100% {
    width: 6rem;
  }
}
</style>
