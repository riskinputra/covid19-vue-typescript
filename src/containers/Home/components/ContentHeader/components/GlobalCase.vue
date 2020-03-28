<template>
  <div class="global-case">
    <Card
      :type="type"
      :color="color"
    >
      <div class="title">
        {{ title }}
      </div>
      <div class="body">
        {{ count }}
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class GlobalCase extends Vue {
  @Prop() type!: string;
  @Prop() color!: string;
  @Prop() count!: string;
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped>
.global-case {
  position: relative;
  .body {
    font-size: 40px;
    line-height: 200px;
    text-align: center;
    font-weight: bold;
  }
}
</style>