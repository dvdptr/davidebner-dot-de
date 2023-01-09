<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Leitformen"
      year="2019"
      material="Beton, Kupfer, Holz"
      description="Fotos: Bernd Röder, Stadtmuseum Simeonstift Trier"
      :images="[
        { src: leitf2 },
        { src: leitf1 },
        { src: leitf3 },
        { src: leitf4 },
      ]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import leitf1 from "../../assets/artworks/leitf1.JPG";
import leitf2 from "../../assets/artworks/leitf2.JPG";
import leitf3 from "../../assets/artworks/leitf3.JPG";
import leitf4 from "../../assets/artworks/leitf4.JPG";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      leitf1,
      leitf2,
      leitf3,
      leitf4,
    };
  },
};
</script>
