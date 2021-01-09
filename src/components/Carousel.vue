<template>
  <div class="carousel">
    <img class="imgLeft" :src="srcImgLeft" alt="" :class="{ active: left }" />
    <img
      class="imgCenter"
      :src="srcImgCenter"
      alt=""
      :class="{ right: right, left: left }"
    />
    <img
      class="imgRight"
      :src="srcImgRight"
      alt=""
      :class="{ active: right }"
    />
    <div class="info">
      <h2>{{ text }}</h2>
      <p>¡A domicilio!</p>
    </div>
    <input value="<" @click="imgBefore" class="btn-left" type="button" />
    <input value=">" @click="imgAfter" class="btn-right" type="button" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      interval: null,
      imgLeft: 0,
      imgCenter: 0,
      imgRight: 0,
      left: false,
      right: false,
    };
  },
  created() {
    this.interval = setInterval(this.imgAfter, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    imgBefore() {
      this.imgCenter = this.imgLeft;
      if (this.imgLeft > 0) {
        this.imgLeft -= 1;
      } else {
        this.imgLeft = this.images.length - 1;
      }
      this.left = true;
      setTimeout(() => {
        this.imgRight = this.imgCenter;
        this.imgCenter = this.imgLeft;
        this.left = false;
      }, 1000);
    },
    imgAfter() {
      this.imgCenter = this.imgRight;
      if (this.imgRight < this.images.length - 1) {
        this.imgRight += 1;
      } else {
        this.imgRight = 0;
      }
      this.right = true;
      setTimeout(() => {
        this.imgLeft = this.imgCenter;
        this.imgCenter = this.imgRight;
        this.right = false;
      }, 1000);
    },
  },
  computed: {
    ...mapState(["images"]),
    srcImgLeft() {
      return `./img/${this.images[this.imgLeft].src}`;
    },
    srcImgCenter() {
      return `./img/${this.images[this.imgCenter].src}`;
    },
    srcImgRight() {
      return `./img/${this.images[this.imgRight].src}`;
    },
    text() {
      return this.images[this.imgCenter].title;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  background-color: rgba(77, 77, 77, 0.5);
  overflow: hidden;
  position: relative;
  height: 400px;
  max-height: calc(100vh - 56px);
  .info {
    background-color: rgba(0, 0, 0, 0.75);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 2rem;
    h2 {
      color: #fff;
      font-size: 2.5rem;
    }
    p {
      color: #fff;
      font-size: 1.5rem;
    }
  }
  input {
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    font-size: 3rem;
    border: none;
    height: 72px;
    width: 36px;
    position: absolute;
    top: calc(50% - 36px);
    opacity: 0.25;
    &:hover {
      opacity: 0.5;
    }
    &:active {
      opacity: 0.75;
    }
  }
  .btn-left {
    left: 0;
  }
  .btn-right {
    right: 0;
  }
  img {
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    display: inline-block;
  }
  .imgLeft {
    transform: translateX(-100vw);
    &.active {
      transition: all 1s;
      transform: translateX(0);
    }
  }
  .imgCenter.left {
    transition: all 1s;
    transform: translateX(100vw);
  }
  .imgCenter.right {
    transition: all 1s;
    transform: translateX(-100vw);
  }
  .imgRight {
    transform: translateX(100vw);
    &.active {
      transition: all 1s;
      transform: translateX(0);
    }
  }
}
</style>
