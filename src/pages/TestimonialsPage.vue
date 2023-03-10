<template>
    <div class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-header">
          <h4> Depoimentos</h4>
          <i class="fa-duotone fa-quotes"></i>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum natus corrupti, perferendis iure architecto blanditiis placeat aspernatur animi rem sed ea et voluptate voluptates nesciunt quod similique rerum minima.</p>
        </div>
        <div class="col-lg-4 col-sm-6" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="item"> <img class ="image" src=".././assets/image/quote.svg" alt="">
            
              <p class="testimonial-text">{{testimonial.description}}</p>
              <div class="testimonial-author">{{testimonial.name}}</div>
              <div class="occupation">{{testimonial.role}}</div>
           </div>
          </div>
          <!-- <div class="col-lg-4 col-sm-6">
            <div class="item">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum enim perferendis minima! Quae maxime in earum. Rerum distinctio, quae consequatur minima laboriosam nesciunt vitae odit modi in aspernatur! Molestiae, quis.</p>
             </div>
            </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum enim perferendis minima! Quae maxime in earum. Rerum distinctio, quae consequatur minima laboriosam nesciunt vitae odit modi in aspernatur! Molestiae, quis.</p>
           </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum enim perferendis minima! Quae maxime in earum. Rerum distinctio, quae consequatur minima laboriosam nesciunt vitae odit modi in aspernatur! Molestiae, quis.</p>
           </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum enim perferendis minima! Quae maxime in earum. Rerum distinctio, quae consequatur minima laboriosam nesciunt vitae odit modi in aspernatur! Molestiae, quis.</p>
           </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum enim perferendis minima! Quae maxime in earum. Rerum distinctio, quae consequatur minima laboriosam nesciunt vitae odit modi in aspernatur! Molestiae, quis.</p>
           </div>
          </div> -->
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
  color:#010101;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
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