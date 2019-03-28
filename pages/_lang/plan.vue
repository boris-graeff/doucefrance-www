<template>
  <section>
    <div class="page-header"></div>

    <div class="page-content">
      <div class="blocks">
        <div>
          <h2>{{ $t('routes.plan.name') }}</h2>

          <p>{{ $t('plan.intro') }}</p>

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
            <li>{{ $t('plan.distances[0]') }}</li>
            <li>{{ $t('plan.distances[1]') }}</li>
            <li>{{ $t('plan.distances[2]') }}</li>
            <li>{{ $t('plan.distances[3]') }}</li>
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

    <map-address class="map"/>
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
  .page-header {
    background-image: url("/images/plan/veules-les-roses-plan.png");
  }

  h3 {
    margin-top: 40px;
  }

  .map {
    display: block;
  }
</style>
