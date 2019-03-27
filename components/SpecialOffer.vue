<template>
  <div class="special-offer">
    <span>Offre spéciale</span>
    <div>
      <p>
        3 nuits consécutives payées<br>
        4ème nuit à 50%
      </p>
      <p>
        Offre non valable du 1 er mai au 30 septembre inclus<br/>
        Une offre limitée à une période indivisible de 14 jours sous réserve de disponibilité<br/>
        Pour pouvoir bénéficier de l'offre, <strong>prière de le signaler dès la réservation</strong>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/style/vars";

  .special-offer {
    padding: 20px;
    background: rgba($pink, 0.05);

    span {
      font-size: 30px;
      color: $pink;
    }

    p:first-child {
      font-size: 22px;
    }

    p:last-child {
      font-size: 12px;
    }
  }
</style>
