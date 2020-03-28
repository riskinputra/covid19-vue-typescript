<template>
  <section class="content-body m-t-xl">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <RegionCase/>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <HistoryCorona/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import RegionCase from './components/RegionCase/index.vue'
import HistoryCorona from './components/HistoryCorona/index.vue'

@Component({
  components: {
    RegionCase,
    HistoryCorona
  }
})
export default class ContentBody extends Vue {

}
</script>
