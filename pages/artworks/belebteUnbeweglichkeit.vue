<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Belebte Unbeweglichkeit"
      year="2018"
      material="Holz, Beton, Kupfer, Motor, Sound-Equipment, Speaker / raumspezifisch"
      description="Die Klang-Installation »Belebte Unbeweglichkeit« ist ein großflächig angelegtes Arrangement, das raumspezifisch angeordnet ist. Aus der Ferne betrachtet bietet sich ein Bild kupferfarbig glänzender Elemente, die ohne eindeutige, geradlinig verlaufende Raumgrenzen positioniert sind. Des Weiteren ist ersichtlich, dass es sich nicht um eine stillstehende Installation handelt, sondern einzelne Elemente in Bewegung versetzt sind. Darüber hinaus ist Klang hörbar, der sich innerhalb und um die Formation herum ausbreitet.
Die innerhalb der liegenden Betonformen angebrachten Sound-Devices führen in generativer Weise Aktionen aus, also ohne den Einfluss Dritter sondern einem Zufallsmodus ähnlich. Dem Be- trachter bietet sich ein Szenario, das verfremdetes Material zeigt und Sound nicht nur als Zusatz integriert sondern aufgrund von Bewegung innerhalb der Installation entstehen lässt."
      :images="[{ src: bub }, { src: bub1 }, { src: bub2 }, { src: bub3 }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import bub from "../../assets/exhibitions/bub1.jpg";
import bub1 from "../../assets/artworks/belebte_berlin_thumb.jpg";
import bub2 from "../../assets/artworks/belebte_thumb.jpg";
import bub3 from "../../assets/artworks/bub3.png";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      bub,
      bub1,
      bub2,
      bub3,
    };
  },
};
</script>
