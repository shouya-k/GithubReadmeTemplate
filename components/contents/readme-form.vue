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

      <BuildField
        :buildSetup1="form.buildSetup1"
        :buildSetup2="form.buildSetup2"
        :buildSetup3="form.buildSetup3"
        :buildSetup4="form.buildSetup4"
        :buildSetup5="form.buildSetup5"
        :buildSetup6="form.buildSetup6"
      ></BuildField>

      <TechnologyField
        :technology1="form.technology1"
        :technology2="form.technology2"
        :technology3="form.technology3"
        :technology4="form.technology4"
        :technology5="form.technology5"
        :technology6="form.technology6"
      ></TechnologyField>

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
import BuildField from '~/components/parts/build-text-field'
import TechnologyField from '~/components/parts/technology-text-field'
export default {
  components: {
    BuildField,
    TechnologyField,
  },
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
    }
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
</style>
