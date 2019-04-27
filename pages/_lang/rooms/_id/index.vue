<template>
  <div>
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
         <app-carousel class="carousel">
           <img v-for="photo in room.photos" :key="photo" :src="`/images/rooms/${category.key}/${room.name}-${photo}.jpg`" />
         </app-carousel>

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

    <questions-section />
  </div>
</template>

<script>
  import RoomsHeader from '~/components/RoomsHeader'
  import AppCarousel from '~/components/AppCarousel'
  import QuestionsSection from '~/components/QuestionsSection'
  import categories from '~/config/categories'

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
      RoomsHeader,
      AppCarousel,
      QuestionsSection
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-content {

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
        width: 50%;

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

        > * {
          width: 100%;
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
