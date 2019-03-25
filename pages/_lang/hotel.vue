<template>
  <section class="hotel">
    <div class="page-header"></div>

    <div class="page-content">
      <div>
        <h2>L'Hôtel</h2>
      </div>
      <section>
        <div>
          <h2>Le petit déjeuner</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>
      </section >

      <section>
        <div>
          <h2>Salon de thé</h2>

          <p>Sous le cloître, dans la cour fleurie ou tout simplement dans nos salons intérieurs, dégustez nos pâtisseries maison, nos crêpes, nos glaces généreuses, tout en appréciant la grande variété de nos thés de toutes origines, notre chocolat à l'ancienne ou nos jus de fruits frais.</p>
        </div>
        <div>
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>
      </section>

      <section>
        <div>
          <h2>Restauration légère</h2>

          <p>Tout au long de la journée, pour les résidents et non résidents, une petite restauration légère et variée, déclinée au fil des saisons, vous est servie en mettant à l'honneur des produits locaux.</p>

          <p>Elle est servie à toute heure ( jusqu'à 18 heures pour les non résidents) et propose :</p>

          <ul class="list">
            <li>De grandes salades fraîcheur</li>
            <li>Des soupes de saison</li>
            <li>3 assiettes chaudes cuisinées selon la saison</li>
            <li>Large choix de pâtisseries maison</li>
          </ul>
        </div>
        <div>
          <img src="/images/hotel/salle-restauration.jpg" />
        </div>
      </section>

      <section>
        <div>
          <h2>Service en chambre</h2>

          <p>À votre disposition notre service de restauration légère servi en chambre est à commander à la réception avant 18h 30 pour vous être déposé dans votre suite vers 19 h 30</p>
        </div>
        <div>
          <img src="/images/hotel/service-en-chambre.png" />
        </div>
      </section>
    </div>

    <div class="page-footer"></div>
  </section>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-header {
    background-image: url('/images/hotel/hotel-douce-france.jpg');
  }

  .page-footer{
    background-image: url('/images/hotel/hotel-douce-france.jpg');
  }

  .page-content{

    > div:first-child {
      background: white;
      margin-top: -110px;
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
