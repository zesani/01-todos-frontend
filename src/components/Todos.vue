<template>
  <div>
  <div id="test">
     <div class="handle" v-for="(todo, index) in todos" :key="todo">
      <b-field class="is-pulled-left"  >
        <b-checkbox size="is-large" @input="changeTodoComputed({ index, value: $event })" :value="todo.completed">{{ todo.title }}</b-checkbox>
      </b-field>
      <a class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sortable from 'sortablejs'
export default {
  computed: {
    ...mapGetters(['todos'])
  },
  mounted () {
    let el = document.getElementById('test')
    Sortable.create(el, { handle: '.handle', onUpdate: this.onUpdate, animation: 150 })
  },
  methods: {
    ...mapActions(['changeTodoComputed', 'sortTo']),
    onUpdate: function (event) {
      this.sortTo({ newIndex: event.newIndex, oldIndex: event.oldIndex })
    }
  },
  watch: {
    todos: {
      handler (val) {
        localStorage.setItem('todos', JSON.stringify(val))
      },
      deep: true
    }
  }
}
</script>
