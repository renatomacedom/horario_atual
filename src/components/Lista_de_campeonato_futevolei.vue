<template lang="html">
  <div >
<title>Campeonatos de Futevolei</title>
<ul v-for="campeonato in info" class="card">
  {{campeonato.data}} {{campeonato.categoria}} {{campeonato.nome_torneio}} {{campeonato.nivel}} {{campeonato.local}} Tel :{{campeonato.contato}}</ul>
  <a href="https://www.mmsociety.com.br" target="_blank">Conheça a Arena MM</a>
  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_futevolei',
  data(){

  return{
  info:[
     {categoria:'Futevolei',nome_torneio:'1° Copa Futêvolei Mucuripe ',data:'16/12/21 a 18/12/21 ', nivel:'Iniciante a avançado',local:'Fortaleza',contato:"85 9.9913-5500"},
     {categoria:'Futevolei',nome_torneio:'Arena Cidade ',data:'18/12/21', nivel:'Iniciante',local:'Fortaleza',contato:"85 9.99606-0802"},
     {categoria:'Futevolei',nome_torneio:'1° Copa Futevolei vale acarau ',data:'19/12/21 ', nivel:'Indefinido',local:' Sobral Arena futshow',contato:"88 9.99659-0835"},

],
historico:[

  {categoria:'Futevolei',nome_torneio:'1° Torneio MM Arena Futêvolei ',data:'20/11/21 ', nivel:'Iniciante',local:'Fortaleza',contato:"85 9.9969-7003"},
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
