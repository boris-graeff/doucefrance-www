<template>
  <section class="hotel">
    <div class="page-header"></div>

    <div class="page-content">
      <div class="blocks">
        <div class="block">
          <h2>{{ $t('routes.hotel.name') }}</h2>
          <p>{{ $t('hotel.intro') }}</p>
        </div>

        <div></div>

        <div class="block">
          <img src="/images/hotel/petit-dejeuner.jpg" />
        </div>

        <div class="block">
          <h3>{{ $t('hotel.breakfast.title') }}</h3>
          <p>{{ $t('hotel.breakfast.content') }}</p>
        </div>

        <div class="block">
          <h3>{{ $t('hotel.tearoom.title') }}</h3>
          <p>{{ $t('hotel.tearoom.content[0]') }}</p>
          <p>{{ $t('hotel.tearoom.content[1]') }}</p>
        </div>

        <div class="block">
          <img src="/images/hotel/salon-de-the.jpg" />
        </div>

        <div class="block" v-if="$options.displayDining">
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>

        <div class="block" v-if="$options.displayDining">
          <h3>{{ $t('hotel.lightMeals.title') }}</h3>
          <p>{{ $t('hotel.lightMeals.content[0]') }}</p>
          <p>{{ $t('hotel.lightMeals.content[1]') }}</p>
          <p>{{ $t('hotel.lightMeals.content[2]') }}</p>
        </div>

        <div class="block" v-if="$options.displayRoomService">
          <h3>{{ $t('hotel.roomService.title') }}</h3>
          <p>{{ $t('hotel.roomService.content[0]') }}</p>
          <p>{{ $t('hotel.roomService.content[1]') }}</p>
        </div>

        <div class="block" v-if="$options.displayRoomService">
          <img src="/images/hotel/service-en-chambre.jpg" />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-header {
    background-image: url('/images/hotel-douce-france-veules-les-roses.jpg');
    background-position: top 48% center;
  }

  .block {
    &:nth-child(4), &:nth-child(5), &:nth-child(8), &:nth-child(9) {
      background: $grey-light;
    }

    img {
      display: block;
    }
  }
</style>

<script>
import options from '~/config/site'
export default options
</script>
