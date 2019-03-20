<template>
  <header class="header">
    <div>
      <NuxtLink :to="$i18n.locale === 'fr' ? '/' : '/en'" exact>
        <h1>{{ $t('title') }}</h1>
      </NuxtLink>



      <label class="menu-button" for="show-menu-button">|||</label>
      <input type="checkbox" id="show-menu-button" />

      <nav class="nav">
        <div>
          <a :href="$t('externals.booking', { lang: $i18n.locale.toUpperCase() })">
            {{ $t('common.actions.booking') }}
          </a>

          <ul>
            <li v-for="page in $options.pages" :key="page">
              <NuxtLink :to="$i18n.path($t(`routes.${page}.url`))" exact>
                {{ $t(`routes.${page}.name`) }}
              </NuxtLink>
            </li>
          </ul>

          <NuxtLink v-if="$i18n.locale === 'fr'" to="/en" exact>
            {{ $t('routes.lang.en') }}
          </NuxtLink>
          <NuxtLink v-if="$i18n.locale === 'en'" to="/" exact>
            {{ $t('routes.lang.fr') }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  pages: ['home', 'rooms', 'plan', 'tearoom', 'restaurant', 'seminars', 'village']
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .header {
    > div {
      max-width: $max-content-width;
      margin: auto;
    }
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
