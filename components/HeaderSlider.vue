<template>
  <div class="header-slider">
    <ul :style="{ transform: `translateX(${-100 * index}vw)`, width: `${images.length * 100}vw` }">
      <li v-for="(image, index) in images" :key="index" :style="{ backgroundImage: `url(${image})`}"></li>
    </ul>
  </div>
</template>

<script>
  const photos = [
    '/images/hotel-douce-france-veules-les-roses.jpg',
    '/images/home/hotel-1.jpg',
    '/images/home/hotel-2.jpg',
    '/images/home/hotel-3.jpg',
    '/images/home/hotel-4.jpg'
  ]

  export default {
    data () {
      return {
        index: 0,
        images: [
          photos[0]
        ]
      }
    },

    mounted() {
      this.interval = setInterval(() => {
        this.index = (this.index + 1) % photos.length
      }, 5000)

      setTimeout(() => {
        this.images = photos
      }, 1000)
    },

    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>

<style scoped lang="scss">
  .header-slider {
    overflow: hidden;

    ul {
      transition: transform 400ms linear;
      display: flex;
      max-width: none;
      width: auto;
      height: 100%;
    }

    li {
      height: 100%;
      width: 100vw;
      background-size: cover;
      background-position: center center;
    }
  }
</style>
