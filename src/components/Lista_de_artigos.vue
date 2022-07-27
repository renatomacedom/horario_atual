<template lang="html">
  <div >
<title>Artigos</title>
<h1>Artigos</h1>
<ul v-for="artigo in info" class="card">
<li><article class="card">


  <h3>{{artigo.titulo}}</h3>
   <p>{{artigo.descricao_curta}}</p>
   <button type="button" name="button" @click="link(artigo.nome)">Veja mais</button>
</article>
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
  {titulo:'Quais melhores bolas do mercado ?',descricao_curta:'Descubra quais as melhores bolas para o vôlei de praia e o futevôlei',nome:'Melhores_bolas'},
  {titulo:'O que são Larvas Migras ?',descricao_curta:'Veja o que mais afeta atletas e praticantes de esportes praianos',nome:'Larvas_migras'},
  {titulo:'8° Etapa CBV.',descricao_curta:'O circuito brasileiro de vôlei de praia chega em Fortaleza.',nome:'Circuito_brasileiro_VP'},


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
background-color: #2D3142;
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
  justify-content: space-between;
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
  background-color: #42b983;
  border-radius: 5px;
}

</style>
