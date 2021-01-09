<template>
  <footer class="footer">
    <p class="footer-content">&copy; Todos los derechos reservados</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-dark);
  min-height: 44px;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-content {
    color: #fff;
    text-align: center;
  }
}
</style>
