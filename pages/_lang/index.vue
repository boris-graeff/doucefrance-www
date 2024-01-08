<template>
  <section class="home">
    <button
      v-if="$options.hasSpecialOffer"
      @click="scrollToSpecialOffer"
      class="button special-offer-button">
      Offre spéciale
    </button>

    <div class="page-header">
      <app-carousel class="page-header">
        <div v-for="image in $options.headerImages"
             :key="image"
             class="images"
             :style="{backgroundImage: `url(${image})`}">
        </div>
      </app-carousel>
    </div>

    <div class="page-content">
      <div class="blocks">
        <div>
          <div class="block">
            <h2>{{ $t('home.welcome') }}</h2>
            <p v-html="$t('home.intro[0]')"></p>
            <p v-html="$t('home.intro[1]')"></p>

            <a :href="$t('externals.booking')"
               class="button-secondary book-now"
               target="_blank">
              {{ $t('common.actions.booking') }}
            </a>
          </div>


          <div ref="specialOffer" class="block" v-if="$options.hasSpecialOffer || $options.hasLongStayOffer">
            <special-offer
              :type="$options.hasSpecialOffer ? 'custom' : 'longStay'"/>
          </div>

        </div>

        <div class="block">
          <p>{{ $t('home.description[0]') }}</p>
          <p>{{ $t('home.description[1]') }}</p>
          <p>{{ $t('home.description[2]') }}</p>
          <p>{{ $t('home.description[3]') }}</p>
        </div>

        <div class="block">
          <app-carousel>
            <img src="/images/hotel/hotel-veules-les-roses.jpg" />
            <img v-for="index in 7" :key="index" :src="`/images/hotel/hotel-${index}.jpg`" />
          </app-carousel>
        </div>

        <div class="block">
          <img src="/images/home/gift.svg" class="gift"/>
          <h2>{{ $t('home.gift.title') }}</h2>
          <p>{{ $t('home.gift.content[0]') }}</p>
          <p>{{ $t('home.gift.content[1]') }}</p>
          <p>{{ $t('home.gift.content[2]') }}</p>
        </div>

        <special-offer v-if="$options.hasSpecialOffer" class="block" type="longStay" />
      </div>
    </div>

  </section>
</template>

<script>
  import SpecialOffer from "~/components/SpecialOffer"
  import AppCarousel from "~/components/AppCarousel";
  import site from "~/config/site"

  const headerImages = [
    '/images/hotel-douce-france-veules-les-roses.jpg',
    '/images/home/hotel-1.jpg',
    '/images/home/hotel-2.jpg',
    '/images/home/hotel-3.jpg',
    '/images/home/hotel-4.jpg'
  ]

  export default {
    headerImages,
    hasSpecialOffer: site.specialOffers.custom,
    hasLongStayOffer: site.specialOffers.longStay,
    methods: {
      scrollToSpecialOffer() {
        this.$refs.specialOffer.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },
    components: {
      AppCarousel,
      SpecialOffer
    }
  }
</script>

<style scoped lang="scss">
  @import '@/style/vars';

  .home {
    position: relative;
  }

  .page-header {
    height: calc(100vh - 300px);
    overflow: hidden;

    .images {
      width: 100%;
      height: calc(100vh - 300px);
      background-size: cover;
      background-position: center center;
    }
  }

  .special-offer-button {
    position: absolute;
    z-index: 1;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 40px;
    color: $pink;
    border-color: $pink;
    background: white;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: bold;
    box-shadow: 0 0 0 4px white;
    white-space: nowrap;

    &:hover {
      background: $pink;
      color: white;
      opacity: 1;
    }
  }

  .page-content {
    padding-bottom: 60px;
  }

  .block {
    .button-secondary {
      margin-top: 20px;
    }

    &:nth-child(3){
      padding: 0;
      position: relative;
    }

    &:nth-child(4){
      padding-top: 20px;
    }
  }

  .special-offer {
    margin: 60px 0 0;
  }

  .gift {
    display: block;
    width: 100px;
    margin: 0 auto 20px;
  }

  @media screen and (max-width: 800px) {
    .page-header, .page-header .images {
      height: 300px;
    }
  }

  @media screen and (max-width: 760px) {
    .special-offer-button {
      top: 20px;
    }
  }
</style>
