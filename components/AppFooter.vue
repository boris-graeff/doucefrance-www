<template>
  <footer class="footer">
    <div>

      <div>
        <NuxtLink :to="$i18n.locale === 'fr' ? '/' : '/en'" exact>
          <img src="~/assets/douce-france.svg" alt="Douce France" class="logo">
        </NuxtLink>

        <div class="contact">

          <ul class="list">
          <li>13 rue Dr Girard<br/>
          76980 Veules les Roses<br/>
            FRANCE</li>
            <li>
              {{ $t('common.phone') }} :
              <a :href="`tel:${$t('contact.phone')}`">
                {{ $t('contact.phone') }}
              </a>
            </li>
            <li>
              {{ $t('common.fax') }} :
              {{ $t('contact.fax') }}
            </li>
            <li>
              {{ $t('common.email') }} :
              <a :href="`mailto:${$t('contact.email')}`">
                {{ $t('contact.email') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <iframe style="width: 182px; height: 71px;" src="http://www.facebook.com/plugins/likebox.php?locale=en_US&amp;href=http://www.facebook.com/pages/Relais-Hotelier-Douce-France/115609191788659?fref=ts&amp;width=183&amp;height=101&amp;header=false&amp;show_faces=false&amp;stream=false&amp;colorscheme=light&amp;font=lucida+grande&amp;border_color=%23315C99" scrolling="no" frameborder="0"></iframe>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    pages: ['home', 'rooms', 'plan', 'tearoom', 'restaurant', 'seminars', 'village']
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .footer {
    a {
      text-decoration: none;
    }

    > div {
      max-width: $max-content-width;
      margin: auto;
      padding: 60px 20px;
      display: flex;
      justify-content: space-between;
    }
  }

  .logo {
    max-width: 300px;
  }

  .contact {
    margin-top: 20px;
    font-size: 16px;
  }

  .links {
    margin-left: 60px;

    a {
      padding: 2px 6px;
    }
  }
</style>
