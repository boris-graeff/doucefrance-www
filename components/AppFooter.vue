<template>
  <footer>
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
