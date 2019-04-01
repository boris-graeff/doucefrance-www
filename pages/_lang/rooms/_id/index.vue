<template>
 <div>
   <div class="page-content">
     <rooms-header />

     <div>
       <h2>{{ $t(`rooms.${roomId}.name`) }}</h2>
       <h3>{{ $t(`rooms.${roomId}.intro`) }}</h3>
       <div>
         <strong>{{ $t('rooms.from', { price: room.price }) }}</strong>
       </div>
     </div>

     <section v-for="category in room.categories" :key="category.name">
       <div>
         <h3>{{ $t(`rooms.${roomId}.${category.name}.title`) }}</h3>
         <p v-html="$t(`rooms.${roomId}.${category.name}.description`)"></p>

         <a :href="$t('externals.booking', { lang: $i18n.locale.toUpperCase() })"
            class="button-secondary"
            target="_blank">
           {{ $t('common.actions.booking') }}
         </a>

         <div class="services desktop">
           <ul>
             <li>
               <img src="/images/rooms/services/surface.svg" />
               <p>{{ category.surface }} m2</p>
             </li>
             <li v-for="service in category.services" :key="service">
               <img :src="`/images/rooms/services/${service}.svg`" />
               <p>{{ $t(`rooms.services.${service}`) }}</p>
             </li>
           </ul>
         </div>
       </div>

       <div>
         <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" :loop="true" class="carousel">
           <slide v-for="photo in category.photos" :key="photo">
             <img :src="`/images/rooms/${roomId}/${category.name}-${photo}.jpg`" />
           </slide>
         </carousel>

         <div class="services mobile">
           <ul>
             <li>
               <img src="/images/rooms/services/surface.svg" />
               <p>{{ category.surface }} m2</p>
             </li>
             <li v-for="service in category.services" :key="service">
               <img :src="`/images/rooms/services/${service}.svg`" />
               <p>{{ $t(`rooms.services.${service}`) }}</p>
             </li>
           </ul>
         </div>
       </div>

     </section>
   </div>
 </div>
</template>

<script>
  import RoomsHeader from '~/components/RoomsHeader'
  import rooms from '~/locales/rooms'
  import categories from '~/locales/categories'

  export default {
    data () {
      return {
        roomId: this.$route.params.id
      }
    },
    computed: {
      room () {
        let roomId = this.roomId

        if (this.$i18n.locale === 'en') {
          const index = categories.en.indexOf(roomId)
          roomId = categories.fr[index]
        }
        return rooms[roomId]
      }
    },
    components: {
      RoomsHeader
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-content {
    padding-bottom: 60px;

    > div:nth-child(2) {
      text-align: center;
      padding: 0 20px;

      h2:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    > section {
      padding: 0 20px;
      display: flex;
      margin-top: 60px;

      > * {
        width: 100%;

        &:first-child {
          padding: 60px;
        }
      }

      h3 {
        font-weight: bold;
        margin-bottom: 20px;
      }
    }

    img {
      display: block;
    }
  }

  .button-secondary {
    padding: 6px 12px;
    margin-top: 20px;
  }

  .carousel {
    img {
      max-height: 512px;
      width: auto;
    }
  }

  .services {
    margin-top: 60px;

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    li {
      padding: 10px;
      text-align: center;
      width: 25%;
      font-size: 14px;
    }

    img {
      width: 36px;
      display: inline-block;
    }

    &.mobile {
      display: none;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 750px){
    .page-content {
      > section {
        flex-direction: column;

        > div:first-child {
          padding: 0;
          margin-bottom: 20px;
        }
      }
    }

    .services {
      &.mobile {
        display: block;
      }

      &.desktop {
        display: none;
      }
    }
  }
</style>
