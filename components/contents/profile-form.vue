<template>
  <v-card class="card mx-auto mt-5" max-width="500">
    <v-card-title><h2 class="card__title pa-2">プロフィール</h2></v-card-title>
    <v-divider class="mb-4"></v-divider>
    <v-img :src="img" class="card__img mb-4"></v-img>
    <v-divider class="mb-4"></v-divider>
    <v-form ref="formRules" class="form">
      <v-text-field
        v-model="username"
        class="form__field"
        label="ユーザー名"
        append-icon="fa-edit"
        prepend-icon="fa-user-circle"
        outlined
        @click:append="updateName"
      ></v-text-field>
      <v-text-field
        v-model="email"
        class="form__field"
        label="メールアドレス"
        append-icon="fa-edit"
        prepend-icon="fa-envelope"
        outlined
      ></v-text-field>
      <v-divider class="mb-4"></v-divider>
      <v-text-field
        v-model="oldPassword"
        :type="showOldPassword ? 'text' : 'password'"
        class="form__field"
        :append-icon="showOldPassword ? 'fa-eye' : 'fa-eye-slash'"
        label="古いパスワード"
        prepend-icon="fa-lock"
        outlined
        height="48px"
        @click:append="showOldPassword = !showOldPassword"
      ></v-text-field>
      <v-text-field
        v-model="newPassword"
        :type="showNewPassword ? 'text' : 'password'"
        class="form__field"
        :append-icon="showNewPassword ? 'fa-eye' : 'fa-eye-slash'"
        label="新しいパスワード"
        prepend-icon="fa-lock"
        outlined
        height="48px"
        @click:append="showNewPassword = !showNewPassword"
      ></v-text-field>
      <v-card-actions>
        <v-btn
          class="info form__btn"
          depressed
          height="40px"
          tile
          @click="changePassword"
          >パスワードを変更</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { Auth } from 'aws-amplify'
import { defineComponent, reactive, ref, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const form = reactive({
      username: '',
      email: '',
      img: '',
      oldPassword: '',
      newPassword: '',
    })

    const showOldPassword = ref(false)
    const showNewPassword = ref(false)

    const changePassword = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        await Auth.changePassword(user, form.oldPassword, form.newPassword)
        alert('パスワードを変更しました。')
      } catch (error) {
        console.log(error)
      }
    }

    const getUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        form.username = user.attributes.nickname
        form.email = user.attributes.email
        form.img = user.attributes.picture
      } catch (error) {
        console.log(error)
      }
    }

    getUser()

    const updateName = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        await Auth.updateUserAttributes(user, {
          nickname: form.username,
        })
      } catch (error) {
        console.log(error)
      }
    }

    return {
      ...toRefs(form),
      showOldPassword,
      showNewPassword,
      changePassword,
      updateName,
    }
  },
})
</script>

<style lang="scss" scoped>
.card {
  &__title {
    margin: 0 auto;
  }

  &__img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid rgba(34, 36, 38, 0.15);
    margin: 0 auto;
  }
}

.form {
  &__field {
    width: 90%;
    margin: 0 auto;
  }

  &__btn {
    display: block;
    font-size: 20px;
    width: 50%;
    margin: 0 auto 20px;
  }
}
</style>
