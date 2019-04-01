<template>
  <section>
    <div class="page-content">
      <rooms-header />

      <ul class="rooms">
        <li v-for="(room, key) in $options.rooms" :key="key">
          <div>
            <NuxtLink :to="$i18n.path($t('routes.rooms.url') + '/' + key)">
              <div class="overview" :style="{backgroundImage: `url(/images/rooms/${key}/${room.categories[0].name}-1.jpg)`}"></div>
              <div>
                <div class="name">
                  {{ $t(`rooms.${key}.name`) }} - {{ $t(`rooms.size.${room.size}`) }}
                </div>

                <span class="button-secondary">
                  {{ $t('rooms.from', { price: room.price }) }}
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
          <special-offer class="special-offer" />
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import rooms from '~/locales/rooms'
  import RoomsHeader from '~/components/RoomsHeader'
  import SpecialOffer from "~/components/SpecialOffer"

  export default {
    rooms,
    components: {
      RoomsHeader,
      SpecialOffer
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-content {
    padding-bottom: 60px;
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
