<template>
  <v-card class="card">
    <v-text-field
      v-model="technology1"
      label="使用技術 / Technology"
      append-icon="mdi-plus"
      class="card__field"
      @click:append="addTechnologyField"
    ></v-text-field>
    <v-text-field
      v-if="technologyField1"
      v-model="technology2"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="technologyField2"
      v-model="technology3"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="technologyField3"
      v-model="technology4"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="technologyField4"
      v-model="technology5"
      class="card__field"
    ></v-text-field>
    <v-text-field
      v-if="technologyField5"
      v-model="technology6"
      class="card__field"
    ></v-text-field>
  </v-card>
</template>

<script>
export default {
  props: {
    technology1: String,
    technology2: String,
    technology3: String,
    technology4: String,
    technology5: String,
    technology6: String,
  },
  data() {
    return {
      technologyField1: false,
      technologyField2: false,
      technologyField3: false,
      technologyField4: false,
      technologyField5: false,
    }
  },
  methods: {
    addTechnologyField() {
      if (this.technologyField1 === false) {
        this.technologyField1 = true
      } else if (this.technologyField2 === false) {
        this.technologyField2 = true
      } else if (this.technologyField3 === false) {
        this.technologyField3 = true
      } else if (this.technologyField4 === false) {
        this.technologyField4 = true
      } else if (this.technologyField5 === false) {
        this.technologyField5 = true
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
