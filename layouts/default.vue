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
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import '~@/style/reset';
  @import '~@/style/global';
</style>

<style scoped lang="scss">
  @import '~@/style/vars';

  .app {
    /deep/ {
      .button {
        border: 2px solid $deep-blue;

        &:hover {
          background: $deep-blue;
          color: white;
        }
      }

      .list {
        li {
          position: relative;
          padding-left: 24px;

          &:before {
            content: '';
            position: absolute;
            border-top: 1px solid;
            height: 4px;
            width: 10px;
            display: inline-block;
            left: 4px;
            top: 0.7em;
          }
        }
      }
    }
  }

  .page {

    /deep/ {
      .page-content {
        max-width: $max-content-width;
        margin: auto;
      }

      h2 {
        font-size: 30px;
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

      .blocks {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: center;
        align-items: flex-start;

        > div {
          width: 50%;
          padding: 60px;
          background: white;

          &:nth-child(1) {
            background: $grey-light;
            margin-top: -110px;
          }
        }
      }

      .page-header, .page-footer {
        display: block;
      }

      .page-footer {
        margin-top: -70px;
      }
    }
  }
</style>
