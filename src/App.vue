<template>
  <div id="app">
    <todos-app/>
  </div>
</template>

<script>
import TodosApp from '@/components/TodosApp'

export default {
  name: 'app',
  components: {
    TodosApp
  }
}
</script>
