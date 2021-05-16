<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->

          <router-link to="/" active-class="active" tag="a" class="nav-link">
            Ürün Listesi
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            active-class="active"
            tag="a"
            to="/urun-islemleri"
            class="nav-link"
          >
            Ürün İşlemleri
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            active-class="active"
            tag="a"
            to="/urun-cikisi"
            class="nav-link"
          >
            Ürün Çıkışı
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
