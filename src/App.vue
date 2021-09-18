<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Horário Digital</router-link> |
      <router-link to="/about">Horário Analitico</router-link> |
      <router-link to="/Fluxo_financeiro">Fluxo Financeiro</router-link> -->
      <router-link to="/Lista_de_campeonato_volei">Campeonatos Vôlei | </router-link>
      <router-link to="/Lista_de_campeonato_bt"> Campeonatos Beach Tennis |</router-link>
      <router-link to="/Lista_de_artigos"> Artigos | </router-link>
      <!-- <router-link to="/O_que_e_o_esporte">esporte</router-link> | -->


    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* color: #2c3e50; */
}

#nav {

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
