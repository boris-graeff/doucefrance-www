<template>
 <div>
   <div class="page-content">
     <rooms-header />

     <div>
       <h2>{{ $t(`rooms.${room}.name`) }}</h2>
       <p>{{ $t(`rooms.${room}.intro`) }}</p>
     </div>

     <section>
       <div>
         <h3>Flandre / Gascogne / Languedoc</h3>
         <p>Trois Suites Large avec terrasse commune surplombant la Veules</p>
         <p>Elles se composent d’un petit salon, kitchenette, salle de douche avec wc, chambre avec literie en 140 cm</p>

         <a :href="$t('externals.booking', { lang: $i18n.locale.toUpperCase() })"
            class="button-secondary"
            target="_blank">
           {{ $t('common.actions.booking') }}
         </a>
       </div>
       <div>
         <img src="/images/hotel/salle-restauration.jpg" />
         <p>Lit</p>
       </div>
       <div>
         <img src="/images/hotel/salle-restauration.jpg" />
         <p>Salle de bain</p>
       </div>
       <div>
         <img src="/images/hotel/salle-restauration.jpg" />
         <p>Pièce à vivre</p>
       </div>

     </section>
   </div>
 </div>
</template>

<script>
  import RoomsHeader from '~/components/RoomsHeader'
  import rooms from '~/locales/rooms'

  export default {
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

    > div:nth-child(2) {
      text-align: center;

      h2:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    section {
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 60px;

      > * {
        width: 50%;

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
</style>
