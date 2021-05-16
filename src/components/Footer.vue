<template>
  <div class="row fixed-bottom">
    <div class="col-md-6">
      <label class="m-2">Ali <span>Erdoğan</span></label>
    </div>
    <div class="col-md-6 text-right">
      <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger">{{
          getTradeResult.purchase | currency
        }}</span>
      </span>
      <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-danger">{{
          getTradeResult.sale | currency
        }}</span>
      </span>
      <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Toplam : </strong>
        <span class="badge badge-danger">{{
          getTradeResult.balance | currency
        }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "Vuex";
export default {
  computed: mapGetters(["getTradeResult"])
};
</script>
