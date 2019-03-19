<template>
  <div>
    <header>
      <div>
        <h1>
          {{ $t('title') }}
        </h1>
        <nav class="Header__Menu">
          <NuxtLink :to="$i18n.path('')" exact>
            {{ $t('routes.home.name') }}
          </NuxtLink>
          <NuxtLink :to="$i18n.path($t('routes.about.url'))" exact>
            {{ $t('routes.about.name') }}
          </NuxtLink>
          <NuxtLink v-if="$i18n.locale === 'fr'" to="/en" exact>
            {{ $t('routes.lang.english') }}
          </NuxtLink>
          <NuxtLink v-if="$i18n.locale === 'en'" to="/" exact>
            {{ $t('routes.lang.french') }}
          </NuxtLink>
        </nav>
      </div>
    </header>
    <Nuxt />
    <footer>
      Footer
    </footer>
  </div>
</template>
