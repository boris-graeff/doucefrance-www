<template>
  <section class="hotel">
    <div class="page-header"></div>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>{{ $t('routes.hotel.name') }}</h2>
          <p>{{ $t('hotel.intro') }}</p>
        </div>
        <div></div>

        <div>
          <img src="/images/hotel/petit-dejeuner.jpeg" />
        </div>
        <div>
          <h3>{{ $t('hotel.breakfast.title') }}</h3>
          <p>{{ $t('hotel.breakfast.content') }}</p>
        </div>

        <div>
          <h3>{{ $t('hotel.tearoom.title') }}</h3>
          <p>{{ $t('hotel.tearoom.content[0]') }}</p>
          <p>{{ $t('hotel.tearoom.content[1]') }}</p>
        </div>
        <div>
          <img src="/images/hotel/salon-de-the.jpeg" />
        </div>

        <div>
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>

        <div>
          <h3>{{ $t('hotel.lightMeals.title') }}</h3>
          <p>{{ $t('hotel.lightMeals.content[0]') }}</p>
          <p>{{ $t('hotel.lightMeals.content[1]') }}</p>
          <p>{{ $t('hotel.lightMeals.content[2]') }}</p>
        </div>

        <div>
          <h3>{{ $t('hotel.roomService.title') }}</h3>
          <p>{{ $t('hotel.roomService.content[0]') }}</p>
          <p>{{ $t('hotel.roomService.content[1]') }}</p>
        </div>
        <div>
          <img src="/images/hotel/service-en-chambre.jpeg" />
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

  .blocks {
    > div {
      &:nth-child(4), &:nth-child(5), &:nth-child(8), &:nth-child(9) {
        background: $grey-light;
      }
    }

    img {
      display: block;
    }
  }
</style>
