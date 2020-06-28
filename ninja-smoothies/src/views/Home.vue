<template>
  <div class="home container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteItem(smoothie.id)">delete</i>
        <h2 class="indigo-text">
          {{ smoothie.title }}
        </h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{ name: 'EditSmoothie', params: { smoothie_slug: smoothie.slug }}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Home',
  data() {
    return {
      smoothies: []
    }
  },
  methods: {
    deleteItem(s_id) {
      // Delete doc from firestore
      db.collection('smoothies').doc(s_id).delete()
        .then(() => {
          // Delete is locally as well
          this.smoothies = this.smoothies.filter(smoothie => smoothie.id !== s_id )
        })
    }
  },
  components: {
   
  },
  created() {
    // fetch data from the firestore
    db.collection('smoothies').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
        })
      })
  }
}
</script>


<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
h2 {
  font-size: 2em;
  text-align: left;
  margin-top: 0;
}
.ingredients {
  margin: 30px auto; 
}
.ingredients li {
  display: inline-block;
}
i.delete {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>

