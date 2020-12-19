<template>
  <div v-show="edit.editModal">
    <v-card class="modal">
      <v-form ref="formRules" class="form">
        <v-text-field
          v-model="readme.name"
          label="プロジェクト名前 / Project Title"
          :rules="[required, counter]"
          counter="25"
        ></v-text-field>
        <v-text-field
          v-model="readme.overview"
          label="プロジェクトの概要 / Overview"
          :rules="[required]"
        ></v-text-field>
        <div class="form__images">
          <v-text-field
            v-model="readme.img1"
            label="スクショ画像 1"
            prepend-icon="fa-paperclip"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            v-model="readme.img2"
            label="スクショ画像 2"
            prepend-icon="fa-paperclip"
          ></v-text-field>
          <v-text-field
            v-model="readme.img3"
            label="スクショ画像 3"
            prepend-icon="fa-paperclip"
          ></v-text-field>
        </div>
        <v-text-field
          v-model="readme.url"
          label="リリースURL / Demo URL"
          :rules="[required]"
        ></v-text-field>

        <v-card class="card">
          <v-text-field
            v-model="readme.buildSetup1"
            label="ローカル実行方法 / Build Setup"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.buildSetup2"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.buildSetup3"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.buildSetup4"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.buildSetup5"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.buildSetup6"
            class="card__field"
          ></v-text-field>
        </v-card>

        <v-card class="card">
          <v-text-field
            v-model="readme.technology1"
            label="使用技術 / Technology"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.technology2"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.technology3"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.technology4"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.technology5"
            class="card__field"
          ></v-text-field>
          <v-text-field
            v-model="readme.technology6"
            class="card__field"
          ></v-text-field>
        </v-card>

        <v-text-field
          v-model="readme.author"
          label="著者 / Author"
          :rules="[required]"
        ></v-text-field>
        <v-btn class="form__btn" color="primary" @click="updatedReadme"
          >更新する</v-btn
        >
      </v-form>
    </v-card>
    <div class="modal__bg" @click="hiddenModal"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { API } from 'aws-amplify'
// import { getReadme } from '../../graphql/queries'
import { updateReadme } from '../../graphql/mutations'
export default defineComponent({
  props: {
    edit: {},
    readme: {},
  },
  setup(props, context) {
    const hiddenModal = () => {
      context.emit('hiddenModal', props.edit)
    }

    const formRules = ref()
    const max = ref(25)
    const required = ref((value: string) => !!value || '必ず入力してください。')
    const counter = ref(
      (value: string) =>
        (!!value && max.value >= value.length) ||
        `${max.value}文字以下で入力してください。`
    )

    const updatedReadme = async () => {
      if (formRules.value.validate()) {
        try {
          await API.graphql({
            query: updateReadme,
            variables: {
              input: props.readme,
            },
          })
          hiddenModal()
        } catch (error) {
          console.log(error)
        }
      }
    }

    return {
      formRules,
      required,
      counter,
      hiddenModal,
      updatedReadme,
    }
  },
})
</script>

<style lang="scss" scoped>
.form {
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

.modal {
  width: 50%;
  margin: 20px auto;
  padding: 30px 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

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
