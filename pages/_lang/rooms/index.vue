<template>
  <section>
    <img src="/images/tearoom/tea-time-douce-france.jpg" class="page-header"/>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>{{ $t('routes.rooms.name') }}</h2>
          <p>
            <strong>25 Chambres, suites et appartements équipés de kitchenettes</strong>
          </p>
        </div>

        <div>
          <ul class="rooms">
            <li v-for="room in Object.keys($options.rooms)" :key="room">
              <NuxtLink :to="$i18n.path($t('routes.rooms.url') + '/' + room)">
                <img :src="`/images/rooms/${room}.jpg`" />
                <strong>{{ $t(`rooms.${room}`) }}</strong>

                <span class="button-secondary">
                  {{ $t('rooms.from', { price: $options.rooms[room].price }) }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <ul class="list">
                <li>Lit d'Appoint  15 €</li>
                <li>Lit Bébé  10 €</li>
                <li>Animal  15 €</li>
                <li>Petit Dejeuner Continental  14 €</li>
                <li>Taxe de séjour   0,65 € Par personne par jour</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import rooms from '~/locales/rooms'

  export default {
    rooms
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-content {
    padding-bottom: 60px;
  }

  .blocks {
    > div {
      &:nth-child(2) {
        width: 100%;
      }

      &:last-child {
        background: $grey-light;
      }
    }
  }

  .rooms {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -6px;

    > li {
      width: 33%;
      padding: 6px 6px 20px;

      strong {
        display: block;
        margin: 10px 0;
      }

      &:last-child {
        padding: 60px 20px 20px;
      }
    }

    .button-secondary {
      padding: 6px 12px;
    }
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
