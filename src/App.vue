<template>
  <NavBarComponent />
  <HeroPage />
  <TestimonialsPage />
  <EmployeesPage />
  
</template>

<script>
import NavBarComponent  from './components/NavBarComponent';
import EmployeesPage from './pages/EmployeesPage.vue';
import HeroPage from './pages/HeroPage.vue';
import TestimonialsPage from './pages/TestimonialsPage.vue';

export default {
  components: {
    NavBarComponent,
    HeroPage,
    TestimonialsPage,
    EmployeesPage,
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

