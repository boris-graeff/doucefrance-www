<template>
  <section class="restaurant">
    <img src="/images/tearoom/tea-time-douce-france.jpg" class="page-header"/>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>Seminaires</h2>

          <p><strong>Vos événements importants au relais hôtelier Douce France</strong></p>

          <p>Un havre de paix en Normandie dépaysant, confiné et plein de charme, tout proche de la mer, pour vos réunions d'affaires, à seulement 2 heures de Paris et de Lille, à 1 heure de Rouen et du Havre, ou même 30 kilomètres de Dieppe et Yvetot.</p>

          <p>Un lieu idéal pour organiser, en petit comité, avec une capacité d’accueil du 15 personnes assises autour de la table et ou 25 personnes assises en assemblée vos séminaires, assemblées générales, comités de direction, conférences, journées d'étude, réunions d'affaires, ou tout simplement une réunion ou événement familial.</p>

          <p>La salle est équipée d'un écran, paper board et accès Wifi illimité.</p>
        </div>

        <div>
          <div>
            <h3>Nos tarifs</h3>

            Journée Seminaire

            <ul class="list">
              <li>Location salon 150 € TTC *</li>
              <li>Pause 9 € par personne</li>
              <li>Formule petite salade fraîcheur, plat, buffet de desserts (hors boissons) 27 € par personne TTC</li>
            </ul>
            <br/>
            <p>* S'il s'agit d'un séminaire avec hébergement a partir de 6 suites la location de la salle est offerte</p>
          </div>
        </div>

        <div>
          <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" class="carousel">
            <slide v-for="index in 4" :key="index">
              <img :src="`/images/village/veules-les-roses-${index}.jpeg`" />
            </slide>
          </carousel>
          <p>Entre deux séances de travail, ou en fin de journée, vous pourrez découvrir le charme, la beauté de notre village entre petit fleuve et mer. À prévoir absolument !</p>
        </div>

        <div>
          <p>UN HÔTEL SÉMINAIRE permet à vos collaborateurs d'effectuer un séminaire de plus longue durée car disposant d'un hébergement</p>

          <p>Dès votre arrivée, pour bien commencer la journée, le café d'accueil vous est offert dans notre salon.</p>

          <p>En milieu de matinée (ainsi que vers 16 heures), la pause avec café, thé, jus d'orange pressé, pâtisseries maison vous est servie également dans le salon.</p>

          <p>Le déjeuner préparé par nos soins.</p>

          <p>Une formule comprenant une entrée, un plat, suivi d’un buffet de gourmandises sucrées ainsi que café. Ce déjeuner gourmand préparé par nos soins contribuera au succès de votre séminaire.</p>

          <p>A noter que pendant les périodes de beau temps, il vous sera possible de prolonger ce moment de détente et de calme avec vos collaborateurs, en déjeunant sur notre terrasse au bord de la Veules ( plus petit fleuve de France).</p>
        </div>

        <div>
          <p>
            Journée séminaire pour 15 personnes<br/>
            (15 personnes assises autour des tables ou 25 personnes assises en assemblée)<br/><br/>
          </p>

          <ul class="list">
            <li>De 8 heures à 17 h 30</li>
            <li>Café d’accueil ou petit déjeuner continental</li>
            <li>Deux pauses café en journée</li>
            <li>Formule entrée, plat, buffet de desserts (hors boissons)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .blocks {
    > div {
      &:nth-child(1) {

      }

      &:nth-child(2) {

        > div {
          padding: 60px;
          border: 2px solid;
        }
      }

      &:nth-child(3) {
        padding: 0;
      }

      &:last-child {
        background: $grey-light;
      }
    }
  }

  .carousel + p {
    padding: 20px;
  }

</style>
