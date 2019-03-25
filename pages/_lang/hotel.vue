<template>
  <section class="hotel">
    <div class="page-header"></div>

    <div class="page-content">
      <div>
        <h2>L'Hôtel</h2>
        <p>
          Farniente, quiétude et douceur de vivre… Dans notre salon intérieur ou bien sur notre terrasse au bord de l’eau, nos petits déjeuners, notre carte de salon de thé et restauration légère.
        </p>
      </div>
      <section>
        <div>
          <h3>Le petit déjeuner</h3>
          <p>Instant gourmand au réveil autour de notre buffet avec des produits sucrés et salés. Vous allez aimer notre salade de fruits frais maison, nos jus pressés, nos cakes maison, la charcuterie de pays, les confitures artisanales...</p>
        </div>
        <div>
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>
      </section >

      <section>
        <div>
          <h3>Salon de thé</h3>

          <p>A l’heure du thé, sous le cloître dans la cour fleurie au bord de la Veules, ou tout simplement dans nos salons intérieurs, dégustez nos pâtisseries maison, nos crêpes, nos glaces généreuses, tout en appréciant la grande variété de nos thés de toutes origines, notre spécialité de chocolat à l'ancienne ou nos jus de fruits frais.</p>
          <p>Au bord de la Veules, le parfum des roses et du chèvrefeuille, ainsi que le bruissement des fontaines vous aideront à retrouver un rythme de vie calme paisible et heureux.</p>
        </div>
        <div>
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>
      </section>

      <section>
        <div>
          <h3>Restauration légère</h3>

          <p>Tout au long de la journée, pour les résidents et non-résidents, une petite restauration légère et variée, vous est servie en mettant à l'honneur des produits locaux.</p>

          <p>Elle est servie à toute heure (jusqu’à 18 heures pour les non-résidents).</p>

          <p>Grandes salades fraicheur, soupes, plats chauds cuisinés déclinés au fils des saisons et un large choix de pâtisseries maison.</p>
        </div>
        <div>
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>
      </section>

      <section>
        <div>
          <h3>Service en chambre</h3>

          <p>Vous n’avez pas envie de ressortir pour diner ?</p>
          <p>Notre service de restauration légère servi en chambre est à commander à la réception avant 18h 30 pour vous être déposé dans votre suite vers 19 h30.</p>
        </div>
        <div>
          <img src="/images/hotel/service-en-chambre.png" />
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-header {
    background-image: url('/images/hotel-douce-france-veules-les-roses.jpg');
    background-position: top 48% center;
  }

  .page-content{

    > div:first-child {
      margin: auto;
      padding: 60px;
      width: 50%;
    }

    > section {
      width: 100%;
      display: flex;

      + section {
        margin-top: 60px;
      }

      > * {
        width: 50%;

        &:first-child {
          padding: 60px;
        }
      }

      &:nth-child(even) {
        background: $grey-light;
      }

      &:nth-child(odd){
        background: white;

        > div:first-child {
          order: 2;
        }
      }

      img {
        display: block;
      }
    }
  }
</style>
