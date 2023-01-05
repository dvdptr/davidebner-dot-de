<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Stammklang"
      year="2013"
      material="Holz, Speaker, Data-Player / 115x40x40 cm"
      description="Die Sound-Skulptur »Stammklang« besteht aus einem bearbeiteten Holzstamm, der in vertikaler Achse gespalten wurde. Im Inneren des Stamms ist eine Soundquelle installiert, deren Klang durch die feine Öffnung in Form eines Spalts nach Außen dringt. Der Klang umhüllt den Stamm mit Geräuschen. Die zu hörenden Sounds sind eigens aufgenommene Geräusche elektronischer Geräte, die im Alltag für das Ohr kaum wahrnehmbar sind. Helles Klirren einer Hochspannungs- leitung, klackende Geräusche eines WLAN-Routers oder die Lüftung eines Computers wurden in Soundcollagen zu kurzen Stücken arrangiert. Durch Verstärkung und Bearbeitung der Klänge wurden so Frequenzen hörbar gemacht, die sonst im Verborgenen bleiben.
Da im Inneren des Stamms zwei unabhängige Soundquellen integriert sind, die Stücke im Zufallsmodus abspielen, ist die entstehende Klangcharakteristik nicht vorhersehbar und im stetigen Wandel. Das Zusammenspiel von fluktuierenden Klangwolken und dem stillstehenden, natürlichen Baumstamm bildet den Kern der Sound-Skulptur »Stammklang«."
      :images="[{ src: stammklangAnsicht }, { src: stammklangDetail }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import stammklangAnsicht from "../../assets/artworks/stammklang-ansicht.jpg";
import stammklangDetail from "../../assets/artworks/stammklang-detail.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      stammklangAnsicht,
      stammklangDetail,
    };
  },
};
</script>
