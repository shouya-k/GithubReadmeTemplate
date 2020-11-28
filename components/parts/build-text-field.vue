<template>
  <v-card class="card">
    <v-text-field
      v-model="buildSetup1"
      label="ローカル実行方法 / Build Setup"
      append-icon="mdi-plus"
      class="card__field"
      @click:append="addBuildField"
    ></v-text-field>
    <v-text-field
      v-if="buildField1"
      v-model="buildSetup2"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="buildField2"
      v-model="buildSetup3"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="buildField3"
      v-model="buildSetup4"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="buildField4"
      v-model="buildSetup5"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="buildField5"
      v-model="buildSetup6"
      class="card__field"
    ></v-text-field>
  </v-card>
</template>

<script>
export default {
  props: {
    buildSetup1: String,
    buildSetup2: String,
    buildSetup3: String,
    buildSetup4: String,
    buildSetup5: String,
    buildSetup6: String,
  },
  data() {
    return {
      buildField1: false,
      buildField2: false,
      buildField3: false,
      buildField4: false,
      buildField5: false,
    }
  },
  methods: {
    addBuildField() {
      if (this.buildField1 === false) {
        this.buildField1 = true
      } else if (this.buildField2 === false) {
        this.buildField2 = true
      } else if (this.buildField3 === false) {
        this.buildField3 = true
      } else if (this.buildField4 === false) {
        this.buildField4 = true
      } else if (this.buildField5 === false) {
        this.buildField5 = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding-top: 10px;
  margin-bottom: 20px;

  &__field {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
