<template lang="html">
  <div >
<title>Campeonatos de Futevolei</title>
<ul v-for="campeonato in info" class="card">
  {{campeonato.data}} {{campeonato.categoria}} {{campeonato.nome_torneio}} {{campeonato.nivel}} {{campeonato.local}} Tel :{{campeonato.contato}}</ul>
  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_futevolei',
  data(){

  return{
  info:[
    {categoria:'Futevolei',nome_torneio:'Open One clube ',data:'23/04/22 e 24/04/22 ', nivel:'open',local:'Maranguape one clube',contato:"(85)9.98153-1301"},
    {categoria:'Futevolei',nome_torneio:'Festival to na praia ',data:'29/04/22 a 01/05/22 ', nivel:'open',local:'Paracuru Ronco do mar',contato:""},
    {categoria:'Futevolei',nome_torneio:'1° Etapa FCFV ',data:'março a definir ', nivel:'Não informado',local:'Fortaleza',contato:"85 9.98827-9077"},
    {categoria:'Futevolei',nome_torneio:'Copa puro açaí ',data:'abril a definir ', nivel:'Não informado',local:'Fortaleza',contato:"85 9.98827-9077"},
    {categoria:'Futevolei',nome_torneio:'Open barreto ',data:'maio a definir ', nivel:'Não informado',local:'Fortaleza arena barreto',contato:"85 9.98827-9077"},
    {categoria:'Futevolei',nome_torneio:'2° Etapa FCFV ',data:'Julho a definir ', nivel:'Não informado',local:'Fortaleza',contato:"85 9.98827-9077"},
    {categoria:'Futevolei',nome_torneio:'Copa puro açaí',data:'Agosto a definir ', nivel:'Não informado',local:'Fortaleza',contato:"85 9.98827-9077"},
    {categoria:'Futevolei',nome_torneio:'3° Etapa FCFV ',data:'Setembro a definir ', nivel:'Não informado',local:'Fortaleza',contato:"85 9.98827-9077"},
    {categoria:'Futevolei',nome_torneio:'Open barreto',data:'Novembro a definir ', nivel:'Não informado',local:'Fortaleza',contato:"85 9.98827-9077"},
    {categoria:'Futevolei',nome_torneio:'4° Etapa FCFV ',data:'Dezembro a definir ', nivel:'Não informado',local:'Fortaleza',contato:"85 9.98827-9077"},


],
historico:[

  {categoria:'Futevolei',nome_torneio:'1° Torneio MM Arena Futêvolei ',data:'20/11/21 ', nivel:'Iniciante',local:'Fortaleza',contato:"85 9.9969-7003"},
  {categoria:'Futevolei',nome_torneio:'1° Copa Futêvolei Mucuripe ',data:'16/12/21 a 18/12/21 ', nivel:'Iniciante a avançado',local:'Fortaleza',contato:"85 9.9913-5500"},
  {categoria:'Futevolei',nome_torneio:'Arena Cidade ',data:'18/12/21', nivel:'Iniciante',local:'Fortaleza',contato:"85 9.99606-0802"},
  {categoria:'Futevolei',nome_torneio:'1° Copa Futevolei vale acarau ',data:'19/12/21 ', nivel:'Indefinido',local:' Sobral Arena futshow',contato:"88 9.99659-0835"},



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
