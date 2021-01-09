<template>
  <Navbar />
  <div id="router-view">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: inherit;
}
:root {
  --border-light: 1px solid rgba(255, 255, 255, 0.5);
  --bg-dark: rgba(77, 77, 77, 1);
  --gr-white1: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0)
  );
  --gr-white2: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0)
  );
  --gr-white3: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.25)
  );
}
body {
  background-color: rgba(0, 0, 0, 0.25);
  background-image: url("./assets/logo.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 40%;
  background-position: left 1rem bottom 44px;
}
#app {
  min-height: 100vh;
}
#router-view {
  min-height: calc(100vh - 100px);
}
.container {
  margin: 0 auto;
  max-width: 1110px;
}
</style>
