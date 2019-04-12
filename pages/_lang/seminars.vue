<template>
  <section class="seminars">
    <div class="page-header"></div>

    <div class="page-content">
      <div class="blocks">
        <div class="block">
          <h2>{{ $t('routes.seminars.name') }}</h2>

          <p><strong>{{ $t('seminars.intro') }}</strong></p>

          <p>{{ $t('seminars.content[0]') }}</p>
          <p>{{ $t('seminars.content[1]') }}</p>
          <p>{{ $t('seminars.content[2]') }}</p>
          <p>{{ $t('seminars.content[3]') }}</p>
          <p>{{ $t('seminars.content[4]') }}</p>
        </div>

        <div class="block">
          <app-carousel class="carousel">
            <img v-for="index in 4" :key="index" :src="`/images/seminars/seminaires-${index}.jpg`" />
          </app-carousel>
        </div>

        <div class="block">
          <div>
            <p v-html="$t('seminars.planning.title')"></p>

            <ul class="list">
              <li>{{ $t('seminars.planning.content[0]') }}</li>
              <li>{{ $t('seminars.planning.content[1]') }}</li>
              <li>{{ $t('seminars.planning.content[2]') }}</li>
              <li>{{ $t('seminars.planning.content[3]') }}</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <p>{{ $t('seminars.content[5]') }}</p>
          <p>{{ $t('seminars.content[6]') }}</p>
          <p>{{ $t('seminars.content[7]') }}</p>
          <p>{{ $t('seminars.content[8]') }}</p>
          <p>{{ $t('seminars.content[9]') }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import AppCarousel from '~/components/AppCarousel'

  export default {
    components: {
      AppCarousel
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-header {
    background-image: url('/images/seminars/seminaires.jpg');
    background-position: bottom center;
  }

  .block {
    &:nth-child(2) {
      padding: 60px 0 0;
    }

    &:nth-child(3) > div {
      padding: 60px;
      border: 2px solid;
    }
  }

  .carousel + p {
    padding: 20px;
  }

</style>
