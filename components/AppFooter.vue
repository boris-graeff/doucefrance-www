<template>
  <footer class="footer">
    <div>

      <div>
        <NuxtLink :to="$i18n.locale === 'fr' ? '/' : '/en'" exact>
          <img src="~/assets/douce-france.svg" alt="Douce France" class="logo">
        </NuxtLink>
        <p>Relais Hôtelier à Veules Les Roses</p>

        <div class="contact">
          <div>
            13 rue Dr Girard<br/>
            76980 Veules les Roses<br/>
            FRANCE
          </div>
          <div>
            {{ $t('common.phone') }} :
            <a :href="`tel:${$t('contact.phone')}`">
              {{ $t('contact.phone') }}
            </a>
            <br/>
            {{ $t('common.fax') }} :
            {{ $t('contact.fax') }}
            <br/>
            {{ $t('common.email') }} :
            <a :href="`mailto:${$t('contact.email')}`">
              {{ $t('contact.email') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .footer {
    font-size: 14px;
    background: $grey-light;

    a {
      text-decoration: none;
    }

    > div {
      max-width: $max-content-width;
      margin: auto;
      padding: 60px 20px;
      display: flex;
    }
  }

  .logo {
    max-width: 200px;
  }

  .contact {
    margin-top: 20px;
    display: flex;

    > div + div {
      margin-left: 20px;
    }
  }
</style>
