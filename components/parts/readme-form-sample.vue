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
          <v-text-field
            v-model="form.img1"
            label="スクショ画像 1"
            prepend-icon="fa-paperclip"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.img2"
            label="スクショ画像 2"
            prepend-icon="fa-paperclip"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.img3"
            label="スクショ画像 3"
            prepend-icon="fa-paperclip"
            readonly
          ></v-text-field>
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
import { reactive, ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const form = reactive({
      name: 'Github README Template',
      overview:
        'GithubのREADMEを作成するサイトです。入力フォームの内容を入力する事でマークダウンされたコードを作成できます。',
      img1:
        'https://user-images.githubusercontent.com/65233189/100745066-132a3e00-3422-11eb-8882-5149dc678a6b.png"',
      img2:
        'https://user-images.githubusercontent.com/65233189/100745118-25a47780-3422-11eb-9123-542f76ea5316.png',
      img3:
        'https://user-images.githubusercontent.com/65233189/100745155-35bc5700-3422-11eb-899d-b85d19572974.png',
      url: 'https://dev.d1nqlyqhms5obl.amplifyapp.com/',
      buildSetup1:
        'git clone https://github.com/shouya-k/nuxt-amplify-webapp.git',
      buildSetup2: 'yarn install',
      buildSetup3: 'yarn dev',
      technology1: 'Nuxt.js',
      technology2: 'Vuetify',
      technology3: 'AWS Amplify',
      author: 'shouya.kousuge',
    })

    const sample = ref(false)

    // setup内でrefを扱う際はvalueの付け忘れに注意
    const toggleSample = () => {
      sample.value = !sample.value
    }

    return {
      form,
      sample,
      toggleSample,
    }
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
