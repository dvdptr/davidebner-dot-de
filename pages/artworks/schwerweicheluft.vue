<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Schwer Weiche Luft"
      year="2016"
      material="Blei, Luftkissen, Koffer / 250x250x100 cm"
      description="Die Installation »Schwer weiche Luft« besteht aus 100 Blei-Splittern, die auf Luftkissen liegen. Die gegensätzlichen Materialien von leichten, weichen Luftkissen und schweren, harten Bleistücken werden hierbei in Verbindung zueinander gesetzt. Aus einem im Raum platzierten Koffer scheinen sich die Luftkissen und Bleisplitter auszubreiten. Die Form erweckt den Eindruck einer fließenden Bewegung. Dies wird durch den Koffer als Objekt der Mobilität verstärkt. Die Schwere des Bleis wirkt jedoch gegensätzlich und drückt die Luftkissen zu Boden und unterbindet Bewegung.
Die Splitter wurden in einem Bleiguss-Verfahren erstellt: Insgesamt 4 individuell gebrochene Stücke aus Holz wurden zu einer Gesamtzahl von 100 Blei-Splitter dupliziert. So sind bei genauer Betrachtung der Stücke feinste Holzfasern und Bruchstellen erkennbar, die in einem hellsilbrigen Glanz scheinen."
      :images="[{ src: swl1 }, { src: swl2 }, { src: swl3 }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import swl1 from "../../assets/artworks/za1.jpg";
import swl2 from "../../assets/artworks/za3.jpg";
import swl3 from "../../assets/artworks/za4.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      swl1,
      swl2,
      swl3,
    };
  },
};
</script>
