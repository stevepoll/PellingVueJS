<template>
  <div class="add-smoothie container">
    <h2 v-if="editMode" class="center-align indigo-text">Edit Smoothie Recipe</h2>
    <h2 v-else class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="addEditSmoothie(editMode)">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(ing, index) in ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="newIngredient">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button v-if="editMode" class="btn pink">Update Smoothie</button>
        <button v-else class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>


<script>
import db from '@/firebase/init'

export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: null,
      ingredients: [],
      slug: null,
      newIngredient: null,
      feedback: null,
      editMode: false,
      smoothieId: null
    }
  },
  created() {
    if (this.$route.params.smoothie_slug) {
      this.editMode = true
      const ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.title = doc.data().title
          this.slug = doc.data().slug
          this.ingredients = doc.data().ingredients
          this.smoothieId = doc.id
        })
      })
    } 
  },
  methods: {
    addEditSmoothie(edit) {
      if (this.title) {
        if (edit) {
          db.collection('smoothies').doc(this.smoothieId).update({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slugify(this.title)
          })
          .then(() => {
            this.$router.push({name: 'Home'})
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          db.collection('smoothies').add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slugify(this.title)
          })
          .then(() => {
            this.$router.push({name: 'Home'})
          })
          .catch(err => {
            console.log(err)
          })
        }
        this.feedback = null
      } else {
        this.feedback = 'You must enter a smoothie title'
      }
    },
    editSmoothie() {
      if (this.title) {
        
        this.feedback = null
      } else {
        this.feedback = 'You must enter a smoothie title'
      }
    },
    slugify(str) {
      return str.toLowerCase().replace(/\s+/g, '-')
    },
    addIng() {
      if (this.newIngredient) {
        this.ingredients.push(this.newIngredient)
        this.newIngredient = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add an ingredient'
      }
    },
    deleteIng(ing) {
      this.ingredients = this.ingredients.filter(ingredient => {
        return ingredient !== ing
      })
    }
  }
}
</script>


<style scoped>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
