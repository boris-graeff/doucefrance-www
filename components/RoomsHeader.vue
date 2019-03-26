<template>
  <nav class="rooms-header">
    <ul>
      <li v-for="room in Object.keys($options.rooms)" :key="room">
        <NuxtLink :to="$i18n.path($t('routes.rooms.url') + '/' + room)">
          <div>{{ $t(`rooms.${room}.name`) }}</div>
          <div>{{ $t(`rooms.size.${$options.rooms[room].size}`) }}</div>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
  import rooms from '~/locales/rooms'

  export default {
    rooms
  }
</script>

<style scoped lang="scss">
  .rooms-header {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 16px;

    a {
      text-decoration: none;
    }

    ul {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid;
      border-bottom: 1px solid;
    }

    li {
      padding: 12px;

      div:last-child {
        font-size: 12px;
      }
    }
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
