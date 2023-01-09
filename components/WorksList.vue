<template>
  <div class="mx-auto w-11/12 sm:w-4/5 md:max-w-screen-xl">
    <h2 class="py-6">Works</h2>
    <div class="flex flex-wrap justify-items-stretch sm:pb-12">
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/leitformen">
          <img src="~/assets/artworks/leitf2.JPG" alt="" />
          <p>Leitformen</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/modelleOhneMaßstab">
          <img src="~/assets/artworks/modelle_thumb.jpg" alt="" />
          <p>Modelle ohne Maßstab</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link
          class="hover:text-gray-400"
          to="artworks/BelebteUnbeweglichkeit"
        >
          <img src="~/assets/artworks/belebte_thumb.jpg" alt="" />
          <p>Belebte Unbeweglichkeit</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link
          class="hover:text-gray-400"
          to="artworks/WellenwaldmitBunker"
        >
          <img src="~/assets/artworks/wwb1.jpg" alt="" />
          <p>Wellenwald mit Bunker</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/Wetware">
          <img src="~/assets/artworks/ww2.jpg" alt="" />
          <p>Wetware</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/SchwerWeicheLuft">
          <img src="~/assets/artworks/za2.jpg" alt="" />
          <p>Schwer Weiche Luft</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/Beruehrungsstudien">
          <img src="~/assets/artworks/beruehrung_thumb.jpg" alt="" />
          <p>Berührungsstudien</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/Tuch-Zeichnungen">
          <img src="~/assets/artworks/tz1.jpg" alt="" />
          <p>Tuch-Zeichnungen</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link
          class="hover:text-gray-400"
          to="artworks/SchwerSchwarzSchwebend"
        >
          <img src="~/assets/artworks/sss_thumb.jpg" alt="" />
          <p>Schwer Schwarz Schwebend</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/Spaltungen">
          <img src="~/assets/artworks/spaltung-holz.jpg" alt="" />
          <p>Spaltungen</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/Bruchstuecke">
          <img src="~/assets/artworks/bruchstuecke-ansicht.jpg" alt="" />
          <p>Bruchstücke</p>
        </nuxt-link>
      </div>
      <!-- New Artwork -->
      <div class="gridLayout">
        <nuxt-link class="hover:text-gray-400" to="artworks/Stammklang">
          <img src="~/assets/artworks/stammklang-detail.jpg" alt="" />
          <p>Stammklang</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
.gridLayout {
  @apply w-full pb-6 sm:w-1/3 sm:p-6 sm:pb-0;
}
</style>
