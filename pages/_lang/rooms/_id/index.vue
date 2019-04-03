<template>
 <div class="page-content">
   <rooms-header />

   <div>
     <h2>{{ $t(`rooms.${category.key}.name`) }}</h2>
     <h3>{{ $t(`rooms.${category.key}.intro`) }}</h3>
     <div>
       <strong>{{ $t('rooms.from', { price: category.price }) }}</strong>
     </div>
   </div>

   <section v-for="room in category.rooms" :key="room.name">
     <div>
       <h3>{{ $t(`rooms.${category.key}.${room.name}.title`) }}</h3>
       <p v-html="$t(`rooms.${category.key}.${room.name}.description`)"></p>

       <a :href="$t('externals.booking')"
          class="button-secondary"
          target="_blank">
         {{ $t('common.actions.booking') }}
       </a>

       <div class="services desktop">
         <ul>
           <li>
             <img src="/images/rooms/services/surface.svg" />
             <p>{{ room.surface }} m2</p>
           </li>
           <li v-for="service in room.services" :key="service">
             <img :src="`/images/rooms/services/${service}.svg`" />
             <p>{{ $t(`rooms.services.${service}`) }}</p>
           </li>
         </ul>
       </div>
     </div>

     <div>
       <carousel :per-page="1" :autoplay="true" :autoplayTimeout="4000" :loop="true" class="carousel">
         <slide v-for="photo in room.photos" :key="photo">
           <img :src="`/images/rooms/${category.key}/${room.name}-${photo}.jpg`" />
         </slide>
       </carousel>

       <div class="services mobile">
         <ul>
           <li>
             <img src="/images/rooms/services/surface.svg" />
             <p>{{ room.surface }} m2</p>
           </li>
           <li v-for="service in room.services" :key="service">
             <img :src="`/images/rooms/services/${service}.svg`" />
             <p>{{ $t(`rooms.services.${service}`) }}</p>
           </li>
         </ul>
       </div>
     </div>

   </section>
 </div>
</template>

<script>
  import RoomsHeader from '~/components/RoomsHeader'
  import categories from '~/locales/categories'

  export default {
    data () {
      return {
        category: this.getCategory()
      }
    },
    methods: {
      getCategory(){
        const routeId = this.$route.params.id
        const { locale } = this.$i18n
        return categories.find(category => category.routes[locale] === routeId)
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
