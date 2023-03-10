<template>
  <NavBarComponent />
  <HeroPage />
</template>

<script>
import NavBarComponent  from './components/NavBarComponent';
import HeroPage from './pages/HeroPage.vue';

export default {
  components: {
    NavBarComponent,
    HeroPage
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

