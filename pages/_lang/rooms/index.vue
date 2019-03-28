<template>
  <section>
    <div class="page-content">
      <rooms-header />

      <ul class="rooms">
        <li v-for="room in Object.keys($options.rooms)" :key="room">
          <NuxtLink :to="$i18n.path($t('routes.rooms.url') + '/' + room)">
            <div class="overview" :style="{backgroundImage: `url(/images/rooms/${room}/${room}-0-1.jpg)`}"></div>
            <strong>
              {{ $t(`rooms.${room}.name`) }} - {{ $t(`rooms.size.${$options.rooms[room].size}`) }}
            </strong>

            <span class="button-secondary">
              {{ $t('rooms.from', { price: $options.rooms[room].price }) }}
            </span>
          </NuxtLink>
        </li>
        <li>
          <special-offer class="special-offer" />
        </li>
        <li>
          <ul class="list">
            <li>{{ $t('rooms.fees[0]') }}</li>
            <li>{{ $t('rooms.fees[1]') }}</li>
            <li>{{ $t('rooms.fees[2]') }}</li>
            <li>{{ $t('rooms.fees[3]') }}</li>
            <li>{{ $t('rooms.fees[4]') }}</li>
          </ul>
        </li>
      </ul>
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
    }

    a {
      display: block;
      text-decoration: none;
    }

    > li {
      width: 33.33%;
      padding: 6px 6px 20px;

      strong {
        display: block;
        margin: 10px 0;
      }

      &:last-child {
        ul {
          padding: 20px;
          height: 300px;
          background: $grey-light;
        }
      }
    }

    .button-secondary {
      padding: 6px 12px;
    }
  }

  .special-offer {
    height: 300px;
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
  }
</style>
