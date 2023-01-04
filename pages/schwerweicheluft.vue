<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Modelle ohne Maßstab"
      year="2019"
      material="Risographie"
      description="Die Serie »Modelle ohne Maßstab« ist im Risographie-Druckverfahren erstellt worden. Die Modelle stammen aus der Installation »Belebte Unbeweglichkeit« und wurden im Photogrammetry-Verfahren via 3D-Scan digital erfasst und zur Weiterverarbeitung aufbereitet.
\nDie ursprünglich aus Beton hergestellten Modelle werden durch die digitale Bearbeitung in ein weiches Geflecht verwandelt, das an organische Formen erinnert. Die Nähe zur Architektur scheint sich in den zarten Darstellungen aufzulösen, indem die Modelle in grafisch-abstrakte Flächen übertragen werden. Das spielerische Element der Transformation spiegelt sich ebenfalls in der gewählten Farbgebung wider, da die dünnen Linien an Zeichnungen von Hand erinnern."
      :images="[{ src: MoMAnsicht }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import MoMAnsicht from "../assets/prints_davidebner_riso_edition.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      MoMAnsicht,
    };
  },
};
</script>
