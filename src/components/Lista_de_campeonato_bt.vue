<template lang="html">
  <div >


  <li>
<ul v-for="campeonato in info" class="card">
  {{campeonato.data}} {{campeonato.categoria}} {{campeonato.nome_torneio}} {{campeonato.nivel}} {{campeonato.local}}</ul>
  </li>
  <a href="https://www.mmsociety.com.br">Conheça a MM society</a>
  </div>
</template>

<script>
export default {
  name: 'Lista_de_campeonato_bt',
  data(){

  return{
  info:[
  {categoria:'bt',nome_torneio:'2° Preá Beach Tennis ',data:'12/09/21 a 15/09/21', nivel:'Iniciante,c,b,a,pro,+40,+50(Masculino,feminino e misto)',local:'Preá-ce'}

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
height: 100%;
}

a{
  color: black;
  width: auto;

}

</style>
