<template>
  <NavBarComponent />
  <HeroPage />
  <TestimonialsPage />
</template>

<script>
import NavBarComponent  from './components/NavBarComponent';
import HeroPage from './pages/HeroPage.vue';
import TestimonialsPage from './pages/TestimonialsPage.vue';

export default {
  components: {
    NavBarComponent,
    HeroPage,
    TestimonialsPage
  }

}
</script>
<style >
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>

