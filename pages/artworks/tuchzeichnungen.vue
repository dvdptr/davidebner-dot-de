<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Tuch-Zeichnungen"
      year="2015"
      material="Graphit, Papier, Holzrahmen mit Graphit / 110x100 cm"
      description="Die »Tuch-Zeichnungen« sind das Resultat der Installation »Schwer schwarz schwebend« und zeigen die Graphitabdrücke auf Papier. Während das mit Graphit behandelte Tuch zu Beginn der Ausstellung noch hart und unbeweglich war, sind auch die Abdrücke entsprechend zurückhaltend und mit erkennbaren Linien ausgestattet. Im Verlauf der Ausstellung werden die hinterlassenen Spuren weicher, die Abdrücke flächiger. Die Serie von fünf Abdrücken stellt den Zeitverlauf der Installation dar und dokumentiert die rotierende Bewegung des Tuchs."
      :images="[{ src: MoMAnsicht }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import MoMAnsicht from "../../assets/prints_davidebner_riso_edition.jpg";

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
