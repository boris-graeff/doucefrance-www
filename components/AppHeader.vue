<template>
  <header class="header">
    <div>
      <div>
        <NuxtLink :to="$i18n.locale === 'fr' ? '/' : '/en'" exact>
          <img src="~/assets/douce-france.svg" alt="Douce France" class="logo">
        </NuxtLink>

        <div class="langs">
          <NuxtLink to="/en" exact>
            {{ $t('routes.lang.en') }}
          </NuxtLink>
          <NuxtLink to="/" exact>
            {{ $t('routes.lang.fr') }}
          </NuxtLink>
        </div>
      </div>

      <label class="menu-button" for="show-menu-button">|||</label>
      <input type="checkbox" id="show-menu-button" />

      <nav class="nav">
        <ul>
          <li>
            <a :href="$t('externals.booking', { lang: $i18n.locale.toUpperCase() })"
               class="button"
               target="_blank">
              {{ $t('common.actions.booking') }}
            </a>
          </li>

          <li v-for="page in $options.pages" :key="page">
            <NuxtLink :to="$i18n.path($t(`routes.${page}.url`))" exact>
              {{ $t(`routes.${page}.name`) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  pages: ['home', 'rooms', 'hotel', 'plan', 'seminars', 'village']
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .header {
    a {
      text-decoration: none;
    }

    > div {
      max-width: $max-content-width;
      margin: auto;
      padding: 20px;

      > div {
        display: flex;
        justify-content: space-between;
      }
    }

    a {
      color: inherit;
    }
  }

  .logo {
    width: 280px;
    margin-bottom: 10px;
  }

  .nav {
    ul {
      display: flex;
    }

    a {
      padding: 10px;
    }

    li + li {
      margin-left: 10px;
    }

    .nuxt-link-active {
      border-bottom: 2px solid;
    }

    li:first-child {
      margin-right: 30px;
    }
  }

  .langs {
    a {
      padding: 2px 6px;

      + a {
        position: relative;

        &:before {
          content: '';
          position: absolute;
          left: -1px;
          top: 4px;
          bottom: 4px;
          width: 1px;
          background: $dark;
        }
      }
    }
  }

  .menu-button {
    display: none;

    + input {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .nav {
      display: none;

      ul {
        flex-direction: column;
      }

      li + li {
        margin-left: 0;
        margin-top: 10px;
      }
    }

    .menu-button + input:checked + .nav {
      display: block;
    }

    .menu-button {
      display: inline-block;
    }
  }
</style>
