<template>
  <div class="container">
    <div class="row ">
      <div class="col mt-5">
        <div class="card shadow">
          <div class="card-body">
            <cardHeader text="Ürün Listesi"></cardHeader>
            <div class="alert alert-warning" v-show="getProducts.length == 0">
              <h5>Listenizde ürün bulunmuyor <br /></h5>
              <small>
                Listenize ürün eklemek için
                <router-link tag="a" to="/urun-islemleri"
                  >Ürün İşlemlerine</router-link
                >
                gidebilirsiniz.
              </small>
            </div>
            <div class="table-responsive">
              <table
                class="table table-striped table-sm "
                v-show="getProducts.length > 0"
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" class="text-nowrap">Ürün Adı</th>
                    <th scope="col" class="text-nowrap text-center">Adet</th>
                    <th scope="col" class="text-nowrap text-right">Fiyat</th>
                    <th scope="col" class="text-nowrap text-right">
                      Toplam Tutar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in getProducts">
                    <th scope="row">
                      <small> {{ product.Id }}</small>
                    </th>
                    <td>{{ product.Name }}</td>
                    <td :class="rowColor(product.Quantity)" class="text-center">
                      {{ product.Quantity }}
                    </td>
                    <td class="text-right">{{ product.Price | currency }}</td>
                    <td class="text-right">{{ product.Total | currency }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cardHeader from "../components/cardHeader";

export default {
  components: {
    cardHeader
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  methods: {
    rowColor(Quantity) {
      return Quantity > 0 ? "bg-success" : "bg-danger";
    }
  }
};
</script>
