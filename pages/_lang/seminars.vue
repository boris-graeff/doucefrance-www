<template>
  <section class="restaurant">
    <img src="/images/tearoom/tea-time-douce-france.jpg" class="page-header"/>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>{{ $t('routes.seminars.name') }}</h2>

          <p><strong>{{ $t('seminars.intro') }}</strong></p>

          <p>{{ $t('seminars.content[0]') }}</p>
          <p>{{ $t('seminars.content[1]') }}</p>
          <p>{{ $t('seminars.content[2]') }}</p>
          <p>{{ $t('seminars.content[3]') }}</p>
        </div>

        <div>
          <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" :loop="true" class="carousel">
            <slide v-for="index in 4" :key="index">
              <img :src="`/images/village/veules-les-roses-${index}.jpeg`" />
            </slide>
          </carousel>
          <p>{{ $t('seminars.photos.legend') }}</p>
        </div>

        <div>
          <p>{{ $t('seminars.content[3]') }}</p>
          <p>{{ $t('seminars.content[4]') }}</p>
          <p>{{ $t('seminars.content[5]') }}</p>
          <p>{{ $t('seminars.content[6]') }}</p>
          <p>{{ $t('seminars.content[7]') }}</p>
          <p>{{ $t('seminars.content[8]') }}</p>
        </div>

        <div>
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
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .blocks {
    > div {
      &:nth-child(2) {
        padding: 0;
      }

      &:last-child > div {
        padding: 60px;
        border: 2px solid;
      }
    }
  }

  .carousel + p {
    padding: 20px;
  }

</style>
