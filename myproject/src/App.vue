 <template>
  <div id="app">
    <HelloWorld />
    <Navbar />
    <Blogs />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navbar,
    Blogs
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
