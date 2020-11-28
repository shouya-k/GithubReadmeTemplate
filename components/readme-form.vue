<template>
  <div class="form">
    <h1 class="form__title">README Template 作成</h1>
    <v-form ref="form">
      <v-text-field
        v-model="form.name"
        label="プロジェクト名前 / Project Title"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.overview"
        label="プロジェクトの概要 / Overview"
        required
      ></v-text-field>
      <div class="form__images">
        <v-file-input
          v-model="form.img1"
          accept="image/*"
          label="スクショ画像 1"
        ></v-file-input>
        <v-file-input
          v-model="form.img2"
          accept="image/*"
          label="スクショ画像 2"
        ></v-file-input>
        <v-file-input
          v-model="form.img3"
          accept="image/*"
          label="スクショ画像 3"
        ></v-file-input>
      </div>
      <v-text-field
        v-model="form.url"
        label="リリースURL / Demo URL"
      ></v-text-field>
      <v-card class="card">
        <v-text-field
          v-model="form.buildSetup1"
          label="ローカル実行方法 / Build Setup"
          append-icon="mdi-plus"
          class="card__field"
          @click:append="addBuildField"
        ></v-text-field>
        <v-text-field
          v-if="buildField1"
          v-model="form.buildSetup2"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="buildField2"
          v-model="form.buildSetup3"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="buildField3"
          v-model="form.buildSetup4"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="buildField4"
          v-model="form.buildSetup5"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="buildField5"
          v-model="form.buildSetup6"
          class="card__field"
        ></v-text-field>
      </v-card>

      <v-card class="card">
        <v-text-field
          v-model="form.technology1"
          label="使用技術 / Technology"
          append-icon="mdi-plus"
          class="card__field"
          @click:append="addTechnologyField"
        ></v-text-field>
        <v-text-field
          v-if="technologyField1"
          v-model="form.technology2"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technologyField2"
          v-model="form.technology3"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technologyField3"
          v-model="form.technology4"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technologyField4"
          v-model="form.technology5"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technologyField5"
          v-model="form.technology6"
          class="card__field"
        ></v-text-field>
      </v-card>

      <v-text-field
        v-model="author"
        label="著者 / Author"
        required
      ></v-text-field>
      <v-btn class="form__btn" color="primary">作成する</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        overview: '',
        img1: null,
        img2: null,
        img3: null,
        url: '',
        buildSetup1: '',
        buildSetup2: '',
        buildSetup3: '',
        buildSetup4: '',
        buildSetup5: '',
        buildSetup6: '',
        technology1: '',
        technology2: '',
        technology3: '',
        technology4: '',
        technology5: '',
        technology6: '',
        author: '',
      },
      buildField1: false,
      buildField2: false,
      buildField3: false,
      buildField4: false,
      buildField5: false,
      technologyField1: false,
      technologyField2: false,
      technologyField3: false,
      technologyField4: false,
      technologyField5: false,
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
.form {
  width: 40%;
  margin: 0 auto 30px;

  &__title {
    text-align: center;
    margin: 20px 0;
  }

  &__images {
    display: flex;
  }

  &__btn {
    display: block;
    margin: 0 auto;
  }
}

.card {
  padding-top: 10px;
  margin-bottom: 20px;

  &__field {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
