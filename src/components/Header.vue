<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <router-link
        to='/'
        tag="a"
        class="navbar-brand">
            Ürün Listesi
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link
                    active-class="active"
                    tag="a"
                    to="/urun-islemleri"
                    class="nav-link"
                >
                Ürün İşlemleri
                </router-link>
                <!-- <a class="nav-link active" aria-current="page" href="#">Ürün İşlemleri</a> -->
            </li>
             <li class="nav-item">
                 <router-link
                    active-class="active"
                    tag="a"
                    to="/urun-cikisi"
                    class="nav-link">
                    Ürün Çıkışı
                 </router-link>
                <!-- <a class="nav-link active" aria-current="page" href="#">Ürün Çıkışı</a> -->
            </li>
        </ul>
       </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>