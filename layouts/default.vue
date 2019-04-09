<template>
  <div class="app">
    <app-header />
    <div class="page">
      <Nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import '~@/style/global';
</style>

<style scoped lang="scss">
  @import '~@/style/vars';

  /deep/ {
    .page-content {
      max-width: $max-content-width;
      margin: auto;

      h2 {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          border-bottom: 2px solid;
          width: 40px;
        }
      }
    }

    .blocks {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      justify-content: center;
      align-items: flex-start;

      > * {
        width: 50%;

        &:first-child .block:first-child,
        &:first-child.block {
          background: $grey-light;
          margin-top: -110px;
        }
      }

      .block {
        padding: 60px;
      }
    }

    .page-header, .page-footer {
      display: block;
      height: 300px;
      background-color: $grey-light;
      background-size: cover;
      background-position: center center;
    }

    .VueCarousel-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-height: 512px;
        width: auto;
      }
    }
  }

  @media screen and (max-width: 1000px){
    /deep/ {
      .blocks {
        .block {
          padding: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 900px){
    /deep/ {
      .blocks {
        > * {
          width: 100%;

          &:first-child .block:first-child,
          &:first-child.block {
            margin-top: 0;
          }
        }
      }
    }
  }
</style>
