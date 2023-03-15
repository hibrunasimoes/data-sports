<template>
    <div class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-header">
          <h4> Depoimentos</h4>
          <i class="fa-duotone fa-quotes"></i>
          <p>Veja o que nossos clientes estão dizendo sobre nossos serviços.</p>
        </div>
        <br>
        <div class="col-lg-4 col-sm-6" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="item"> <img class ="image" src=".././assets/image/quote.svg" alt="">
            
              <p class="testimonial-text">{{testimonial.description}}</p>
              <div class="testimonial-author">{{testimonial.name}}</div>
              <div class="occupation">{{testimonial.role}}</div>
           </div>
          </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: "TestimonialsPage",
    data () {
    return {
      testimonials:[],
    }
  },
  async mounted() {
  try {
    const response = await fetch('http://localhost:3000/testimonials');
    const data = await response.json();
    this.testimonials = data;
  } catch (error) {
    console.error(error);
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&family=Poppins:wght@100;300;400;500&display=swap');
.section-header {
  margin-bottom: 6opx;
}
.section-header h4{
  position: relative;
  padding: 0;
  color:#010101;
  line-height: 1;
  letter-spacing: 0.3px;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  text-transform: none;
  margin-bottom: 30px;

}
.section-header h4::before {
  content: '';
  width: 60px;
  height: 3px;
  background: #61129F;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.section-header p {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: gray;
}

.item {
  background: #fff;
  text-align: center;
  padding: 30px 25px;
  box-shadow:  0 0 25px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  margin-bottom: 30px;
  border: 5px solid lightgray;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;

}
.image {
  width: 30px;
}
</style>