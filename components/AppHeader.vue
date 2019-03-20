<template>
  <header>
    <h1>
      {{ $t('title') }}
    </h1>

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
  </header>
</template>

<script>
export default {
  pages: ['home', 'rooms', 'plan', 'tearoom', 'restaurant', 'seminars', 'village']
}
</script>

<style scoped lang="scss">

  .menu-button {
    display: none;

    + input {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .nav {
      display: none;
    }

    .menu-button + input:checked + .nav {
      display: block;
    }

    .menu-button {
      display: inline-block;
    }
  }
</style>
