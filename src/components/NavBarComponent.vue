<template>
   <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">DataEL<span> {</span>AS<span>} </span></a>
      <img src = "" alt = "">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-5" href="#faleconosco">Fale Conosco</a>
          </li>
        </ul>
        <a href="#" class ="btn btn-purple ">
          Teste gratuitamente</a>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'NavBarComponent'
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap');

.navbar .btn-outline-secondary {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 16px;
}
.nav-link {
  margin-left: 41px;
  font-size: 20px;
}
.navbar{
  padding: 32px 0;
}
.nav-link {
  margin-left: 41px;
  font-size: 16px;
}
.nav-link .nav-link.active {
  font-weight: bold;
}
.btn-purple {
  color: #fff;
  background-color: #6f42c1;
  border-color: #61129F;
  
}
.btn-purple:hover {
  background-color: #6f42c1;
  color: #fff;
}

@media (max-width: 767px) {
  .navbar-nav {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.span{
  display: inline-block;
  text-decoration:none;
  color: inherit;
  color: #61129F;
}

</style>