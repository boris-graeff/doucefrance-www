<template>
  <div class="app-carousel">
    <vue-smart-carousel :delay="4000" v-model="index">
      <slot />
    </vue-smart-carousel>
    <div class="navigation">
      <button type="button" class="previous" @click="index -= 1"></button>
      <button type="button" class="next" @click="index += 1"></button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/style/vars';

  .app-carousel {
    position: relative;
  }

  .navigation {
    button {
      position: absolute;
      top: 50%;
      height: 40px;
      width: 40px;
      border-radius: 100%;
      background-color: rgba($grey-blue, 0.3);
      background-image: url('../assets/icn-arrow.svg');
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .previous {
    left: 6px;
  }

  .next {
    right: 6px;
    transform: rotate(180deg);
  }
</style>
