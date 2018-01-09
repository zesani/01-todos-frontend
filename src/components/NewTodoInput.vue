<template>
  <b-field>
    <b-input placeholder="What needs to be done?"
      type="text"
      icon="check"
      size="is-large"
      v-model="newTodo"
      @keyup.native.enter="addTodoAndClearNewTodo">
    </b-input>
  </b-field>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    addTodoAndClearNewTodo () {
      this.addTodo(this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>
