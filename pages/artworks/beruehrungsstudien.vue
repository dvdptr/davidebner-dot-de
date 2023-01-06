<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Berührungsstudien"
      year="2015"
      material="Holz, Graphit, Motor, Kabel, Konstruktion / 30x50x30 cm je Einheit"
      description="Die kinetische Sound-Installation »Berührungsstudien« erzeugt leise, knackende Klänge. Die an einer befestigten Konstruktion ineinanderdrehenden Holzstücke werden durch einen Motor in Bewegung versetzt, so dass sich die Spitzen der Splitterstücke berühren. Die hierbei entstehenden Geräusche sind ebenso Teil der Installation wie die abfallenden Holzstücke, die sich auf dem Boden ansammeln."
      :images="[{ src: beruehrungsstudie1 }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import beruehrungsstudie1 from "../../assets/exhibitions/st4.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      beruehrungsstudie1,
    };
  },
};
</script>
