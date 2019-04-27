<template>
  <div class="questions-section">
    <h2>Une question ?</h2>
    <p>
      Jettez un coup-d'oeil à notre
      <NuxtLink :to="$i18n.path($t('routes.faq.url'))">
        {{ $t('routes.faq.name') }}
      </NuxtLink>
    </p>
    <p>
      Ou bien contactez nous au
      <a :href="`tel:${$t('contact.phone')}`">
        {{ $t('contact.phone') }}
      </a> ou sur
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
