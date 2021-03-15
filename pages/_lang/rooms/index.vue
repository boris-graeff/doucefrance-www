<template>
  <section>
    <div class="page-content">
      <rooms-header />

      <p class="intro">
        {{ $t('rooms.intro') }}
      </p>

      <ul class="rooms">
        <li v-for="category in $options.categories" :key="category.key">
          <div>
            <NuxtLink :to="$i18n.path($t('routes.rooms.url') + '/' + category.routes[$i18n.locale])">
              <div class="overview"
                   :style="{backgroundImage: `url(/images/rooms/${category.key}/${category.rooms[0].name}-1.jpg)`}">
              </div>
              <div>
                <div class="name">
                  {{ $t(`rooms.${category.key}.name`) }} - {{ $t(`rooms.size.${category.size}`) }}
                </div>

                <span class="button-secondary">
                  {{ $t('rooms.from', { price: category.price }) }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </li>
      </ul>

      <div>
        <div>
          <ul class="fees list">
            <li>{{ $t('rooms.fees[0]') }}</li>
            <li>{{ $t('rooms.fees[1]') }}</li>
            <li>{{ $t('rooms.fees[2]') }}</li>
            <li>{{ $t('rooms.fees[3]') }}</li>
            <li>{{ $t('rooms.fees[4]') }}</li>
          </ul>
        </div>
        <div>
          <special-offer v-if="$options.hasSpecialOffer || $options.hasLongStayOffer" class="special-offer" :type="$options.specialOfferType" />
        </div>
      </div>
    </div>

    <questions-section />

  </section>
</template>

<script>
  import categories from '~/config/categories'
  import site from '~/config/site'
  import RoomsHeader from '~/components/RoomsHeader'
  import SpecialOffer from '~/components/SpecialOffer'
  import QuestionsSection from '~/components/QuestionsSection'

  export default {
    hasSpecialOffer: site.specialOffers.custom,
    hasLongStayOffer: site.specialOffers.longStay,
    specialOfferType: site.specialOffers.custom ? 'custom' : 'longStay',
    categories,
    components: {
      RoomsHeader,
      SpecialOffer,
      QuestionsSection
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-content {
    padding-bottom: 60px;
  }

  .intro {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
    padding: 0 20px;
  }

  .rooms {
    display: flex;
    flex-wrap: wrap;
    padding: 0 6px;

    .overview {
      height: 300px;
      width: 100%;
      background-size: cover;
      background-position: center center;

      + div {
        padding: 6px 6px 20px;
      }
    }

    a {
      display: block;
      text-decoration: none;
    }

    > li {
      width: 33.33%;
      padding: 0 6px;
      margin-bottom: 40px;

      > div {
        background: $grey-light;
      }
    }

    .button-secondary {
      padding: 6px 12px;
    }
  }

  .rooms + div {
    display: flex;

    > div {
      width: 100%;
      padding: 12px;
    }
  }

  .name {
    font-size: 20px;
    margin: 10px 0 20px;
  }

  .fees {
    height: 100%;
    padding: 20px;
    background: $grey-light;
  }

  @media screen and (max-width: 1000px){
    .rooms > li {
      width: 50%;
    }
  }

  @media screen and (max-width: 750px){
    .rooms > li {
      width: 100%;
    }

    .rooms + div {
      flex-direction: column;
    }
  }
</style>
