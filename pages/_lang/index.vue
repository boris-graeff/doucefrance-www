<template>
  <section class="home">
    <header-slider class="page-header"/>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>{{ $t('home.welcome') }}</h2>
          <p v-html="$t('home.intro[0]')"></p>
          <p v-html="$t('home.intro[1]')"></p>
        </div>
        <div>
          <p>{{ $t('home.description[0]') }}</p>
          <p>{{ $t('home.description[1]') }}</p>
          <p>{{ $t('home.description[2]') }}</p>
          <p>{{ $t('home.description[3]') }}</p>
        </div>

        <div>
          <special-offer class="special-offer" />

          <carousel :per-page="1" :autoplay="true" :autoplayTimeout="4000" :loop="true">
            <slide>
              <img src="/images/hotel/hotel-veules-les-roses.jpg" />
            </slide>
            <slide v-for="index in 7" :key="index">
              <img :src="`/images/hotel/hotel-${index}.jpg`" />
            </slide>
          </carousel>
        </div>

        <div>
          <img src="/images/home/gift.svg" class="gift"/>
          <h2>{{ $t('home.gift.title') }}</h2>
          <p>{{ $t('home.gift.content[0]') }}</p>
          <p>{{ $t('home.gift.content[1]') }}</p>
          <p>{{ $t('home.gift.content[2]') }}</p>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
  import SpecialOffer from "~/components/SpecialOffer"
  import HeaderSlider from "~/components/HeaderSlider"

  export default {
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

  .blocks {
    > div {
      &:nth-child(3){
        padding: 0;
        position: relative;
      }

      &:nth-child(4){
        padding-top: 20px;
      }
    }
  }

  .gift {
    display: block;
    width: 100px;
    margin: 0 auto 20px;
  }

  .special-offer {
    padding: 30px 60px;
    position: absolute;
    bottom: calc(100% + 20px);
    left: 0;
    right: 0;
  }

  @media screen and (max-width: 1000px) {
    .special-offer {
      position: static;
      padding: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    .page-header {
      height: 300px;
    }
  }
</style>
