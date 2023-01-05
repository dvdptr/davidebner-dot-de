<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Wellenwald mit Bunker"
      year="2016"
      material="Beton, Holz, Antennen, Aluminium-Folie, Kabel, Speaker, Player / 70x250x150 cm"
      description="Die Installation »Wellenwald mit Bunker« besteht aus einem Objekt aus Beton sowie einem Fichtenstamm. Der Stamm ist mit Aluminium-Folie überzogen und erscheint silbrig-glänzend. An dem Fichtenstamm sind kleine Antennen befestigt die elektromagnetische Strahlung erfassen (bspw. durch Smartphones verursacht) die über weiße Kabel ins Innere des Bunkers transportiert werden. Dort werden die Strahlen in akustische Signale umgewandelt und über einen Speaker hörbar gemacht. Zu den in Echtzeit produzierten Klängen der elektromagnetischen Strahlung fügt sich eine eigens erstellte Soundspur hinzu, die über einen Data-Player abgespielt wird.
Die Installation »Wellenwald mit Bunker« ist eine Neuinterpretation der 1972 von Joseph Beuys angefertigten Arbeit »Munitionskiste mit Fichtenstamm«. Während Beuys in seinem Werk mythische Inhalte wie Tod und Religion thematisiert, lässt »Wellenwald mit Bunker« Gegenwart und Zukunft rätselhaft und geheimnisvoll erscheinen – digitalisiert und veraltet zur selben Zeit."
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
