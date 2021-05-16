<template>
  <div>
    <Header></Header>
     <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import productList from './screens/productList.vue';

export default {
  components: {
    Header,
    Footer,
    productList
  },
  created(){
    this.$store.dispatch("getTrade");
    this.$store.dispatch("getProducts");
  }
}
</script>

<style>
body{
    background-color: #a7a0bb5c;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .3s ease-out;
  }
  .fade-leave{}
  .fade-leave-active{
    transition: opacity.3s ease-out;
    opacity: 0;
  }
</style>