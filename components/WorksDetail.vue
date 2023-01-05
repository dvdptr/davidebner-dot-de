<template>
  <div class="mx-auto w-4/5 sm:flex">
    <div class="block pb-8 sm:mr-12 sm:w-1/3">
      <p class="text-xl">{{ title }}</p>
      <br />
      <p>{{ year }}</p>
      <br />
      <p>{{ material }}</p>
      <br />
      <p>{{ description }}</p>
    </div>

    <div class="sm:w-2/3">
      <img
        v-for="image in images"
        :key="image.src"
        v-bind:src="image.src"
        v-bind:alt="title"
        class=""
      />
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
