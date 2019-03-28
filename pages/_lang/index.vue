<template>
  <section class="home">
    <div class="page-header"></div>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>{{ $t('home.welcome') }}</h2>
          <p v-html="$t('home.intro')"></p>
        </div>
        <div>
          <p>{{ $t('home.description[0]') }}</p>
          <p>{{ $t('home.description[1]') }}</p>
          <p>{{ $t('home.description[2]') }}</p>
          <p>{{ $t('home.description[3]') }}</p>
        </div>

        <div>
          <special-offer class="special-offer" />

          <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" :loop="true">
            <slide>
              <img src="/images/hotel-douce-france-veules-les-roses.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-restaurant.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-veules-les-roses.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-1.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-2.jpg" />
            </slide>
          </carousel>
        </div>

        <div>
          <div>
            <h2>{{ $t('home.gift.title') }}</h2>
            <p>{{ $t('home.gift.content[0]') }}</p>
            <p>{{ $t('home.gift.content[1]') }}</p>
            <p>{{ $t('home.gift.content[2]') }}</p>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
  import SpecialOffer from "~/components/SpecialOffer"

  export default {
    components: {
      SpecialOffer
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-header {
    background-image: url('/images/hotel-douce-france-veules-les-roses.jpg');
    background-position: top 30% center;
    height: calc(100vh - 300px);
  }

  .blocks {
    > div {
      &:nth-child(3){
        padding: 0;
        position: relative;
      }

      &:nth-child(4){
        > div {
          padding: 50px;
          border: 2px solid;
        }
      }
    }
  }

  .special-offer {
    padding: 60px;
    position: absolute;
    bottom: calc(100% + 20px);
    left: 0;
    right: 0;
  }

  @media screen and (max-width: 900px) {
    .special-offer {
      position: static;
      padding: 20px;
    }
  }
</style>
