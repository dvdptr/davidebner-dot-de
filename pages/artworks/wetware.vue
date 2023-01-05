<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Wetware"
      year="2016"
      material="Gelatine, Speaker, Data-Player, Konstruktion / 40x40x150 cm"
      description="Die Sound-Installation »Wetware« besteht aus Gelatine, die durch Sound in Bewegung versetzt wird. Hierbei greift die Sound-Spur auf eine niedrige Bass-Frequenz zu, deren ständige Einflussnahme dazu führt dass die Gelatine leichte Risse bekommt ehe sie teilweise zerfällt. Das performative Moment der Installation äußern sich im Prozess der Zerstörung.
Das organische Material der Gelatine einerseits und die technologische Erweiterung in Form des Lautsprechers andererseits verkörpern eine Auseinandersetzung, in der das weiche Material das Nachsehen hat."
      :images="[{ src: MoMAnsicht }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import MoMAnsicht from "../../assets/artworks/prints_davidebner_riso_edition.jpg";

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
