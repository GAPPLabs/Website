<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Inicio
          </a>

          <a class="navbar-item">
            ¿Qué hacemos?
          </a>

          <a class="navbar-item">
            Proyectos
          </a>

          <a class="navbar-item">
            Contacto
          </a>

        </div>
      </div>

    </div>
  </nav>

  <div>
    <h1>Main</h1>
    <v-btn>
      Button
    </v-btn>
  </div>


  <footer class="footer has-background-dark">
    <div class="content has-text-centered has-text-white">
      <p>&copy; 2023 GAPP LABS. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {name: "Site"}
</script>

<style scoped>

</style>