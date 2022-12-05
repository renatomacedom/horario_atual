<template lang="html">
  <div >
<title>Campeonatos de Beach tennis</title>
<ul v-for="campeonato in info" class="card">

  {{campeonato.data}} - {{campeonato.nome_torneio}} - {{campeonato.nivel}} - {{campeonato.local}} - {{campeonato.contato}}</ul>

  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_bt',
  data(){

  return{
  info:[
    {categoria:'bt',nome_torneio:'Play benificente  ',data:'10/12/22', nivel:'Iniciante', local:'Préa/Ce', contato: "(88)9.99730-5466"},
    {categoria:'bt',nome_torneio:'TORNEIO TEAM SEEDS BEACH TENNIS',data:'09/12/22 a 11/12/2022', nivel:'Iniciantes, c e opn',local:'seeds Eusebio - CE ', contato:'85 98150 5021'},
    {categoria:'bt',nome_torneio:'1° TORNEIO DE BEACH TENNIS ARENA R2',data:'13/01/22 a 15/01/22', nivel:'Principiantes,Iniciante,c e open', local:'Arena r2,Eusebio', contato: "(85)9.9985-0809"},





  ],
/*historico:[
{categoria:'bt',nome_torneio:'WBS Brazil Celebration ',data:'09/09/22 a 11/09/2022', nivel:'Iniciantes',local:'Fortaleza - CE ', contato:'8532531803'},
{categoria:'bt',nome_torneio:'1° Ano Arena Original',data:'16/09/22 a 18/09/22', nivel:'Principiantes,Iniciante,intermediária e mista', local:'Arena original, sede azevedo bolão - Fortaleza', contato: "(85)9.9174-2084"},
{categoria:'bt',nome_torneio:'8° Etapa campeonato cearense de beach tennis',data:'20/09/2022 a 25/09/2022', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino misto)',local:'Fortaleza A12- CE ', contato:'85 98656 2563'},
{categoria:'bt',nome_torneio:'3° Preá open Volei e Beach tennis ',data:'24/09/22 a 25/09/22', nivel:'Masculino Feminino e 70+', local:'Arena Acp - Preá', contato: "(88)9.99730-5466"},
{categoria:'bt',nome_torneio:'9° Etapa campeonato cearense de beach tennis ',data:'6/10/22 a 09/10/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino misto)', local:'RBBT - Fortaleza', contato: "(85)9.8146-4854"},
{categoria:'bt',nome_torneio:'10° Etapa campeonato cearense de beach tennis ',data:'18/10/22 a 23/10/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino misto)', local:'Arena set - Fortaleza', contato: "(85)9.8146-4854"},
{categoria:'bt',nome_torneio:'11° Etapa campeonato cearense de beach tennis ',data:'3/11/22 a 06/11/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino misto)', local:'Spine - Fortaleza', contato: "(85)9.8146-4854"},
{categoria:'bt',nome_torneio:'12° Etapa campeonato cearense de beach tennis ',data:'1/12/22 a 04/12/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino misto)', local:'Marabeach - Fortaleza', contato: "(85)9.8146-4854"},
  {
  {categoria:'bt',nome_torneio:'7º Etapa Campeonato Cearense de Beach tennis ',data:'4/08/22 a 7/08/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza Arena Meireles', contato:'85 9.9988-7328'},
  {categoria:'bt',nome_torneio:'5º Etapa Campeonato Cearense de Beach tennis ',data:'24/06/22 a 26/06/22', nivel:'Iniciante(Masculino,feminino,misto)',local:'Fortaleza arena mm', contato:'85 9.99962-7015'},
  {categoria:'bt',nome_torneio:'5º Etapa Campeonato Cearense de Beach tennis ',data:'24/06/22 a 26/06/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza arena bt 500', contato:'85 9.9988-7328'},
  {categoria:'bt',nome_torneio:'6º Etapa Campeonato Cearense de Beach tennis ',data:'16/07/22 a 18/07/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Eusebio Seeds Beach tennis', contato:'85 9.9988-7328'},
{categoria:'bt',nome_torneio:'4º Etapa Campeonato Cearense de Beach tennis ',data:'27/05/22 a 29/05/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza arena match', contato:'85 9.9988-7328'},
{categoria:'bt',nome_torneio:'Sand beach tennis open ',data:'20/05/22 a 22/05/22', nivel:'Iniciante,c(Masculino,feminino e misto)',local:'Fortaleza Sand beach tennis', contato:'85 9.8198-1112'},
{categoria:'bt',nome_torneio:'Circuito Beach Tennis A12 ',data:'29/01/22 a 30/01/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino)',local:'Fortaleza Arena 12', contato:'85 9.8656-2563'},
{categoria:'bt',nome_torneio:'Rei do sol Beach tennis ',data:'05/02/22 a 06/02/22', nivel:'Iniciante,c,b,a,pro',local:'Eusébio Arena 6450', contato:'85 99930-7000'},
{categoria:'bt',nome_torneio:'Circuito Santa Praia - 2ª Etapa Água ',data:'09/02/22 a 13/02/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino)',local:'Fortaleza Santa Praia', contato:'https://www.circuitosantapraia.com.br/'},
{categoria:'bt',nome_torneio:'1º Etapa Campeonato Cearense de Beach tennis ',data:'17/02/22 a 20/02/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Eusébio 4estaçoões', contato:'85 9.9988-7328'},
{categoria:'bt',nome_torneio:'1º SEEDS OPEN ',data:'11/03/22 a 13/03/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino)',local:'Eusébio seeds', contato:'85 98150 5021'},
{categoria:'bt',nome_torneio:'2º Etapa Campeonato Cearense de Beach tennis ',data:'18/03/22 a 20/02/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Eusébio arena r2', contato:'85 9.9988-7328'},
{categoria:'bt',nome_torneio:'3º Etapa Campeonato Cearense de Beach tennis ',data:'7/04/22 a 9/04/22', nivel:'subs 12,14, 40+ 50+,Iniciante,c,b,a,pro,(Masculino,feminino,misto)',local:'Fortaleza Villa Beach tennis', contato:'85 9.9988-7328'},
{categoria:'bt',nome_torneio:'2° Preá Beach Tennis ',data:'12/09/21 a 15/09/21', nivel:'Iniciante,c,b,a,pro,+40,+50(Masculino,feminino e misto)',local:'Preá-ce'},
{categoria:'BT',nome_torneio:'Mundo unifor 2021 -',data:'02/10/21', nivel:'Escolar  sub 17-', local:'Fortaleza Cactus', contato: "(85)3477-3143"},
{categoria:'bt',nome_torneio:'Circuito Santa Praia - 4ª Etapa Vento ',data:'1/09/22 a 04/09/22', nivel:'Iniciante,c,b,a,pro,(Masculino,feminino misto)',local:'Fortaleza Santa Praia', contato:'https://www.circuitosantapraia.com.br/'},
  }
]*/

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
