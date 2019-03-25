<template>
 <div>
   <div class="page-content">
     <div>
       <h2>Suites "Large" </h2>
       <p>Un choix de 5 suites donnant sur la cour et sur la Veules à partir de 132 €</p>
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

<style scoped lang="scss">
  .page-content {
    section {
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;

      > * {
        width: 33%;

        &:first-child {
          width: 100%;
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
