<template>
  <div class="questions-section">
    <h2>{{ $t('help.title') }}</h2>
    <p>
      {{ $t('help.content[0]') }}
      <NuxtLink :to="$i18n.path($t('routes.faq.url'))">
        {{ $t('routes.faq.name') }}
      </NuxtLink>
    </p>
    <p>
      {{ $t('help.content[1]') }}
      <a :href="`tel:${$t('contact.phone')}`">
        {{ $t('contact.phone') }}
      </a> {{ $t('help.content[2]') }}
      <a :href="`mailto:${$t('contact.email')}`">
        {{ $t('contact.email') }}
      </a>
    </p>
  </div>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .questions-section {
    text-align: center;
    background: rgba($grey-blue, 0.05);
    padding: 60px 20px;

    h2:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
