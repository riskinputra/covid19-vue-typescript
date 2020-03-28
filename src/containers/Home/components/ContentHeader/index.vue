<template>
  <section class="content-header">
    <div class="row">
      <!-- LOGO & ABOUT -->
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div class="content-header-info">
          <div class="content-header-info--title">
            <img src="../../../../assets/Covid-logo-light.png" alt="covid19-logo"/>
            <h4>Monitoring</h4>
          </div>
          <div class="content-header-info--body">
            Is project only for learn how to using VUE.js and Typescript and for monitoring CORONA Virus.
          </div>
        </div>
      </div>
      <!-- GLOBAL CASE -->
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h3 class="global-case--title">
          <span>
            Global Case <small>- Last Update: {{ globalCase.globalCase.lastUpdate }}</small>
          </span>
        </h3>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <global-case
              type="info"
              color="blue"
              title="Confirmed"
              :count="globalCase.globalCase.confirmed.value"
            />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <global-case
              type="info"
              color="green"
              title="Recovered"
              :count="globalCase.globalCase.recovered.value"
            />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <global-case
              type="info"
              color="red"
              title="Deaths"
              :count="globalCase.globalCase.deaths.value"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import { GlobalCaseState } from '@/types/globalCase'

import GlobalCase from './components/GlobalCase.vue'

const namespace = 'globalCase'

@Component({
  components: {
    GlobalCase
  }
})
export default class ContentHeader extends Vue {
  @Prop() private msg!: string;
  @State('globalCase') globalCase!: GlobalCaseState
  @Action('getGlobalCase', { namespace }) getDataGlobal: any;
  
  mounted () {
    this.getDataGlobal()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/_variables.scss';
.content-header {
  margin-top: $gutter-xl;
  &-info {
    border-radius: 4px;
    padding: 10px;
    line-height: 100px;
    &--title {
      display: flex;
      align-items: center;
      img {
        margin-right: $gutter-s;
      }
    }
    &--body {
      padding-top: 16px;
      font-size: 16px;
      letter-spacing: 3px;
      line-height: 21px;
    }
  }
  .global-case {
    &--title {
      border-bottom: 1px solid #FFFFFF;
      line-height: 0.1em;
      margin: 10px 0 20px;
      span {
        background: $dark;
        padding:0 10px;
        small {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
