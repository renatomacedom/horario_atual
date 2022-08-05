<template>
  <div id="app">
    <div id="nav">
      <Nav></Nav>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer'
import Nav from './components/Nav'
export default {
  components: {
    Footer,
    Nav,
  },
}
</script>


<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* color: #2c3e50; */
}
h6{
  font-weight: lighter;
  margin-top: 0px;
}

#nav {

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
