<template>
  <div class="region-case">
    <h3 class="region-case--title">
      <span>
        Region Case <small>- Last Update: {{ countries.countryCase.lastUpdate }}</small>
      </span>
    </h3>
    <div class="region-case--list">
      <select
        class="region-case--select"
        v-model="currentRegion"
      >
        <option 
          v-for="country in countries.countries.countries"
          :key="country.iso3"
          class="region-case--item"
          :value="country.iso3"
        >
          {{country.name}}
        </option>
      </select>
    </div>
    <div class="row m-t-l">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <Card className="center-xs">
          <div>Confirmed</div>
          <h2 class="m-t-xl blue">{{ countries.countryCase.confirmed.value }}</h2>
        </Card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <Card className="center-xs">
          <div>Recovered</div>
          <h2 class="m-t-xl green">{{ countries.countryCase.recovered.value }}</h2>
        </Card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <Card className="center-xs">
          <div>Deaths</div>
          <h2 class="m-t-xl red">{{ countries.countryCase.deaths.value }}</h2>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import { CountriesState } from '@/types/countries'

import Card from '@/components/Card.vue'


const namespace = 'countries'

@Component({
  components: {
    Card
  }
})
export default class RegionCase extends Vue {
  public currentRegion?: string = 'IDN'
  public showList?: boolean = false

  @State('countries') countries!: CountriesState

  @Action('getCountries', { namespace }) getDataCountries: any;
  @Action('getCountriesCase', { namespace }) getDataCountriesCase: any;
  
  mounted () {
    this.getDataCountries()
    this.getDataCountriesCase(this.currentRegion)
  }

  @Watch('currentRegion')
  onPropertyChanged(value: string, oldValue: string) {
    if (value !== oldValue) {
      this.getDataCountriesCase(value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.region {
  &-case {
    position: relative;
    &--list {
      position: relative;
      color: #FFFFFF;
      border-bottom: 1px solid #FD0000;
    }
    &--title {
      border-bottom: 1px solid #FFFFFF;
      line-height: 0.1em;
      margin: 10px 0 20px;
      span {
        background: $dark;
        padding-right: 10px;
        small {
          font-size: 12px;
        }
      }
    }
    &--select {
      width: 100%;
      outline: none !important;
      color: #FFFFFF;
      background: transparent;
      padding: 5px;
      font-size: 16px;
      line-height: 1;
      border: 0;
      border-radius: 0;
      height: 34px;
      &:focus {
        border: 0;
      }
    }
  }
}
</style>