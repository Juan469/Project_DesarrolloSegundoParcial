<template>
  <router-view/>
</template>

<script>
export default {
  // Opcional: Nombre del componente principal
  name: 'App' 
}
</script>

<style>
/* Elimina o comenta cualquier estilo global innecesario que Vue CLI pueda haber añadido,
   como tipografías o centrados que interfieran con Bootstrap. */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Ya no necesitas centrar el texto aquí, Bootstrap lo manejará */
}
</style>