<template>
  <div>
    <confirm-sign-up v-if="confirm" :name="username" />
    <v-card v-else class="mx-auto" max-width="500">
      <v-card-title class="pa-5 mt-10">
        <h4 class="card__title">Sign up</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form ref="formRules" class="form mt-5">
          <v-text-field
            v-model="username"
            class="form__field"
            placeholder="ユーザー名"
            prepend-icon="fa-user-circle"
            filled
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            v-model="email"
            class="form__field"
            placeholder="メールアドレス"
            prepend-icon="fa-envelope"
            filled
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form__field"
            :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
            placeholder="パスワード"
            prepend-icon="fa-lock"
            filled
            height="48px"
            :rules="[required]"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-text-field
            v-model="passwordConfirm"
            :type="showPasswordConfirm ? 'text' : 'password'"
            class="form__field"
            :append-icon="showPasswordConfirm ? 'fa-eye' : 'fa-eye-slash'"
            placeholder="パスワードの確認"
            prepend-icon="fa-redo"
            filled
            height="48px"
            :rules="[required, confirmPass]"
            @click:append="showPasswordConfirm = !showPasswordConfirm"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              class="info form__btn"
              depressed
              height="48px"
              tile
              @click="signUp"
              >登録</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto mt-5" max-width="500"
      ><v-card-text v-if="confirm" class="text-center font-weight-black">
        メールアドレスに確認コードを送信しました。<br />メールを確認してコードを入力してください。
      </v-card-text>
      <v-card-text v-else class="text-center font-weight-black"
        >既に登録済みの方は<span
          style="cursor: pointer; color: #8e24aa"
          @click="$router.push('/signin')"
        >
          こちらからログイン</span
        ></v-card-text
      >
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
import ConfirmSignUp from '../parts/signup-confirm.vue'
export default defineComponent({
  components: {
    ConfirmSignUp,
  },
  setup() {
    const form = reactive({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      confirm: false,
    })

    const signUp = async (): Promise<void> => {
      if (formRules.value.validate()) {
        try {
          const { user } = await Auth.signUp({
            username: form.username,
            password: form.password,
            attributes: {
              email: form.email, // optional
            },
          })
          console.log(user)
          form.confirm = true
        } catch (error) {
          console.log('error signing up:', error)
        }
      }
    }

    const showPassword = ref(false)
    const showPasswordConfirm = ref(false)

    const formRules = ref()
    const required = ref((value: string) => !!value || '必ず入力してください。')
    const confirmPass = ref(
      (value: string) =>
        (!!value && value === form.password) || 'パスワードが一致していません'
    )

    return {
      ...toRefs(form),
      signUp,
      showPassword,
      showPasswordConfirm,
      formRules,
      required,
      confirmPass,
    }
  },
})
</script>

<style lang="scss" scoped>
.card {
  &__title {
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
    width: 90%;
    margin: 0 auto 10px;
  }
}
</style>
