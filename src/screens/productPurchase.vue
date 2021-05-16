<template>
  <div class="container">
    <Loading v-if="loading == true" />
    <div class="row justify-content-center" v-else>
      <div class="col-md-12 col-lg-6 mt-5">
        <div class="card shadow">
          <div class="card-body">
            <cardHeader text="Ürün İşlemleri"></cardHeader>
            <form>
              <div class="mb-3">
                <label for="productName" class="form-label">Ürün Adı</label>
                <input
                  v-model="product.Name"
                  type="text"
                  id="productName"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="productQuantity" class="form-label">Adet</label>
                <input
                  v-model="product.Quantity"
                  type="number"
                  id="productQuantity"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="productPrice" class="form-label">Fiyat</label>
                <input
                  v-model="product.Price"
                  type="number"
                  id="productPrice"
                  class="form-control number"
                />
              </div>
              <div class="mb-3">
                <label for="productDescription" class="form-label"
                  >Açıklama</label
                >
                <textarea
                  v-model="product.Description"
                  type="text"
                  id="productDescription"
                  class="form-control"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="card-footer text-right">
            <button
              type="button"
              class="btn btn-success"
              @click="saveProduct"
            >
              <i class="bi bi-save"></i> Kaydet
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
import loading from "../components/loading";

export default {
  data: () => {
    return {
      saved: false,
      loading: false,
      product: {
        Id: "",
        Name: "",
        Quantity: null,
        Price: null,
        Description: "",
        Total: null
      }
    };
  },
  components: {
    cardHeader,
    Loading: loading
  },
  methods: {
    saveProduct() {
      this.loading = true;
      this.saved = true;
      this.product.Total =
        parseFloat(this.product.Price) * parseFloat(this.product.Quantity);
      this.$store.dispatch("saveProduct", this.product);

      this.$store.commit("updateTrade", {
        Sale: 0,
        Purchase: this.product.Total
      });
      this.$store.dispatch("setTrade");
      router.replace("/");
    }
  },
  computed: {
    Validation() {
      return (
        this.product.Name.length > 0 &&
        this.product.Price > 0 &&
        this.product.Quantity > 0 &&
        this.product.Description.length > 0
      );
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.product.Name.length > 0 ||
        this.product.Price > 0 ||
        this.product.Quantity > 0 ||
        this.product.Description.length > 0) &&
      !this.saved
    ) {
      if (
        confirm(
          "Ürün kaydı tamamlanmadı. Değişikliklerin iptal edilmesini istiyor musunuz ?"
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
