<template>
  <section class="faq">
    <div class="page-content">
      <h2>{{ $t('routes.faq.name') }}</h2>
      <ul class="list">
        <li v-for="num in 11" :key="num">
          <h3>{{$t(`faq.content[${num - 1}].q`)}}</h3>
          <p>{{$t(`faq.content[${num - 1}].a`)}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import '~@/style/vars';

  .page-content {
    padding: 30px 0 60px;
    width: 100%;
    max-width: 800px;
    margin: auto;
  }

  .faq {
    border-top: 1px solid;

    h2 {
      text-align: center;
      &:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    li + li {
      margin-top: 30px;
    }

    .list li:before {
      top: 1em;
    }
  }

</style>
