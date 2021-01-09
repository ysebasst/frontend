<template>
  <nav class="navbar">
    <div class="container">
      <span id="menu-toggle" class="menu" @click="showNav = !showNav">
        <li class="fas fa-bars"></li>
      </span>
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="Bonitita Express" />
      </router-link>
      <ul class="nav" :class="{ show: showNav }">
        <li class="nav-item">
          <router-link to="/servicios" class="nav-link">Servicios</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/nosotros" class="nav-link">Nosotros</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacto" class="nav-link">Contacto</router-link>
        </li>
      </ul>
      <span id="menu-user" class="menu" @click="showMenuUser = !showMenuUser">
        <li class="fas fa-user"></li>
        <div class="options" :class="{ show: showMenuUser }">
          <a href="/iniciar-sesion">Iniciar sesion</a>
          <a href="/registrarse">Registrarse</a>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      showMenuUser: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--bg-dark);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .menu {
    color: #fff;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    cursor: pointer;
    outline: none;
    user-select: none;
    &:hover {
      background-image: var(--gr-white2);
    }
    &:active {
      background-image: var(--gr-white3);
    }
  }
  #menu-user {
    position: relative;
    // overflow: hidden;
    .options {
      z-index: 1;
      background-color: var(--bg-dark);
      position: absolute;
      top: 100%;
      right: 0;
      min-width: 240px;
      display: none;
      flex-direction: column;
      // transform: translateX(100vh);
      transition: all 0.5s ease-in-out;
      &.show {
        display: flex;
        // transform: translateX(0);
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        font-size: 1.5rem;
        border-top: var(--border-light);
        &:hover {
          background-image: var(--gr-white2);
        }
        &:active {
          background-image: var(--gr-white3);
        }
      }
    }
  }
  &-brand {
    height: 56px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    user-select: none;
    font-size: 1.5rem;
    &:hover {
      background-image: var(--gr-white2);
    }
    &:active {
      background-image: var(--gr-white3);
    }
    img {
      display: flex;
      max-height: 56px;
    }
  }
  .nav {
    z-index: 1;
    background-color: var(--bg-dark);
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    transform: translateY(-100vh);
    transition: all 1s;
    &.show {
      transform: translateY(0);
    }
    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: none;
      user-select: none;
      height: 56px;
      border-top: var(--border-light);
      &:hover {
        background-image: var(--gr-white2);
      }
      &:active {
        background-image: var(--gr-white3);
      }
    }
  }
  @media screen and (min-width: 768px) {
    #menu-toggle {
      display: none;
    }
    &-brand {
      flex: 0;
    }
    .nav {
      position: initial;
      transform: translateY(0);
      flex-direction: row;
      padding: 0 1rem;
      &-item {
        padding: 0 0.125rem;
      }
      &-link {
        padding: 0 1rem;
        border-top: var(--border-light);
        border-top-width: 3px;
        &.router-link-active {
          border-top: 3px solid pink;
        }
      }
    }
  }
}
</style>
