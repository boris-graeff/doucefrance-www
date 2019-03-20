<template>
  <header>
    <div>
      <h1>
        {{ $t('title') }}
      </h1>
      <nav class="Header__Menu">
        <NuxtLink v-for="page in $options.pages"
                  :key="page"
                  :to="$i18n.path($t(`routes.${page}.url`))" exact>
          {{ $t(`routes.${page}.name`) }}
        </NuxtLink>

        <NuxtLink v-if="$i18n.locale === 'fr'" to="/en" exact>
          {{ $t('routes.lang.en') }}
        </NuxtLink>
        <NuxtLink v-if="$i18n.locale === 'en'" to="/" exact>
          {{ $t('routes.lang.fr') }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  pages: ['home', 'rooms', 'plan', 'tearoom', 'restaurant', 'seminars', 'village']
}
</script>
