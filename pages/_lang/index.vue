<template>
  <section class="home">
    <header-slider class="page-header"/>

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

          <special-offer class="block special-offer"
                         :type="$options.showCustomSpecialOffer ? 'custom' : 'longStay'" />
        </div>

        <div class="block">
          <p>{{ $t('home.description[0]') }}</p>
          <p>{{ $t('home.description[1]') }}</p>
          <p>{{ $t('home.description[2]') }}</p>
          <p>{{ $t('home.description[3]') }}</p>
        </div>

        <div class="block">
          <carousel :per-page="1" :autoplay="true" :autoplayTimeout="4000" :loop="true">
            <slide>
              <img src="/images/hotel/hotel-veules-les-roses.jpg" />
            </slide>
            <slide v-for="index in 7" :key="index">
              <img :src="`/images/hotel/hotel-${index}.jpg`" />
            </slide>
          </carousel>
        </div>

        <div class="block">
          <img src="/images/home/gift.svg" class="gift"/>
          <h2>{{ $t('home.gift.title') }}</h2>
          <p>{{ $t('home.gift.content[0]') }}</p>
          <p>{{ $t('home.gift.content[1]') }}</p>
          <p>{{ $t('home.gift.content[2]') }}</p>
        </div>

        <special-offer v-if="$options.showCustomSpecialOffer" class="block" type="longStay" />

      </div>
    </div>

  </section>
</template>

<script>
  import SpecialOffer from "~/components/SpecialOffer"
  import HeaderSlider from "~/components/HeaderSlider"
  import site from "~/config/site"

  export default {
    showCustomSpecialOffer: site.specialOffers.custom,
    components: {
      SpecialOffer,
      HeaderSlider
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-header {
    height: calc(100vh - 300px);
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
    margin: 60px 0;
  }

  .gift {
    display: block;
    width: 100px;
    margin: 0 auto 20px;
  }

  @media screen and (max-width: 800px) {
    .page-header {
      height: 300px;
    }
  }
</style>
