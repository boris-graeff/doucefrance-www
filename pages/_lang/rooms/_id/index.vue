<template>
 <div>
   <div class="page-content">
     <rooms-header />

     <div>
       <h2>{{ $t(`rooms.${room}.name`) }}</h2>
       <h3>{{ $t(`rooms.${room}.intro`) }}</h3>
       <div>
         <strong>{{ $t('rooms.from', { price: $options.rooms[room].price }) }}</strong>
       </div>
     </div>

     <section v-for="category in $options.rooms[room].categories" :key="category.name">
       <div>
         <h3>{{ $t(`rooms.${room}.${category.name}.title`) }}</h3>
         <p v-html="$t(`rooms.${room}.${category.name}.description`)"></p>

         <a :href="$t('externals.booking', { lang: $i18n.locale.toUpperCase() })"
            class="button-secondary"
            target="_blank">
           {{ $t('common.actions.booking') }}
         </a>

         <div class="services">
           <ul>
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
             <img :src="`/images/rooms/${room}/${category.name}-${photo}.jpg`" />
           </slide>
         </carousel>
       </div>

     </section>
   </div>
 </div>
</template>

<script>
  import RoomsHeader from '~/components/RoomsHeader'
  import rooms from '~/locales/rooms'

  export default {
    rooms,
    data(){
      return {
        room: this.$route.params.id
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
        margin-bottom: 2px;
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
  }
</style>
