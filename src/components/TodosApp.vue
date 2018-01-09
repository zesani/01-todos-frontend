<template>
  <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <new-todo-input/>
            <br>
            <todos/>
            <hr>
            <todos-footer/>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import NewTodoInput from '@/components/NewTodoInput'
import Todos from '@/components/Todos'
import TodosFooter from '@/components/TodosFooter'

export default {
  components: {
    NewTodoInput,
    Todos,
    TodosFooter
  }
}
</script>
