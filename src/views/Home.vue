<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
  <br>
  <span id="hora">{{hora}}</span>
  <HelloWorld msg="Essa é a versão Digital" />
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      horario: null,
    }

  },

  mounted() {
    setInterval(myTimer, 60);

    function myTimer() {
      var dia_atual = new Date();
      // não consegui remover o innerhtml usando o vue js, pois não consegui a conexão dentro do mounted com o html
      document.getElementById("hora").innerHTML = dia_atual.toLocaleTimeString() + '';
    }


    /*
    colocando o valor das horas na marra, visto que não sabia da existencia do "toLocaleTimeString()"
          setInterval(relogio,60);
          // Progamação do relógio
          function relogio(){
            var dia_atual = new Date();
            if (dia_atual.getSeconds() > 10) {
              this.horario = dia_atual.getHours() +':'+ dia_atual.getMinutes()+':'+ dia_atual.getSeconds();
            }else {
              this.horario = dia_atual.getHours() +':'+ dia_atual.getMinutes()+':'+ '0' + dia_atual.getSeconds();
            }
          }
    */
  }
};
</script>
<style>
.centralizando {
  align-items: center;
  width: 100%;
  background-color: red;
}

span {

  text-align: center;
  font-size: 65pt;
  font-family: clockicons, Electrolize, Iceberg, sans-serif;
}

h2 {
  font-size: 65pt;
}
</style>
