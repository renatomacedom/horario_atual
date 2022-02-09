<template>
  <div class="nav">
    <router-link to="/Lista_de_campeonato_volei">Campeonatos Vôlei  </router-link>|
    <router-link to="/Lista_de_campeonato_bt"> Campeonatos Beach Tennis </router-link>|
    <router-link to="/Lista_de_campeonato_Futevolei"> Campeonatos Futevolei </router-link>|
    <router-link to="/Lista_de_artigos"> Artigos  </router-link>|
    <!-- <router-link to="/">Horário Digital</router-link> |
    <router-link to="/about">Horário Analitico</router-link> |
    <router-link to="/Fluxo_financeiro">Fluxo Financeiro</router-link> -->
    <!-- <router-link to="/Lista_de_campeonato_volei">Campeonatos Vôlei | </router-link> -->
    <!-- <router-link to="/Lista_de_campeonato_bt"> Campeonatos Beach Tennis |</router-link> -->
    <!-- <router-link to="/Lista_de_campeonato_Futevolei"> Campeonatos Futevolei |</router-link> -->
    <!-- <router-link to="/Lista_de_artigos"> Artigos | </router-link> -->
    <!-- <router-link to="/O_que_e_o_esporte">esporte</router-link> | -->

  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  margin-top: 0px;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: #4F5D75;
  color: #2c3e50;

}
a {
  font-weight: bold;
  text-decoration: none;
  color: #F5F5F5;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
