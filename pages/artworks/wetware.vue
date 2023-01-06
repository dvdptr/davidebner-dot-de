<template>
  <div class="text-sm">
    <Header />
    <WorksDetail
      title="Wetware"
      year="2016"
      material="Gelatine, Speaker, Data-Player, Konstruktion / 40x40x150 cm"
      description="Die Sound-Installation »Wetware« besteht aus Gelatine, die durch Sound in Bewegung versetzt wird. Hierbei greift die Sound-Spur auf eine niedrige Bass-Frequenz zu, deren ständige Einflussnahme dazu führt dass die Gelatine leichte Risse bekommt ehe sie teilweise zerfällt. Das performative Moment der Installation äußern sich im Prozess der Zerstörung.
Das organische Material der Gelatine einerseits und die technologische Erweiterung in Form des Lautsprechers andererseits verkörpern eine Auseinandersetzung, in der das weiche Material das Nachsehen hat."
      :images="[{ src: ww2 }, { src: ww1 }]"
    />
  </div>
</template>

<script>
import WorksDetail from "~/components/WorksDetail.vue";

import ww1 from "../../assets/artworks/ww1.jpg";
import ww2 from "../../assets/artworks/ww2.jpg";

export default {
  components: {
    WorksDetail,
  },
  data() {
    return {
      ww1,
      ww2,
    };
  },
};
</script>
