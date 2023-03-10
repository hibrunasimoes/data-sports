<template>
<section class="hero">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
          <!-- <div class="text-label">
              DataEL<span>{</span>AS<span>}</span>
          </div> -->
          <div class="text-hero-bold">
            Cresca conosco, melhore o seu desempenho
          </div>
          <div class="text-hero-regular">
          Fornecemos experiência e análise esportiva que definem tomada 
          de decisao mais precisa para melhor desempenho das principais
          atletas esportivas do mundo.
          </div>
          <!-- <div class="text-label">
            Melhore seu desempenho esportivo, conheca nossos produtos
          </div> -->
          <div class="buttons">
            <a href="#" class="btn btn-primary shadow-none  "> Entre em contato agora!</a>
            <a href="#" class="btn btn-secondary shadow-none ms-3 "> Entre em contato agora!</a>
          </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/image/hero-section.png" class= "w-100" alt="">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "HeroPage"
}
</script>

<style scoped>
:root  {
  --primary: #FBC257;
  --primary-light: #FCCC73;
  --dark-brown: #341413;
  --gray-1: #7980092;
  --gray-2: #E6E6ED;
  --white: #FFFFFF;

  --header-1: 64px;

  --text-medium: 18px;
  --text-regular: 16px;
  --text-ligth: 13px;


  --font-weight-bold: 700;
  --font-weight-semi-bold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-leight: 400;

}
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap');

.section-hero {
  padding: 90px 0;
}

.text-label{
  font-weight: 800;
  font-size: 48px;
  line-height: 73px;
}

.buttons {
  padding-top: 60px
}
.text-label,
.text-hero-bold,
.text-hero-regular {
  margin: 24px 0;
}
.text-label {
  line-height: 31px;
  color: var(--primary);
  font-size: var(--text-regular);
  font-weight: var(--font-weight-regular);
  line-height: 31px;

}
.text-hero-bold{
  line-height: 74px;
  color: var(--dark-brown);
  font-size: 64px;
  font-weight: var(--font-weight-bold);
}
.text-hero-regular{
  line-height: 31px;
  color: var(--gray-1);
  font-size: var(--text-regular);
  font-weight: var(--font-weight-regular);
}

</style>