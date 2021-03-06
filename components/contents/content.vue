<template>
  <div>
    <div v-for="readme in readmes" :key="readme.id">
      <v-card class="card">
        <div>
          <v-layout class="card__profile">
            <v-img :src="readme.user.img" class="card__img"></v-img>
            <v-card-text class="card__name">{{ readme.user.name }}</v-card-text>
            <v-menu transition="slide-y-transition" class="card__menu">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="card__profile--btn" icon v-bind="attrs" v-on="on"
                  ><v-icon>fa-ellipsis-v</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item link @click.stop="showEditModal(readme)">
                  <v-list-item-icon>
                    <v-icon dense left>fa-pen</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="subtitle-1"
                    >Update</v-list-item-title
                  >
                </v-list-item>
                <v-dialog v-model="dialog.update" max-width="500px">
                  <v-card>
                    <v-card-title class="headline pt-5"
                      >投稿の編集</v-card-title
                    >
                    <v-card-text class="subtitle-1 py-5"
                      >投稿者しか編集をする事が出来ません。</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text @click.stop="dialog.update = false"
                        >キャンセル</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-list-item
                  link
                  @click.stop="showDeleteDialog(readme.user.uid)"
                >
                  <v-list-item-icon>
                    <v-icon dense left>fa-trash</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="subtitle-1"
                    >Delete</v-list-item-title
                  >
                  <v-dialog v-model="dialog.delete" max-width="500px">
                    <v-card>
                      <v-card-title class="headline pt-5"
                        >投稿を削除</v-card-title
                      >
                      <v-card-text class="subtitle-1 py-5">{{
                        dialog.message
                      }}</v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click.stop="dialog.delete = false"
                          >キャンセル</v-btn
                        >
                        <v-btn
                          v-show="dialog.deleteBtn"
                          text
                          color="red"
                          @click="deleteReadmes(readme)"
                          >削除する</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-layout>
        </div>
        <div class="card__inner">
          <v-card-title class="card__title"
            ><v-btn :href="readme.url" icon><v-icon>fa-link</v-icon></v-btn
            >{{ readme.name }}
          </v-card-title>
          <v-layout>
            <v-card-text
              >{{
                '作成日: ' + readme.createdAt.replace('T', ' ').slice(0, 19)
              }}
            </v-card-text>
            <v-btn class="card__btn" @click="showModal(readme)">詳細</v-btn>
          </v-layout>
        </div>
      </v-card>
      <EditModal
        :edit="readme"
        :readme="editReadme"
        @hiddenModal="hiddenEditModal"
      ></EditModal>
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

<script lang="ts">
import { ref, defineComponent, reactive } from '@nuxtjs/composition-api'
import { API, Auth } from 'aws-amplify'
import { searchReadmes, getReadme } from '../../graphql/queries'
import { deleteReadme } from '../../graphql/mutations'
import EditModal from '~/components/parts/EditContent.vue'
export default defineComponent({
  components: {
    EditModal,
  },
  setup() {
    const readmes = ref([])

    const getReadmes = async () => {
      const readme: any = await API.graphql({
        query: searchReadmes,
        variables: {
          sort: {
            field: 'createdAt',
            direction: 'desc',
          },
          limit: 30,
        },
      })
      readmes.value = readme.data.searchReadmes.items
    }
    getReadmes()

    const showModal = (readme: { modal: boolean }) => (readme.modal = true)

    const hiddenModal = (readme: { modal: boolean }) => (readme.modal = false)

    const image = (img: string) => {
      return `<img src="${img}" alt="attach:cat" title="attach:cat" width="800">`
    }

    const getEditReadme = async (id: string) => {
      const getdata: any = await API.graphql({
        query: getReadme,
        variables: {
          id,
        },
      })
      editReadme.value = getdata.data.getReadme
    }

    const editReadme = ref({})
    const showEditModal = async (readme: {
      user: { uid: string }
      id: string
      editModal: boolean
    }) => {
      const user = await Auth.currentAuthenticatedUser()
      if (readme.user.uid === user.attributes.sub) {
        getEditReadme(readme.id)
        readme.editModal = true
        dialog.update = false
      } else {
        dialog.update = true
      }
    }
    const hiddenEditModal = (readme: { editModal: boolean }) => {
      readme.editModal = false
      getReadmes()
    }

    const dialog = reactive({
      update: false,
      delete: false,
      message: '',
      deleteBtn: false,
    })

    const showDeleteDialog = async (uid: String) => {
      const user = await Auth.currentAuthenticatedUser()
      dialog.delete = true
      if (uid === user.attributes.sub) {
        dialog.message = '本当にこの投稿を削除しますか？'
        dialog.deleteBtn = true
      } else {
        dialog.message = '投稿者しか投稿を削除する事は出来ません。'
        dialog.deleteBtn = false
      }
    }

    const deleteReadmes = async (readme: { id: string }) => {
      try {
        await API.graphql({
          query: deleteReadme,
          variables: {
            input: {
              id: readme.id,
            },
          },
        })
        getReadmes()
        location.reload()
      } catch (error) {
        console.log(error)
      }
    }

    return {
      readmes,
      showModal,
      hiddenModal,
      image,
      deleteReadmes,
      editReadme,
      showEditModal,
      hiddenEditModal,
      dialog,
      showDeleteDialog,
    }
  },
})
</script>

<style lang="scss" scoped>
.card {
  width: 30%;
  margin: 40px auto;

  &__profile {
    background-color: #bdbdbd;

    &--btn {
      margin: auto 15px;
    }
  }

  &__name {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }

  &__img {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(34, 36, 38, 0.15);
    margin: auto 0 auto 10px;
  }

  &__inner {
    padding: 10px;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

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
  z-index: 10;

  &__pre {
    padding: 0 20px;
  }

  &__bg {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 6;
  }

  &__btn {
    display: block;
    margin-left: auto;
  }
}
</style>
