<template>
  <section>
    <img src="/images/plan/veules-les-roses-plan.png" class="page-header"/>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>Accès</h2>

          <p>Notre Relais Hôtelier Douce France se situe au cœur du magnifique Village de Veules les Roses, en Seine Maritime (Haute Normandie)</p>

          <p>
            <strong>Douce France</strong><br>
            13 rue Dr Girard<br>
            767980 Veules les Roses<br>
            France<br/>
          </p>

          <p>
            Latitude: 49.873871<br>
            Longitude: 0.798718
          </p>

          <br/>
          <ul class="list">
            <li>à 26 km de Dieppe</li>
            <li>à 194 kms de Paris</li>
            <li>à 2 heures de Paris et Lille </li>
            <li>à proximité de Fécamp et Etretat</li>
          </ul>
        </div>
        <div>
          <h3>{{ $t('plan.fromParis.title') }}</h3>
          <ul class="list">
            <li>{{ $t('plan.fromParis.instructions[0]') }}</li>
            <li>{{ $t('plan.fromParis.instructions[1]') }}</li>
            <li>{{ $t('plan.fromParis.instructions[2]') }}</li>
            <li>{{ $t('plan.fromParis.instructions[3]') }}</li>
          </ul>

          <h3>{{ $t('plan.fromLeHavre.title') }}</h3>
          {{ $t('plan.fromLeHavre.instructions[0]') }}
          <ul class="list">
            <li>{{ $t('plan.fromLeHavre.instructions[1]') }}</li>
            <li>{{ $t('plan.fromLeHavre.instructions[2]') }}</li>
            <li>{{ $t('plan.fromLeHavre.instructions[3]') }}</li>
          </ul>

          <h3>{{ $t('plan.withTrain.title') }}</h3>
          <ul class="list">
            <li>{{ $t('plan.withTrain.instructions[0]') }}</li>
            <li>{{ $t('plan.withTrain.instructions[1]') }}</li>
          </ul>
          <br/>{{ $t('plan.withTrain.instructions[2]') }}

          <h3>{{ $t('plan.fromEngland.title') }}</h3>
          <ul class="list">
            <li>{{ $t('plan.fromEngland.instructions[0]') }}</li>
            <li>{{ $t('plan.fromEngland.instructions[1]') }}</li>
          </ul>
        </div>
      </div>
    </div>

    <map-address class="page-footer"/>
  </section>
</template>


<script>
  import MapAddress from '~/components/MapAddress'

  export default {
    components: {
      MapAddress
    }
}
</script>

<style scoped lang="scss">
  h3 {
    margin-top: 40px;
  }
</style>
