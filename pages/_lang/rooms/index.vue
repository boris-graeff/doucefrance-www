<template>
  <section>
    <img src="/images/tearoom/tea-time-douce-france.jpg" class="page-header"/>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>Chambres</h2>
          <p>
            <strong>25 Chambres, suites et appartements équipés de kitchenettes</strong>
          </p>
        </div>

        <div>
          <ul class="rooms">
            <li v-for="room in Object.keys($options.rooms)" :key="room">
              <img :src="`/images/rooms/${room}.jpg`" />
              <strong>{{ $t(`rooms.${room}`) }}</strong>

              <NuxtLink :to="$i18n.path($t('routes.rooms.url') + '/' + room)" class="button">
                {{ $t('rooms.from', { price: $options.rooms[room].price }) }}
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

        <div>
          <p>Toutes nos suites de 20 à 45 m2 environ disposent d'un espace jour et d'un espace nuit séparés. Elles sont décorées avec le plus grand soin : le mobilier d'époque chiné chez les antiquaires se marie harmonieusement avec des pièces contemporaines. Parquets et tapis ou terres cuites, oeuvres de peintres, tissus de grands éditeurs (Braquenié, Zuber, Boussac, Sanderson...).</p>

          <p>Votre confort n'est pas en reste ; la literie Impérial Pullman rendra douces vos nuits. Hormis quatre chambres, toutes les suites sont pourvues de kitchenettes équipées. Nos quatre appartements familiaux de 55 à 75 m2 disposent de deux chambres séparées et d'un salon très confortable, ainsi qu'une cuisine spacieuse entièrement équipée. Ils conviennent particulièrement aux couples avec des enfants ou aux personnes qui souhaitent disposer d'un large espace.</p>
        </div>
      </div>
    </div>

    <img src="/images/tearoom/lounge-interior-douce-france.jpg" class="page-footer"/>
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

    .button {
      padding: 6px;
      text-decoration: none;
    }
  }
</style>
