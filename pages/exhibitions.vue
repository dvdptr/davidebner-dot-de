<template>
  <div class="text-sm">
    <Header />
    <!-- <Exhibitions /> -->
    <div class="mx-auto w-4/5">
      <ExhibitionOverview
        v-for="(item, index) in items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import ExhibitionOverview from "@/components/ExhibitionOverview.vue";

export default {
  components: {
    ExhibitionOverview,
  },
  data() {
    return {
      items: [
        {
          image: require("~/assets/exhibitions/ramboux-kunstpreis.png"),
          title: "Ramboux-Kunstpreis",
          description: "Stadtmuseum Trier, 2018",
        },
        {
          image: require("~/assets/exhibitions/foreign-fields.jpg"),
          title: "Foreign Fields",
          description: "Milchhof Berlin, 2019",
        },
        {
          image: require("~/assets/exhibitions/trace-berlin.png"),
          title: "Unimagined Surroundings",
          description: "Trace Projects, Berlin, 2019, Photo: V. Cafuli",
        },
        {
          image: require("~/assets/exhibitions/ars-electronica.png"),
          title: "CyberArts",
          description: "PRIX ARS Electronica, Linz, 2017, Photo: T. Mesic",
        },
        {
          image: require("~/assets/exhibitions/zadyma.jpg"),
          title: "Zadyma – Behind the smoke",
          description: "Krakau, 2016",
        },
        {
          image: require("~/assets/exhibitions/trace-berlin.png"),
          title: "Bruchstücke",
          description: "Design- und Kulturtage, Trier, 2015",
        },
        {
          image: require("~/assets/exhibitions/trace-berlin.png"),
          title: "Stücke",
          description: "Galerie Neues Bild, Trier, 2015",
        },
        // Add more items here
      ],
    };
  },
};
</script>
