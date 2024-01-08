<template>
  <nav class="rooms-header">
    <ul>
      <li v-for="category in $options.categories" :key="category.key">
        <NuxtLink :to="$i18n.path($t('routes.rooms.url') + '/' + category.routes[$i18n.locale])">
          <div>{{ $t(`rooms.${category.key}.name`) }}</div>
          <div>{{ $t(`rooms.size.${category.size}`) }}</div>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
  import categories from '~/config/categories'

  export default {
    categories
  }
</script>

<style scoped lang="scss">
  @import '@/style/vars';

  .rooms-header {
    margin-bottom: 30px;
    font-size: 16px;

    a {
      padding: 12px;
      text-decoration: none;
    }

    ul {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid;
      border-bottom: 1px solid;
    }

    li {
      div:last-child {
        font-size: 12px;
      }
    }
  }

  .nuxt-link-exact-active {
    background: $grey-blue;
    color: white;
  }

  @media screen and (max-width: 1100px){
    .rooms-header ul {
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        width: 25%;
      }
    }
  }


  @media screen and (max-width: 750px){
    .rooms-header ul li {
      width: 50%;
    }
  }
</style>
