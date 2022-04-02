<template lang="html">
  <div >
<title>Campeonatos de Beach tennis</title>
<ul v-for="campeonato in info" class="card">

  {{campeonato.data}} {{campeonato.categoria}} {{campeonato.nome_torneio}} {{campeonato.nivel}} {{campeonato.local}} {{campeonato.contato}}</ul>

  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_bt',
  data(){

  return{
  info:[
      {categoria:'bt',nome_torneio:'Sand beach tennis open ',data:'20/05/22 a 22/05/22', nivel:'Iniciante,c(Masculino,feminino e misto)',local:'Fortaleza Sand beach tennis', contato:'85 9.8198-1112'},
      {categoria:'bt',nome_torneio:'Circuito Beach Tennis A12 ',data:'29/01/22 a 30/01/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino)',local:'Fortaleza Arena 12', contato:'85 9.8656-2563'},
      {categoria:'bt',nome_torneio:'Rei do sol Beach tennis ',data:'05/02/22 a 06/02/22', nivel:'Iniciante,c,b,a,pro',local:'Eusébio Arena 6450', contato:'85 99930-7000'},
      {categoria:'bt',nome_torneio:'Circuito Santa Praia - 2ª Etapa Água ',data:'09/02/22 a 13/02/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino)',local:'Fortaleza Santa Praia', contato:'https://www.circuitosantapraia.com.br/'},
      {categoria:'bt',nome_torneio:'1º Etapa Campeonato Cearense de Beach tennis ',data:'17/02/22 a 20/02/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Eusébio 4estaçoões', contato:'85 9.9988-7328'},
      {categoria:'bt',nome_torneio:'1º SEEDS OPEN ',data:'11/03/22 a 13/03/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino)',local:'Eusébio seeds', contato:'85 98150 5021'},
      {categoria:'bt',nome_torneio:'2º Etapa Campeonato Cearense de Beach tennis ',data:'18/03/22 a 20/02/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Eusébio arena r2', contato:'85 9.9988-7328'},
      {categoria:'bt',nome_torneio:'3º Etapa Campeonato Cearense de Beach tennis ',data:'7/04/22 a 9/04/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza Villa Beach tennis', contato:'85 9.9988-7328'},
      {categoria:'bt',nome_torneio:'4º Etapa Campeonato Cearense de Beach tennis ',data:'27/05/22 a 29/05/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza arena match', contato:'85 9.9988-7328'},
      {categoria:'bt',nome_torneio:'5º Etapa Campeonato Cearense de Beach tennis ',data:'24/06/22 a 26/06/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza arena bt 500', contato:'85 9.9988-7328'},
      {categoria:'bt',nome_torneio:'6º Etapa Campeonato Cearense de Beach tennis ',data:'16/07/22 a 18/07/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Eusebio Seeds Beach tennis', contato:'85 9.9988-7328'},
      {categoria:'bt',nome_torneio:'7º Etapa Campeonato Cearense de Beach tennis ',data:'5/08/22 a 7/08/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza Arena 12', contato:'85 9.9988-7328'},







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
background-color: #2D3142;
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
