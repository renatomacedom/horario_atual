<template lang="html">
  <div >
<title>Artigos</title>
<ul v-for="artigo in info" class="card">
<li to="/Lista_de_artigo_bt">
  <h3>{{artigo.titulo}}</h3>
   <p>{{artigo.descricao_curta}}</p>
   <button type="button" name="button" @click="link(artigo.nome)">Veja mais</button>

  </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Lista_de_artigos',
  data(){

  return{
  info:[
  {titulo:'O que é o esporte ?',descricao_curta:'O que difere um esporte de uma brincadeira ? Como saber a hora de levar a sério as atividades esportivas',nome:'O_que_e_o_esporte'},
  {titulo:'Como montar uma quadra de areia ?',descricao_curta:'O mínimo que você precisa saber para montar uma quadra de areia para vôlei de praia e beach tennis',nome:'Montar_quadra_areia'},
  {titulo:'A federação cearense de voleibol',descricao_curta:'Como está e quais as dificuldades enfrentadas',nome:'Fevece'},


],
  }
},created(){
},
methods:{
  link(nome){

this.$router.push({ name: nome });
  }

}
}
</script>

<style lang="css" scoped>
.card{
background-color: #757575;
border-radius: 5px;
width: 71%;
padding: 1%;
margin-left: auto;
margin-right: auto;
color: white;
}
ul{
  padding-top: 0px;
  padding: 5px;
  margin: 2%;
}
li{
  margin: 0px;
  padding: 0px;
  position: static;
  display: flex;
  height: 100%;
  width: 100%;
}
h3{
  padding: 0px;

}
a{
  text-decoration: none;
  color: white;
  margin-left: 0;
  margin-right: 0;
}
button{
  color: #FFFFFF;
  background-color: #303F9F;
  border-radius: 5px;
}

</style>
