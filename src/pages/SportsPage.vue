<template>
<section class="setup" id="services">
          <div class="section-header">
          <h4>Serviços</h4>
          <i class="fa-duotone fa-quotes"></i>
          <p>Se o seu esporte não esta aqui, entre em contato consco, fazemos analises personalizadas</p>
        </div>
      <div class="items text-center"> 
      <div class="row">
        <div class="col-md-4">
          <div class="icons">
            <img class ="icons-services" src="../assets/image/basquete.svg" alt="">
          </div>
          <div class="desc">
              <h5>Basquete</h5>    
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mauris justo. Aliquam tincidunt nulla velit, sed placerat metus commodo nec.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icons">
            <img class ="icons-services" src="../assets/image/volei.svg" alt="">
          </div>
          <div class="desc">
              <h5>Vôlei</h5>    
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mauris justo. Aliquam tincidunt nulla velit, sed placerat metus commodo nec.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icons">
            <img class ="icons-services" src="../assets/image/bola.svg" alt="">
          </div>
          <div class="desc">      
              <h5>Futebol</h5>    
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mauris justo. Aliquam tincidunt nulla velit, sed placerat metus commodo nec.</p>
         </div>
      </div>
   </div>
</div>  
</section>
</template>

<script>
export default {
  name: "SportsPage",
    data () {
    return {
      sports:[],
    }
  },
  async mounted() {
  try {
    const response = await fetch('http://localhost:3000/sports');
    const data = await response.json();
    this.sports = data;
  } catch (error) {
    console.error(error);
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&family=Poppins:wght@100;300;400;500&display=swap');
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #010101;
}
.icons .icons-services{
  width: 40px;
}
section.setup {
  padding: 5rem 0;
}
section.setup .text-header h3 {
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  color: black;
}
section.setup .text-header p {
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: gray;
}

section.setup .icons {
  padding: 27px 0 ;

}

section.setup .h5 {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: black;
  padding-bottom: 18px;

}
section.setup .desc p {
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: black;
  padding-bottom: 18px;
  max-width: 284px;
  margin: 0 auto;

}

</style>