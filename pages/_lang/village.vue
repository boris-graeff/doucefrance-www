<template>
  <section class="village">
    <div class="page-header"></div>

    <div class="page-content">
      <div class="blocks">
        <div class="block">
          <h2>{{ $t('village.title') }}</h2>

          <ul class="list">
            <li>
              <a :href="$t('village.links.veules.url')" target="_blank">
                {{ $t('village.links.veules.label') }}
              </a>
            </li>
            <li>
              <a :href="$t('village.links.caux.url')" target="_blank">
                {{ $t('village.links.caux.label') }}
              </a>
            </li>
          </ul>

          <br/>

          <div>
            <h3>{{ $t('village.intro.title') }}</h3>
            <p>{{ $t('village.intro.content' )}}</p>
          </div>

        </div>

        <div class="block">
          <app-carousel>
            <img v-for="index in 5" :key="index" :src="`/images/village/veules-les-roses-${index}.jpg`" />
          </app-carousel>
        </div>

        <div class="block">
          <h3>{{ $t('village.activities.title') }}</h3>
          <p>{{ $t('village.activities.content[0]') }}</p>
          <ul class="list">
            <li>{{ $t('village.activities.list[0]') }}</li>
            <li>{{ $t('village.activities.list[1]') }}</li>
            <li>{{ $t('village.activities.list[2]') }}</li>
            <li>{{ $t('village.activities.list[3]') }}</li>
            <li>{{ $t('village.activities.list[4]') }}</li>
            <li>{{ $t('village.activities.list[5]') }}</li>
            <li>{{ $t('village.activities.list[6]') }}</li>
          </ul>
          <br/>
          <p>{{ $t('village.activities.content[1]') }}</p>
        </div>
      </div>
    </div>

    <div class="page-footer"></div>
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
    background-image: url('/images/village/veules-les-roses.jpg');
    background-position: top 67% center;
  }

  .page-footer {
    background-image: url('/images/village/veules-les-roses-couche-soleil.jpg');
    background-position: top 55% center;
  }

  .page-content {
    padding-bottom: 60px;
  }

  .block {
    &:nth-child(2) {
      padding: 60px 0 50px;
    }

    &:nth-child(3) {
      border: 2px solid;
    }

    h2 + a {
      margin-bottom: 20px;
    }
  }
</style>
