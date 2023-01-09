<template>
  <div>
    <div class="mx-auto pb-8 sm:flex sm:pb-16 md:max-w-screen-xl">
      <div class="bg-size-cover sm:w-1/2">
        <img class="h-auto w-full" :src="image" :alt="description" />
      </div>

      <div class="sm:pl-8">
        <div class="pt-2 sm:mb-2 sm:pt-0 sm:text-xl">{{ title }}</div>
        <p class="text-sm text-gray-700">
          {{ description }}
        </p>
      </div>
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
