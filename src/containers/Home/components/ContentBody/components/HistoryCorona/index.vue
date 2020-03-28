<template>
  <div class="row history">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3 class="history--title">
        <span>
          History Case <small>- Indonesia</small>
        </span>
      </h3>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <table>
        <thead>
          <tr>
            <th>Kasus</th>
            <th>Tgl</th>
            <th>RS</th>
            <th>Provinsi</th>
            <th>Gender</th>
            <th>Umur</th>
            <th>WN</th>
            <th>Penularan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in history.history.nodes" :key="item.id">
            <td class="center-xs">{{ item.kasus }}</td>
            <td nowrap>{{ item.pengumuman }}</td>
            <td>{{ item.rs }}</td>
            <td>{{ item.provinsi }}</td>
            <td class="center-xs">{{ item.gender }}</td>
            <td class="center-xs">{{ item.umurtext }}</td>
            <td class="center-xs">{{ item.wn }}</td>
            <td>{{ item.penularan }}</td>
            <td
              class="center-xs"
              :class="[
              item.statusid === '1' ? 'green' : (item.statusid === '2' ? 'blue' : (item.statusid === '3' ? 'red' : ''))
              ]"
            >
              {{ item.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import { HistoryState } from '@/types/history'

const namespace = 'history'

@Component
export default class ContentBody extends Vue {
  @State('history') history!: HistoryState
  @Action('getHistory', { namespace }) getDataHistory: any;
  
  mounted () {
    this.getDataHistory()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.history {
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
  table {
    table-layout: fixed;
    border-collapse: collapse;
    font-size: 12px;
    display: block;
    position: relative;
    overflow: auto;
    height: 400px;
    th {
      text-align: center;
    }
    th, td {
      border: 0;
      padding: 5px;
    }
    tbody {
      tr {
        border-bottom: 1px solid #fff;
        &:last-child {
          border-bottom: 0;
        }
      }
      td {
        background-color: $dark-light;
      }
    }
  }
}
</style>
