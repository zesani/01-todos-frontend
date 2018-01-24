<template>
  <div id="app">
    <todos-app/>
  </div>
</template>

<script>
import TodosApp from '@/components/TodosApp'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    TodosApp
  },
  mounted () {
    let todos = localStorage.getItem('todos')
    if (todos) this.initTodos(JSON.parse(todos))
  },
  methods: {
    ...mapActions(['initTodos'])
  }
}
</script>
