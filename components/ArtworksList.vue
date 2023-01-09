<template>
  <div>
    <nuxt-link
      v-for="(artwork, index) in artworks"
      :key="index"
      :to="`/artwork/${artwork.id}`"
    >
      <img class="h-32 w-32" :src="artwork.image" :alt="artwork.title" />
      <div class="text-xl font-bold">{{ artwork.title }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artworks: [
        {
          id: "ModelleOhneMaßstab",
          image: "~/assets/exhibitions/st4.jpg",
          title: "Artwork 1",
        },
        {
          id: "ModelleOhneMaßstab",
          image: "~/assets/exhibitions/st4.jpg",
          title: "Artwork 1",
        },

        // Add more artworks here
      ],
    };
  },
};
</script>
