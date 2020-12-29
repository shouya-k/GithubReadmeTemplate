<template>
  <div>
    <EmailConfirm v-if="confirm" :email="email" />
    <v-card v-else class="card mx-auto mt-5" max-width="500">
      <v-card-title
        ><h2 class="card__title pa-2">プロフィール</h2></v-card-title
      >
      <v-divider class="mb-4"></v-divider>
      <div class="card__images">
        <v-img
          v-if="uploadImage"
          :src="uploadImage"
          class="card__img mb-4"
        ></v-img>
        <v-img v-else :src="img" class="card__img mb-4"></v-img>

        <label class="card__file">
          <v-icon color="#fff" medium>fa-camera</v-icon>
          <input type="file" @change="onImageUploaded" style="display: none" />
        </label>
      </div>
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
          @click:append="updateEmail"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
import EmailConfirm from '~/components/parts/EmailConfirm.vue'
import { useUpdateUser } from '~/conpositions/useUpdateUser'
export default defineComponent({
  components: {
    EmailConfirm,
  },
  setup() {
    const showOldPassword = ref(false)
    const showNewPassword = ref(false)

    const {
      form,
      getUser,
      updateName,
      updateEmail,
      changePassword,
      uploadImage,
      onImageUploaded,
    } = useUpdateUser()

    getUser()

    return {
      ...toRefs(form),
      showOldPassword,
      showNewPassword,
      changePassword,
      updateName,
      updateEmail,
      onImageUploaded,
      uploadImage,
    }
  },
})
</script>

<style lang="scss" scoped>
.card {
  &__title {
    margin: 0 auto;
  }

  &__images {
    position: relative;
  }

  &__img {
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 1px solid rgba(34, 36, 38, 0.15);
    margin: 0 auto;
  }

  &__file {
    position: absolute;
    top: 45%;
    left: 47%;
    cursor: pointer;
    padding: 0 1px 0 2px;
    background-color: rgba(34, 36, 38, 0.5);
    border-radius: 5px;
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
