<template>
  <div class="container">
    <Loading v-if="loading == true" />
    <div class="row justify-content-center">
      <div class="col-md-12 col-lg-6 mt-5">
        <div class="card shadow">
          <div class="card-body">
            <h3>Ürün Çıkışı</h3>
            <hr />
            <div class="form-group">
              <label>Ürün Adı</label>
              <select
                class="form-control"
                v-model="selectedProduct"
                @change="selectedChange"
              >
                <option selected value="null" disabled>Bir Ürün Seçiniz</option>
                <option
                  v-for="product in getProducts"
                  :disabled="product.Quantity <= 0"
                  :value="product.Id"
                >
                  {{ product.Name }}
                </option>
              </select>
            </div>
            <div
              class="card mb-2 border border-danger"
              v-if="this.product != null"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info"
                        >Stok : {{ this.product.Quantity }}</span
                      >
                      <span class="badge badge-primary"
                        >Fiyat : {{ this.product.Price | currency }}</span
                      >
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ this.product.Description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Adet</label>
              <input
                type="text"
                class="form-control"
                placeholder="Ürün adetini giriniz.."
                v-model="Quantity"
              />
            </div>
          </div>
          <div class="card-footer text-right">
            <button
              :disabled="!this.Validation"
              type="button"
              class="btn btn-success"
              @click="saveClick"
            >
              <i class="bi-save"></i> Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "../router";
import cardHeader from "../components/cardHeader";
import Loading from "../components/loading";

import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      loading: false,
      product: null,
      selectedProduct: null,
      Quantity: 0,
      saved: false
    };
  },
  components: {
    cardHeader,
    Loading
  },
  computed: {
    ...mapGetters(["getProducts"]),
    Validation() {
      return (
        this.product != null &&
        this.product.Id != null &&
        this.Quantity != null &&
        this.Quantity != 0
      );
    }
  },
  methods: {
    selectedChange() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    saveClick() {
      this.loading = true;
      let product = {
        key: this.product,
        count: this.Quantity
      };
      this.$store.dispatch("sellProduct", product).then(x => {
        if (x) {
          this.$store.commit("updateTrade", {
            Purchase: 0,
            Sale: this.product.Price * this.Quantity
          });
          this.$store.dispatch("setTrade");
          this.dataReset();
        } else {
          router.go(router.currentRoute);
        }
      });
    },
    dataReset() {
      this.loading = false;
      this.product = null;
      this.selectedProduct = null;
      this.Quantity = 0;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.product != null && !this.saved) {
      if (
        confirm(
          "Ürün satışı tamamlanmadı. Değişikliklerin iptal edilmesini istiyor musunuz ?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>

<style>
.border-danger {
  border-style: dashed !important;
}
</style>
