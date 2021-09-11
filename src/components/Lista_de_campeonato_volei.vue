<template lang="html">
  <div >
<title>Campeonato Vôlei</title>
<ul v-for="campeonato in info" class="card">
  <a href="https://www.mmsociety.com.br">

<li to="/Lista_de_campeonato_bt">
  {{campeonato.data}} {{campeonato.categoria}} {{campeonato.nome_torneio}} {{campeonato.nivel}} {{campeonato.local}}

  </li>
  </a>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_volei',
  data(){

  return{
  info:[
  {categoria:'Volei',nome_torneio:'Copa nordeste de VP ',data:'11/09/21', nivel:'Sub15 e sub 19',local:'Jõao Pessoa'},
  {categoria:'Volei',nome_torneio:'Copa nordeste de VP ',data:'12/09/21', nivel:'sub 17 e sub 21', local:'Jõao Pessoa'},
  {categoria:'Volei',nome_torneio:'Torneio arena cidade ',data:'12/09/21', nivel:'Quarteto amador', local:'Fortaleza - Arena cidade'},
  {categoria:'Volei',nome_torneio:'Torneio arena cidade ',data:'12/09/21', nivel:'Dupla aberto', local:'Fortaleza - Arena cidade'},
  {categoria:'Volei',nome_torneio:'2° Festival Metropolitano masculino do ceara -',data:'21/11/21-', nivel:'Masculino Aberto-', local:'Horizonte', contato: "(85)9.9814-9058"},

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
padding-top: 25px;
margin-left: auto;
margin-right: auto;
color: white;
height: 50px;
}
li{
  width: 100%;
}
a{
  text-decoration: none;
  color: white;
  margin-left: 0;
  margin-right: 0;
}

</style>
