<template>
  <div>
    <b-field v-for="todo in todos" :key="todo.title">
      <b-checkbox size="is-large">{{ todo.title }}</b-checkbox>
    </b-field>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos'])
  }
}
</script>
