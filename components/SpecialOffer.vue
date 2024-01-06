<template>
  <div class="special-offer">
    <span>{{ $t(`specialOffers.${type}.title`) }}</span>
    <div>
      <p v-html="$t(`specialOffers.${type}.content[0]`)"></p>
      <p v-html="$t(`specialOffers.${type}.content[1]`)"></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['type']
  }
</script>

<style scoped lang="scss">
  @import "@/style/vars";

  .special-offer {
    padding: 20px;
    background: rgba($pink, 0.05);

    span {
      display: block;
      font-size: 26px;
      color: $pink;
      margin-bottom: 6px;
    }

    p:first-child {
      font-size: 22px;
    }

    p:last-child {
      font-size: 12px;
    }
  }
</style>
