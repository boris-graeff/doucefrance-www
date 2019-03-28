<template>
  <div class="special-offer">
    <span>{{ $t('specialOffer.title') }}</span>
    <div>
      <p v-html="$t('specialOffer.content[0]')"></p>
      <p v-html="$t('specialOffer.content[1]')"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/style/vars";

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
