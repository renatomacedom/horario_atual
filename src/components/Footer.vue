<template>
  <div class="footer">
    <a href="http://www.torneionapraia.com.br" target="_blank">Torneio na praia</a>
    <br>
    <br>
    <!-- <a href="http://www.torneionapraia.com.br" target="_blank">Apoiado por Arena MM</a> -->
      <!-- <img src="../assets/logo_branca.png" />
       Falco Desenvolvimento de Websites -->
    </div>


  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: 'Teste'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  text-align: center;
  background-color: #4F5D75;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3%;
  padding-bottom: 3%;
  color: #F5F5F5;

}

h3 {
  margin: 40px 0 0;
}
ul {
}
li {
}
a {
  text-decoration: none;
  color: #F5F5F5;
}
img {
  margin-right: 1rem;
  width: 2.3rem;
}
</style>
