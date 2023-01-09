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

import leitf1 from "../../assets/artworks/leitf1.jpg";
import leitf2 from "../../assets/artworks/leitf2.jpg";
import leitf3 from "../../assets/artworks/leitf3.jpg";
import leitf4 from "../../assets/artworks/leitf4.jpg";

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
