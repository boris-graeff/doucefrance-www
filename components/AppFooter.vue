<template>
  <footer class="footer">
    <div>
    {{ $t('common.phone') }} :
      <a :href="`tel:${$t('contact.phone')}`">
        {{ $t('contact.phone') }}
      </a>
    </div>

    <div>
      {{ $t('common.email') }} :
      <a :href="`mailto:${$t('contact.email')}`">
        {{ $t('contact.email') }}
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .footer {
    > div {
      max-width: $max-content-width;
      margin: auto;
    }
  }
</style>
