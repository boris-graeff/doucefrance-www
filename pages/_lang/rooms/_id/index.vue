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

     <section v-for="(_, index) in $options.rooms[room].categories" :key="index">
       <div>
         <h3>{{ $t(`rooms.${room}.categories[${index}].title`) }}</h3>
         <p v-html="$t(`rooms.${room}.categories[${index}].description`)"></p>

         <a :href="$t('externals.booking', { lang: $i18n.locale.toUpperCase() })"
            class="button-secondary"
            target="_blank">
           {{ $t('common.actions.booking') }}
         </a>
       </div>

       <div>
         <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" :loop="true" class="carousel">
           <slide v-for="photo in $options.rooms[room].photos[index]" :key="photo">
             <img :src="`/images/rooms/${room}/${room}-${index}-${photo}.jpg`" />
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
