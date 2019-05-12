<template>
  <transition name="fade">
    <div class="app-modal" @click="$emit('close')" v-show="show">
      <div class="content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .app-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: rgba($grey-blue, 0.2);

    .content {
      background: white;
      width: 100%;
      max-width: 600px;
      padding: 60px;
      z-index: 1;
      max-height: 100%;
      overflow-y: auto;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 300ms ease;

    .content {
      transition: transform 300ms ease;
    }
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;

    .content {
      transform: translateY(-30px);
    }
  }
</style>
