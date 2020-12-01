<template>
  <div class="form">
    <v-btn class="form__title" @click="toggleSample">
      サンプルを
      <span v-if="sample" style="cursor: pointer">非表示</span>
      <span v-else style="cursor: pointer">表示</span>
    </v-btn>
    <v-card v-if="sample" class="sample">
      <v-form ref="form">
        <v-text-field
          v-model="form.name"
          label="プロジェクト名前 / Project Title"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="form.overview"
          label="プロジェクトの概要 / Overview"
          readonly
        ></v-text-field>
        <div class="form__images">
          <v-file-input
            accept="image/*"
            label="スクショ画像 1"
            disabled
          ></v-file-input>
          <v-file-input
            accept="image/*"
            label="スクショ画像 2"
            disabled
          ></v-file-input>
          <v-file-input
            accept="image/*"
            label="スクショ画像 3"
            disabled
          ></v-file-input>
        </div>
        <v-text-field
          v-model="form.url"
          label="リリースURL / Demo URL"
          readonly
        ></v-text-field>
        <v-card class="card">
          <v-text-field
            v-model="form.buildSetup1"
            label="ローカル実行方法 / Build Setup"
            append-icon="mdi-plus"
            class="card__field"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.buildSetup2"
            class="card__field"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.buildSetup3"
            class="card__field"
            readonly
          ></v-text-field>
        </v-card>

        <v-card class="card">
          <v-text-field
            v-model="form.technology1"
            label="使用技術 / Technology"
            append-icon="mdi-plus"
            class="card__field"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.technology2"
            class="card__field"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.technology3"
            class="card__field"
            readonly
          ></v-text-field>
        </v-card>

        <v-text-field
          v-model="form.author"
          label="著者 / Author"
          readonly
        ></v-text-field>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sample: false,
      form: {
        name: 'Github README Template',
        overview:
          'GithubのREADMEを作成するサイトです。入力フォームの内容を入力する事でマークダウンされたコードを作成できます。',
        img1: null,
        img2: null,
        img3: null,
        url: 'http://localhost:3000/form',
        buildSetup1:
          'git clone https://github.com/shouya-k/nuxt-amplify-webapp.git',
        buildSetup2: 'yarn install',
        buildSetup3: 'yarn dev',
        technology1: 'Nuxt.js',
        technology2: 'Vuetify',
        technology3: 'AWS Amplify',
        author: 'shouya.kousuge',
      },
    }
  },
  methods: {
    toggleSample() {
      this.sample = !this.sample
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  width: 35%;
  margin: 15px;

  &__title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  }

  &__images {
    display: flex;
  }

  &__btn {
    display: block;
    margin: 0 auto;
  }
}

.sample {
  padding: 20px;
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
