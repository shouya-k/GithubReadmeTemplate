<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="pa-5 mt-10">
        <h4 class="card__title">Sign in</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form class="form mt-5">
          <v-text-field
            v-model="username"
            class="form__field"
            placeholder="ユーザー名"
            prepend-icon="fa-user-circle"
            filled
          ></v-text-field>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form__field"
            :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
            placeholder="パスワード"
            prepend-icon="fa-lock"
            filled
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              class="info form__btn"
              depressed
              height="48px"
              tile
              @click="signIn"
              >ログイン</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto mt-5" max-width="500">
      <v-card-text class="text-center font-weight-black"
        >登録がまだの方は<span
          style="cursor: pointer; color: #8e24aa"
          @click="$router.push('/signup')"
        >
          こちらから登録</span
        ></v-card-text
      >
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
export default defineComponent({
  setup(props, context) {
    const router = context.root.$router

    const form = reactive({
      username: '',
      password: '',
    })

    const signIn = async (): Promise<void> => {
      try {
        const user = await Auth.signIn(form.username, form.password)
        console.log(user)
        router.push('/')
      } catch (error) {
        console.log('error signing in', error)
      }
    }

    const showPassword = ref(false)

    return {
      ...toRefs(form),
      signIn,
      showPassword,
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
