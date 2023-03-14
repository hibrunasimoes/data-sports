<template>
<section class="setup">
  <div class="container">
    <div class="text-header text-center">
      <h3>Conheca nossos servicos</h3>
      <p>Nossos esportes......</p>
    </div>
    <div class="items text-center"> 
      <div class="row">
        <div class="col-md-4 " v-for="sport in sports" :key="sport.categoriesSports">
          <div class="icons">
            <img class ="icons-services" :src="sport.sportsImage" alt="">
          </div>
          <div class="desc">
            <h5>{{sport.categoriesSports}}</h5>
            <p>{{sport.descriptionSports}}</p>
          </div>
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
section.setup {
  padding: 287px 0;
}
.icons .icons-services{
  width: 40px;

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
  color: black;
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