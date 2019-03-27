<template>
  <header class="header">
    <div>
      <div>
        <NuxtLink :to="$i18n.locale === 'fr' ? '/' : '/en'" class="home-link">
          <p>Relais Hôtelier</p>
          <img src="~/assets/douce-france.svg" alt="Douce France" >
        </NuxtLink>
      </div>

      <label class="menu-button" for="show-menu-button">
        <img src="~/assets/icn-menu.svg" />
      </label>
      <input type="checkbox" id="show-menu-button" />

      <nav class="nav">
        <ul>
          <li v-for="page in $options.pages" :key="page">
            <NuxtLink :to="$i18n.path($t(`routes.${page}.url`))" :class="{'category': page === 'rooms'}">
              {{ $t(`routes.${page}.name`) }}
            </NuxtLink>
          </li>
        </ul>

        <div class="langs">
          <NuxtLink to="/en" :class="{'active': $i18n.locale === 'en'}">
            {{ $t('routes.lang.en') }}
          </NuxtLink>
          <NuxtLink to="/" :class="{'active': $i18n.locale === 'fr'}">
            {{ $t('routes.lang.fr') }}
          </NuxtLink>
        </div>

        <a :href="$t('externals.booking', { lang: $i18n.locale.toUpperCase() })"
           class="button book-now"
           target="_blank">
          {{ $t('common.actions.booking') }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  pages: ['home', 'rooms', 'hotel', 'plan', 'seminars', 'village']
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .header {
    a {
      text-decoration: none;
      color: inherit;
    }

    > div {
      position: relative;
      max-width: $max-content-width;
      margin: auto;
      padding: 20px 20px 10px;

      > div:first-child {
        text-align: center;
      }
    }
  }

  .home-link {
    img {
      width: 250px;
    }

    p {
      font-size: 16px;
      position: relative;
      left: -7px;
      top: -3px;
      text-align: center;
    }
  }

  .nav {
    margin: 6px 0;

    ul {
      font-size: 20px;
      display: flex;
      justify-content: center;
      font-family: Quicksand;
    }

    a {
      padding: 10px;
    }

    li + li {
      margin-left: 10px;
    }

    .nuxt-link-exact-active, .category.nuxt-link-active {
      border-bottom: 2px solid;
    }
  }

  .book-now {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .langs {
    position: absolute;
    top: 20px;
    right: 20px;

    a {
      padding: 2px 6px;

      &.active {
        border: 2px solid;
      }
    }
  }

  .menu-button {
    display: none;
    position: absolute;
    right: 20px;
    top: 40px;

    + input {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    .nav ul {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 700px) {
    .nav {
      display: none;
      text-align: center;
      background: $grey-light;
      padding: 20px 0;

      ul {
        flex-direction: column;
        align-items: center;
      }

      li + li {
        margin-left: 0;
        margin-top: 10px;
      }
    }

    .menu-button + input:checked + .nav {
      display: block;
    }

    .menu-button {
      display: inline-block;
    }

    .langs, .book-now {
      position: static;
      margin-top: 20px;
    }

    .header > div > div:first-child {
      text-align: left;
    }
  }
</style>
