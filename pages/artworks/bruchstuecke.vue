<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Bruchstücke"
      year="2014"
      material="Holz, Graphit, Faden, Speaker, Data-Player, Licht / 800x100x400 cm"
      description="Die Materiallegung »Bruchstücke« besteht aus ortsspezifisch angeordneten Holzsplittern, deren Oberfläche mit Graphit überzogen ist. Jedes Bruchstück wurde von Hand mit Graphit behandelt, wodurch die zuvor zerbrochenen, beschädigten Stücke eine neue Oberfläche erhalten. Innerhalb der Splitter sind Lautsprecher platziert. Durch knackende, leise Klänge breitet sich die Installation akustisch im Raum aus.
Die Installation »Bruchstücke« ist Formfindung und Formauflösung zugleich. Die gebrochenen Stücke ergeben nebeneinanderliegend eine geschlossene Form, die sich im Verlauf der Legung jedoch aufzulösen scheint und in einer chaotisch freien Anordnung endet."
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
