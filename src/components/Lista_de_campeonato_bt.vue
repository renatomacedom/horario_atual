<template lang="html">
  <div >


<title>Campeonatos de Beach tennis</title>
<ul v-for="campeonato in info" class="card">

  {{campeonato.data}} {{campeonato.categoria}} {{campeonato.nome_torneio}} {{campeonato.nivel}} {{campeonato.local}}</ul>

  <a href="https://www.mmsociety.com.br" target="_blank">Conheça a Arena MM</a>
  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_bt',
  data(){

  return{
  info:[
  {nome_torneio:'Nenhum torneio previsto'},
],
// historico:[
//   {
//     {categoria:'bt',nome_torneio:'2° Preá Beach Tennis ',data:'12/09/21 a 15/09/21', nivel:'Iniciante,c,b,a,pro,+40,+50(Masculino,feminino e misto)',local:'Preá-ce'},
//     {categoria:'BT',nome_torneio:'Mundo unifor 2021 -',data:'02/10/21', nivel:'Escolar  sub 17-', local:'Fortaleza Cactus', contato: "(85)3477-3143"},
//   }
// ]

  }
},created(){
}
}
</script>

<style lang="css" scoped>
.card{
background-color: black;
border-radius: 5px;
padding: 2%;
width: 70%;
margin-left: auto;
margin-right: auto;
color: white;
height: 100%;
}

a{
  color: black;
  width: auto;

}

</style>
