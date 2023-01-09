<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Spaltungen"
      year="2015"
      material="Risographie, 42x30cm, Auflage 50"
      description=""
      :images="[{ src: spaltungHolz }, { src: spaltungDigital }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import spaltungHolz from "../../assets/artworks/spaltung-holz.jpg";
import spaltungDigital from "../../assets/artworks/spaltung-digital.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      spaltungHolz,
      spaltungDigital,
    };
  },
};
</script>
