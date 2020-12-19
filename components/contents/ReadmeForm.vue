<template>
  <v-card class="form">
    <h1 class="form__title">README Template 作成</h1>
    <v-form ref="formRules">
      <v-text-field
        v-model="form.name"
        label="プロジェクト名前 / Project Title"
        :rules="[required, counter]"
        counter="25"
      ></v-text-field>
      <v-text-field
        v-model="form.overview"
        label="プロジェクトの概要 / Overview"
        :rules="[required]"
      ></v-text-field>
      <div class="form__images">
        <v-text-field
          v-model="form.img1"
          label="スクショ画像 1"
          prepend-icon="fa-paperclip"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="form.img2"
          label="スクショ画像 2"
          prepend-icon="fa-paperclip"
        ></v-text-field>
        <v-text-field
          v-model="form.img3"
          label="スクショ画像 3"
          prepend-icon="fa-paperclip"
        ></v-text-field>
      </div>
      <v-text-field
        v-model="form.url"
        label="リリースURL / Demo URL"
        :rules="[required]"
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
          v-if="build1"
          v-model="form.buildSetup2"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="build2"
          v-model="form.buildSetup3"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="build3"
          v-model="form.buildSetup4"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="build4"
          v-model="form.buildSetup5"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="build5"
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
          v-if="technology1"
          v-model="form.technology2"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technology2"
          v-model="form.technology3"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technology3"
          v-model="form.technology4"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technology4"
          v-model="form.technology5"
          class="card__field"
        ></v-text-field>
        <v-text-field
          v-if="technology5"
          v-model="form.technology6"
          class="card__field"
        ></v-text-field>
      </v-card>

      <v-text-field
        v-model="form.author"
        label="著者 / Author"
        :rules="[required]"
      ></v-text-field>
      <v-btn class="form__btn" color="primary" @click="createdReadme"
        >作成する</v-btn
      >
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { reactive, ref, toRefs, defineComponent } from '@nuxtjs/composition-api'
import { API, Auth } from 'aws-amplify'
import { createReadme } from '~/graphql/mutations'
import { searchUsers } from '~/graphql/queries'
import { addTextField } from '~/conpositions/useAddTextField'
export default defineComponent({
  setup(props, context) {
    // const router = context.root.$router

    const { field, addBuildField, addTechnologyField } = addTextField()

    const form = reactive({
      readmeUserId: '',
      name: '',
      overview: '',
      img1: '',
      img2: '',
      img3: '',
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
      modal: false,
      editModal: false,
    })

    const formRules = ref()
    const max = ref(25)
    const required = ref((value: string) => !!value || '必ず入力してください。')
    const counter = ref(
      (value: string) =>
        (!!value && max.value >= value.length) ||
        `${max.value}文字以下で入力してください。`
    )

    const getUserId = async () => {
      const user = await Auth.currentAuthenticatedUser()
      const data: any = await API.graphql({
        query: searchUsers,
        variables: {
          filter: {
            uid: {
              match: user.attributes.sub,
            },
          },
        },
      })
      form.readmeUserId = data.data.searchUsers.items[0].id
    }

    getUserId()

    const createdReadme = async (): Promise<void> => {
      if (formRules.value.validate()) {
        try {
          await API.graphql({
            query: createReadme,
            variables: {
              input: form,
            },
          })
          location.replace('/')
        } catch (error) {
          console.log(error)
        }
      }
    }

    return {
      form,
      formRules,
      required,
      counter,
      createdReadme,
      ...toRefs(field),
      addBuildField,
      addTechnologyField,
    }
  },
})
</script>

<style lang="scss" scoped>
.form {
  width: 70%;
  padding: 20px 30px;
  margin-top: 20px;

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
