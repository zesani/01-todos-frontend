<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <b-field>
              <b-input placeholder="What needs to be done?"
                type="text"
                icon="check"
                size="is-large">
              </b-input>
            </b-field>

            <br>

            <b-field>
              <b-checkbox size="is-large">Large</b-checkbox>
            </b-field>

            <b-field>
              <b-checkbox size="is-large">Large</b-checkbox>
            </b-field>

            <hr>

            <p class="is-pulled-left">3 items left</p>
            
            <b-field class="is-pulled-right">
              <b-radio-button v-model="radioButton"
                native-value="all">
                <span>All</span>
              </b-radio-button>

              <b-radio-button v-model="radioButton"
                native-value="active">
                <span>Active</span>
              </b-radio-button>

              <b-radio-button v-model="radioButton"
                native-value="completed">
                <span>Completed</span>
              </b-radio-button>
            </b-field>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
</style>
