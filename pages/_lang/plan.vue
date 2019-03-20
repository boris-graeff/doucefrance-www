<template>
  <section>
    <map-address />

    <div>{{ $t('plan.fromParis.title') }}</div>
    <ul>
      <li>{{ $t('plan.fromParis.instructions[0]') }}</li>
      <li>{{ $t('plan.fromParis.instructions[1]') }}</li>
      <li>{{ $t('plan.fromParis.instructions[2]') }}</li>
      <li>{{ $t('plan.fromParis.instructions[3]') }}</li>
    </ul>

    <div>{{ $t('plan.fromLeHavre.title') }}</div>
    <ul>
      <li>{{ $t('plan.fromLeHavre.instructions[0]') }}</li>
      <li>{{ $t('plan.fromLeHavre.instructions[1]') }}</li>
      <li>{{ $t('plan.fromLeHavre.instructions[2]') }}</li>
      <li>{{ $t('plan.fromLeHavre.instructions[3]') }}</li>
    </ul>

    <div>{{ $t('plan.withTrain.title') }}</div>
    <ul>
      <li>{{ $t('plan.withTrain.instructions[0]') }}</li>
      <li>{{ $t('plan.withTrain.instructions[1]') }}</li>
      <li>{{ $t('plan.withTrain.instructions[2]') }}</li>
    </ul>

    <div>{{ $t('plan.fromEngland.title') }}</div>
    <ul>
      <li>{{ $t('plan.fromEngland.instructions[0]') }}</li>
      <li>{{ $t('plan.fromEngland.instructions[1]') }}</li>
    </ul>

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
