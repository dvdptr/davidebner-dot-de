<template>
  <div class="pb-8 sm:flex sm:pb-16">
    <div class="sm:w-2/3"><img :src="image" :alt="description" /></div>

    <div class="sm:pl-8">
      <div class="pt-2 sm:mb-2 sm:pt-0 sm:text-xl">{{ title }}</div>
      <p class="text-sm text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
