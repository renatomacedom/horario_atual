<template lang="html">
  <div >
<title>Campeonato Vôlei</title>
<ul v-for="campeonato in info" class="card">

<li to="/Lista_de_campeonato_bt">
  {{campeonato.data}} {{campeonato.categoria}} - {{campeonato.nome_torneio}} - {{campeonato.nivel}} - {{campeonato.local}}

  </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_volei',
  data(){

  return{
  info:[
    {categoria:'Volei',nome_torneio:'3° Festival Metropolitano  do ceara 4 etapa',data:'27/08/22 a 28/08/22', nivel:'Masculino e feminino', local:'Indefinido', contato: "(85)9.9814-9058"},
    {categoria:'Volei de praia',nome_torneio:'2° Pé na areia Arena MM 2022 ',data:'16/09/22 a 18/09/22', nivel:'Masculino,feminino e misto Iniciante, intermediario e avançado', local:'Arena MM', contato: "(85)9.999624-7015"},
    {categoria:'Volei de praia',nome_torneio:'3° Preá open Volei e Beach tennis ',data:'24/09/22 a 25/09/22', nivel:'Masculino Feminino e 70+', local:'Arena Acp - Preá', contato: "(88)9.99730-5466"},



],
historico:[
  {categoria:'Volei',nome_torneio:'3° Festival Metropolitano  do ceara 2 etapa',data:'21/05/22 a 22/05/22', nivel:'Masculino e feminino', local:'Indefinido', contato: "(85)9.9814-9058"},
  {categoria:'Volei',nome_torneio:'3° Festival Metropolitano  do ceara 2 etapa',data:'21/05/22 a 22/05/22', nivel:'Masculino e feminino', local:'Indefinido', contato: "(85)9.9814-9058"},
  {categoria:'Volei',nome_torneio:'3° Festival Metropolitano  do ceara 3 etapa',data:'23/07/22 a 24/07/22', nivel:'Masculino e feminino', local:'Indefinido', contato: "(85)9.9814-9058"},
  {categoria:'Volei',nome_torneio:'3° Festival Metropolitano  do ceara 1 etapa',data:'26/03/22 a 27/03/22', nivel:'Masculino e feminino', local:'Indefinido', contato: "(85)9.9814-9058"},
  {categoria:'Volei de Praia',nome_torneio:'Festival to na praia ',data:'29/04/22 a 01/05/22 ', nivel:'open',local:'Paracuru Ronco do mar',contato:""},
  {categoria:'Volei Praia',nome_torneio:'Open one clube',data:'09/04/22 e 10/04/22', nivel:'Aberto', local:'Maranguape oneclube', contato: "(85)9.98153-1301"},
  {categoria:'Volei Praia',nome_torneio:'Campeontao cearense de Vôlei de praia',data:'11/12/21 e 12/12/21', nivel:'Masculino Aberto', local:'Fortaleza CFO', contato: "(85)9.3456-3006"},
  {categoria:'Volei',nome_torneio:'2° Festival Metropolitano masculino do ceara -',data:'21/11/21-', nivel:'Masculino Aberto-', local:'Horizonte', contato: "(85)9.9814-9058"},
  {categoria:'Volei',nome_torneio:'2° Taça Ceara Volei -',data:'03/12/21 a 05/12/21-', nivel:'Variado', local:'Aracati', contato: "(88)9.9608-4431"},
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
background-color: #2D3142;
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
