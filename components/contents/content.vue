<template>
  <div>
    <v-card class="card">
      <v-card-title>Github README Template</v-card-title>
      <v-layout>
        <v-card-text>作成日: 2020/11/30 16:04</v-card-text>
        <v-btn class="card__btn" @click="showModal">詳細</v-btn>
      </v-layout>
    </v-card>
    <div v-show="modal">
      <v-card class="modal">
        <v-card-text>{{ '#' + name }}</v-card-text>
        <v-card-text>## プロジェクト概要 / Overview</v-card-text>
        <v-card-text>{{ overview }}</v-card-text>
        <v-card-text>{{ image(img1) }}</v-card-text>
        <v-card-text>{{ image(img2) }}</v-card-text>
        <v-card-text>{{ image(img3) }}</v-card-text>
        <v-card-text>## リリースURL / Demo URL</v-card-text>
        <v-card-text>{{ url }}</v-card-text>
        <v-card-text>## ローカル実行方法 / Build Setup</v-card-text>
        <v-card-text>{{ '```' }}</v-card-text>
        <pre><v-card-text class="modal__pre">{{ '$ ' + build1 }}</v-card-text> </pre>
        <pre><v-card-text class="modal__pre">{{ '$ ' + build2 }}</v-card-text> </pre>
        <pre><v-card-text class="modal__pre">{{ '$ ' + build3 }}</v-card-text> </pre>
        <v-card-text>{{ '```' }}</v-card-text>
        <v-card-text>## 使用技術 / Technology</v-card-text>
        <pre><v-card-text class="modal__pre">{{ '* ' + technology1 }}</v-card-text> </pre>
        <pre><v-card-text class="modal__pre">{{ '* ' + technology2 }}</v-card-text> </pre>
        <pre><v-card-text class="modal__pre">{{ '* ' + technology3 }}</v-card-text> </pre>
        <v-card-text>## 著者 / Author</v-card-text>
        <v-card-text class="modal__pre">{{ author }}</v-card-text>
        <v-btn class="modal__btn" @click="hiddenModal">閉じる</v-btn>
      </v-card>
      <div class="modal__bg" @click="hiddenModal"></div>
    </div>

    <v-card class="card">
      <v-card-title>Github README Template</v-card-title>
      <v-layout>
        <v-card-text>作成日: 2020/11/30 16:04</v-card-text>
        <v-btn class="card__btn">詳細</v-btn>
      </v-layout>
    </v-card>

    <v-card class="card">
      <v-card-title>Github README Template</v-card-title>
      <v-layout>
        <v-card-text>作成日: 2020/11/30 16:04</v-card-text>
        <v-btn class="card__btn">詳細</v-btn>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      name: 'Github README Template',
      overview: 'Github READMEのテンプレートを作れるアプリです。',
      img1:
        'https://user-images.githubusercontent.com/65233189/100417121-7e42e000-30c3-11eb-840b-4fe5a3666e0d.png',
      img2:
        'https://user-images.githubusercontent.com/65233189/100417121-7e42e000-30c3-11eb-840b-4fe5a3666e0d.png',
      img3:
        'https://user-images.githubusercontent.com/65233189/100417121-7e42e000-30c3-11eb-840b-4fe5a3666e0d.png',
      url: 'http://localhost:3000/form',
      build1: 'git clone https://github.com/shouya-k/nuxt-amplify-webapp.git',
      build2: 'yarn install',
      build3: 'yarn dev',
      technology1: 'nuxt.js',
      technology2: 'vuetify',
      technology3: 'AWS Amplify',
      author: 'shouya.kousuge',
    }
  },
  methods: {
    showModal() {
      this.modal = true
    },
    hiddenModal() {
      this.modal = false
    },
    image(img) {
      const url = img
      return `<img src="${url}" alt="attach:cat" title="attach:cat" width="800">`
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 30%;
  padding: 10px;
  margin: 40px auto;

  &__btn {
    display: block;
    margin: auto 0;
  }
}

.modal {
  width: 50%;
  margin: 10px auto;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;

  &__pre {
    padding: 0 20px;
  }

  &__bg {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }

  &__btn {
    display: block;
    margin-left: auto;
  }
}
</style>
