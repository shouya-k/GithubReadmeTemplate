<template>
  <v-card>
    <v-card-text># GitHub README Template</v-card-text>
    <v-card-text>## プロジェクト概要 / Overview</v-card-text>
    <v-card-text
      >Github README.meのテンプレートを作成できるWebアプリです。
      アプリの作成フォームから各項目を入力する事で簡単にマークダウンされたコードを作成できます。</v-card-text
    >
    <v-card-text>{{ img }}</v-card-text>
    <v-card-text>{{ img }}</v-card-text>
    <v-card-text>{{ img }}</v-card-text>

    <v-card-text>## リリースURL / Demo URL</v-card-text>
    <v-card-text>{{ url }}</v-card-text>
    <v-card-text>## ローカル実行方法 / Build Setup</v-card-text>
    <v-card-text>{{ build }}</v-card-text>
    <v-card-text style="white-space: pre-wrap; word-wrap: break-word">{{
      text
    }}</v-card-text>
    <v-card-text>{{ build }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      img:
        '<img width="1440" alt="スクリーンショット 2020-11-27 14 57 50" src="https://user-images.githubusercontent.com/65233189/100417121-7e42e000-30c3-11eb-840b-4fe5a3666e0d.png">',
      url: 'https://nuxt-website01-9fe05.web.app/',
      build: `\` \` \``,
      text: `$ git clone  
$ yarn install  
$ yarn dev
            `,
    }
  },
}
</script>

<style lang="scss" scoped></style>
