<template>
  <div>
    <div v-for="readme in readmes" :key="readme.id">
      <v-card class="card">
        <v-card-title
          ><v-btn :href="readme.url" icon><v-icon>fa-link</v-icon></v-btn
          >{{ readme.name }}</v-card-title
        >
        <v-layout>
          <v-card-text>{{
            '作成日: ' + readme.createdAt.replace('T', ' ').slice(0, 19)
          }}</v-card-text>
          <v-btn class="card__btn" @click="showModal(readme)">詳細</v-btn>
        </v-layout>
      </v-card>
      <div v-show="readme.modal">
        <v-card class="modal">
          <v-card-text>{{ '# ' + readme.name }}</v-card-text>
          <v-card-text>## プロジェクト概要 / Overview</v-card-text>
          <v-card-text>{{ readme.overview }}</v-card-text>
          <v-card-text>{{ image(readme.img1) }}</v-card-text>
          <v-card-text v-show="readme.img2 !== ''">{{
            image(readme.img2)
          }}</v-card-text>
          <v-card-text v-show="readme.img3 !== ''">{{
            image(readme.img3)
          }}</v-card-text>
          <v-card-text>## リリースURL / Demo URL</v-card-text>
          <v-card-text>{{ readme.url }}</v-card-text>
          <div v-show="readme.buildSetup1 !== ''">
            <v-card-text>## ローカル実行方法 / Build Setup</v-card-text>
            <v-card-text>{{ '```' }}</v-card-text>
            <pre
              v-show="readme.buildSetup1 !== ''"
            ><v-card-text class="modal__pre">{{ '$ ' + readme.buildSetup1 }}</v-card-text> </pre>
            <pre
              v-show="readme.buildSetup2 !== ''"
            ><v-card-text class="modal__pre">{{ '$ ' + readme.buildSetup2 }}</v-card-text> </pre>
            <pre
              v-show="readme.buildSetup3 !== ''"
            ><v-card-text class="modal__pre">{{ '$ ' + readme.buildSetup3 }}</v-card-text> </pre>
            <pre
              v-show="readme.buildSetup4 !== ''"
            ><v-card-text class="modal__pre">{{ '$ ' + readme.buildSetup4 }}</v-card-text> </pre>
            <pre
              v-show="readme.buildSetup5 !== ''"
            ><v-card-text class="modal__pre">{{ '$ ' + readme.buildSetup5 }}</v-card-text> </pre>
            <pre
              v-show="readme.buildSetup6 !== ''"
            ><v-card-text class="modal__pre">{{ '$ ' + readme.buildSetup6 }}</v-card-text> </pre>
            <v-card-text>{{ '```' }}</v-card-text>
          </div>
          <div v-show="readme.technology1 !== ''">
            <v-card-text>## 使用技術 / Technology</v-card-text>
            <pre
              v-show="readme.technology1 !== ''"
            ><v-card-text class="modal__pre">{{ '* ' + readme.technology1 }}</v-card-text> </pre>
            <pre
              v-show="readme.technology2 !== ''"
            ><v-card-text class="modal__pre">{{ '* ' + readme.technology2 }}</v-card-text> </pre>
            <pre
              v-show="readme.technology3 !== ''"
            ><v-card-text class="modal__pre">{{ '* ' + readme.technology3 }}</v-card-text> </pre>
            <pre
              v-show="readme.technology4 !== ''"
            ><v-card-text class="modal__pre">{{ '* ' + readme.technology4 }}</v-card-text> </pre>
            <pre
              v-show="readme.technology5 !== ''"
            ><v-card-text class="modal__pre">{{ '* ' + readme.technology5 }}</v-card-text> </pre>
            <pre
              v-show="readme.technology6 !== ''"
            ><v-card-text class="modal__pre">{{ '* ' + readme.technology6 }}</v-card-text> </pre>
          </div>
          <v-card-text>## 著者 / Author</v-card-text>
          <v-card-text class="modal__pre">{{ readme.author }}</v-card-text>
          <v-btn class="modal__btn" @click="hiddenModal(readme)">閉じる</v-btn>
        </v-card>
        <div class="modal__bg" @click="hiddenModal(readme)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { listReadmes } from '~/graphql/queries'
export default {
  data() {
    return {
      readmes: [],
    }
  },
  async created() {
    await this.getReadmes()
  },
  methods: {
    showModal(readme) {
      readme.modal = true
    },
    hiddenModal(readme) {
      readme.modal = false
    },
    image(img) {
      const url = img
      return `<img src="${url}" alt="attach:cat" title="attach:cat" width="800">`
    },
    async getReadmes() {
      const readmes = await API.graphql({
        query: listReadmes,
      })
      this.readmes = readmes.data.listReadmes.items
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
