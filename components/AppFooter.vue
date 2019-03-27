<template>
  <footer class="footer">
    <div>

      <div>
        <NuxtLink :to="$i18n.locale === 'fr' ? '/' : '/en'" class="logo">
          <p>Relais Hôtelier</p>
          <img src="~/assets/douce-france.svg" alt="Douce France" />
        </NuxtLink>
      </div>

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
  </footer>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .footer {
    font-size: 12px;
    background: $grey-light;

    a {
      text-decoration: none;
    }

    > div {
      max-width: $max-content-width;
      margin: auto;
      padding: 60px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .logo {
    p {
      text-align: center;
      position: relative;
      top: -3px;
      left: -7px;
    }

    img {
      max-width: 200px;
    }
  }

  .contact {
    margin-left: 30px;
    display: flex;

    > div + div {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 700px){
    .footer > div {
      flex-direction: column;
    }

    .contact {
      margin-left: 0;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 450px){
    .contact {
      flex-direction: column;

      > div + div {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
</style>
