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

  .app {
    /deep/ {
      .button {
        border: 2px solid $deep-blue;
        background: white;
        text-decoration: none;
        font-size: 16px;
        padding: 6px 12px;

        &:hover {
          background: $deep-blue;
          color: white;
        }
      }

      .button-secondary {
        background: $deep-blue;
        color: white;
        text-decoration: none;
        font-size: 16px;
        padding: 6px 12px;
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

      > * {
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
      height: 300px;
      background-color: $grey-light;
      background-size: cover;
      background-position: center center;
    }

    .page-footer {
      margin-top: -70px;
    }
  }
</style>
