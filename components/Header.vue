<template>
  <div id="header" class="">
    <!-- Header NavBar total -->
    <div class="mx-auto w-4/5 pt-2 sm:pb-10 md:max-w-screen-xl">
      <nav
        id="nav"
        class="flex w-full flex-wrap items-center justify-between py-6"
      >
        <!-- NavBar Logo -->
        <div>
          <nuxt-link to="/"> David Ebner </nuxt-link>
        </div>
        <!-- Header Hamburger Icon -->
        <div class="block lg:hidden">
          <button
            @click="handleClick"
            class="flex items-center rounded px-3 py-2 text-gray-800 hover:border-gray-700 hover:text-gray-700"
          >
            <svg
              class="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <!-- Responsive -->
        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="w-full flex-grow text-center text-gray-800 md:text-right lg:flex lg:w-auto lg:items-center"
        >
          <div class="lg:flex-grow">
            <nuxt-link
              class="mt-4 block border-b border-gray-300 px-2 py-2 pb-2 hover:text-gray-900 md:border-none md:pb-0 lg:mt-0 lg:inline-block"
              to="/exhibitions"
              >Exhibitions</nuxt-link
            >
            <nuxt-link
              class="mt-4 block border-b border-gray-300 px-2 py-2 pb-2 hover:text-gray-900 md:border-none md:pb-0 lg:mt-0 lg:inline-block"
              to="/works"
              >Works</nuxt-link
            >
            <nuxt-link
              class="mt-4 block border-b border-gray-300 px-2 py-2 pb-2 hover:text-gray-900 md:border-none md:pb-0 lg:mt-0 lg:inline-block"
              to="/cv"
              >CV</nuxt-link
            >
            <nuxt-link
              class="mt-4 block border-b border-gray-300 px-2 py-2 pb-2 hover:text-gray-900 md:border-none md:pb-0 lg:mt-0 lg:inline-block"
              to="/contact"
              >Contact</nuxt-link
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>
