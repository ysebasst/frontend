<template>
  <div class="home container">
    <Carousel />
  </div>
</template>

<script>
import Carousel from "../components/Carousel";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
