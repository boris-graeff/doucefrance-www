<template>
  <section class="home">
    <div class="page-header"></div>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>Bienvenue au Douce France</h2>
          <p>
            Relais Hôtel situé à Veules les Roses, village romantique et authentique de Normandie, à 500 mètres de la mer.<br>
            Classé  dans le guide officiel des plus beaux villages de France.
          </p>
        </div>
        <div>
          <p>A deux heures de Paris et Lille, sur la Côte d'Albâtre du Pays de Caux, baignée par la lumière chère aux Impressionnistes, une petite station balnéaire a gardé son charme d'antan : Veules les Roses.</p>
          <p>Sur les pas de Victor Hugo, de Guy de Maupassant, et de nombreux autres artistes, elle vous convie à goûter aux plaisirs du silence et du repos dans un cadre marin et bucolique enchanteur dont la plupart des voies sont piétonnes.</p>
          <p>Niché au coeur de la station, cet ancien relais de poste du XVII ème siècle a été magnifiquement restauré dans la tradition du savoir faire ancestral des maitres maçons et charpentiers "Compagnons du Tour de France". Cette résidence de charme est bordée par la rivière. Elle est précédée par une belle cour fleurie, et prolongée par un jardin cloîtré propice au repos.</p>
          <p>Petits déjeuners, restauration légère, salon de thé, terrasse au bord de l'eau.</p>
        </div>

        <div>
          <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" loop="true">
            <slide>
              <img src="/images/hotel-douce-france-veules-les-roses.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-restaurant.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-veules-les-roses.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-1.jpg" />
            </slide>
            <slide>
              <img src="/images/hotel/hotel-2.jpg" />
            </slide>
          </carousel>
        </div>

        <div>
          <div>
            <h2>Vous souhaitez offrir un séjour de rêve à vos proches ?</h2>

            <p>Nous avons crée à cet effet la lettre cadeau-personnalisée.</p>

            <p>Nous réglons avec vous à l'avance  tous les détails afin que vos invités gardent un souvenir mémorable de leur passage chez nous.</p>

            <p>Pour plus de détails, contactez nous au  02 35 57 85 30</p>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-header {
    background-image: url('/images/hotel-douce-france-veules-les-roses.jpg');
    background-position: top 30% center;
    height: calc(100vh - 200px);
  }

  .blocks {
    > div:nth-child(3){
      padding: 0;
    }

    > div:nth-child(4){
      > div {
        padding: 60px;
        border: 2px solid;
      }
    }
  }
</style>
