<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Tuch-Zeichnungen"
      year="2015"
      material="Graphit, Papier, Holzrahmen mit Graphit / 110x100 cm"
      description="Die »Tuch-Zeichnungen« sind das Resultat der Installation »Schwer schwarz schwebend« und zeigen die Graphitabdrücke auf Papier. Während das mit Graphit behandelte Tuch zu Beginn der Ausstellung noch hart und unbeweglich war, sind auch die Abdrücke entsprechend zurückhaltend und mit erkennbaren Linien ausgestattet. Im Verlauf der Ausstellung werden die hinterlassenen Spuren weicher, die Abdrücke flächiger. Die Serie von fünf Abdrücken stellt den Zeitverlauf der Installation dar und dokumentiert die rotierende Bewegung des Tuchs."
      :images="[{ src: tz1 }, { src: tz2 }, { src: tz3 }, { src: tz4 }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import tz1 from "../../assets/artworks/tz1.jpg";
import tz2 from "../../assets/artworks/tz2.jpg";
import tz3 from "../../assets/artworks/tz3.jpg";
import tz4 from "../../assets/artworks/tz4.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      tz1,
      tz2,
      tz3,
      tz4,
    };
  },
};
</script>
