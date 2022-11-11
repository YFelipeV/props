Vue.component('Padre',{
  template://html
  `
  <div class="p-5 bg-dark text-white">
  <h2>componente padre:{{numeroPadre}}</h2>
  <button class="btn btn-danger" @click="numeroPadre++">+</button>
  <hijo :numero="numeroPadre"></hijo>
  </div>
  `,
  data() {
    return {
        numeroPadre:0  
    }
  },  
})