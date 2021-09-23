<template lang="html">
  <div >
<title>Campeonato Vôlei</title>
<ul v-for="campeonato in info" class="card">

<li to="/Lista_de_campeonato_bt">
  {{campeonato.data}} {{campeonato.categoria}} {{campeonato.nome_torneio}} {{campeonato.nivel}} {{campeonato.local}}

  </li>
  </ul>
  <a href="https://www.mmsociety.com.br" target="_blank">Conheça a MM society</a>

  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_volei',
  data(){

  return{
  info:[

  {categoria:'Volei',nome_torneio:'2° Festival Metropolitano masculino do ceara -',data:'21/11/21-', nivel:'Masculino Aberto-', local:'Horizonte', contato: "(85)9.9814-9058"},
  {categoria:'Volei de praia',nome_torneio:'Mundo unifor 2021 -',data:'02/10/21-', nivel:'Escolar  sub 17-', local:'Fortaleza cactus', contato: "(85)3477-3143"},
  {categoria:'Volei',nome_torneio:'Mundo unifor 2021 -',data:'20/10/21 a 24/10/21-', nivel:'Escolar  sub 17-', local:'Fortaleza Unifor', contato: "(85)3477-3143"},
  {categoria:'Volei de Praia',nome_torneio:'2° circuito das águas -',data:'2/10/21 a 3/10/21-', nivel:'Amador Masculino-', local:'Preá', contato: "(85)99730-5466"},
],

  }
},created(){
}
}
</script>

<style lang="css" scoped>
.card{
background-color: black;
border-radius: 5px;
width: 60%;
padding: 2%;
margin-left: auto;
margin-right: auto;
color: white;
}
li{
  width: 100%;
}
a{
  text-decoration: none;
  color: black;
  margin-left: 0;
  margin-right: 0;
}
ul{
  list-style-type: none;
}

</style>
