<template>
  <div class="mx-auto w-4/5 justify-between sm:flex md:max-w-screen-xl">
    <div class="block pb-8 sm:mr-12 sm:w-1/3">
      <p class="text-xl">{{ title }}</p>
      <br />
      <p>{{ year }}</p>
      <br />
      <p>{{ material }}</p>
      <br />
      <p>{{ description }}</p>
    </div>

    <div class="sm:w-3/5">
      <img
        v-for="image in images"
        :key="image.src"
        v-bind:src="image.src"
        v-bind:alt="title"
        class="w-full pb-4 sm:pb-8"
      />
      <div class="pb-12 hover:text-gray-400">
        <nuxt-link to="../works">< back to menu</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>
