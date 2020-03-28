<template>
  <div class="home container">
    <ContentHeader/>
    <ContentBody/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentHeader from './components/ContentHeader/index.vue'
import ContentBody from './components/ContentBody/index.vue'

@Component({
  components: {
    ContentHeader,
    ContentBody
  }
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 64px;
}
</style>
