<template>
  <div
    class="card"
    :class="[
      className,
      type,
      color
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop() type!: string;
  @Prop() color!: string;
  @Prop() className!: string;
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.card {
  padding: 16px;
  background: $dark-light;
  border-radius: 4px;
  &.info {
    border-radius: 30px;
  }
  &.blue {
    background-color: #92C7E8;
    color: #3A7295;
  }
  &.green {
    background-color: #CEE8CA;
    color: #4A7745;
  }
  &.red {
    background-color: #F27070;
    color: #B50808;
  }
}
</style>