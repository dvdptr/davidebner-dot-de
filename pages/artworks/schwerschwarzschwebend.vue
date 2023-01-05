<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Schwer Schwarz Schwebend"
      year="2015"
      material="Tuch, Graphit"
      description=""
      :images="[{ src: sss1 }, { src: sss2 }, { src: sss3 }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import sss1 from "../../assets/artworks/sss1.jpg";
import sss2 from "../../assets/artworks/sss2.jpg";
import sss3 from "../../assets/artworks/sss3.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      sss1,
      sss2,
      sss3,
    };
  },
};
</script>
