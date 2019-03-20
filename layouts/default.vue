<template>
  <div>
    <app-header />
    <Nuxt />
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
