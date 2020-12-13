<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="pa-5 mt-10">
      <h4 class="card__title">Confirm Sign up</h4>
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
          readonly
        ></v-text-field>
        <v-text-field
          v-model="confirmCode"
          class="form__field"
          placeholder="確認コード"
          prepend-icon="fa-lock"
          filled
        ></v-text-field>
        <v-card-actions>
          <v-btn
            class="info form__btn"
            depressed
            height="48px"
            tile
            @click="confirmSignUp"
            >送信する</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
import { userData } from '~/conpositions/user-data'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    pass: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const router = context.root.$router

    const form = reactive({
      userId: '',
      username: props.name,
      useremail: props.email,
      img:
        'https://user-images.githubusercontent.com/65233189/102001614-7166f300-3d37-11eb-84a8-3e14ba2b84f8.png',
      password: props.pass,
      confirmCode: '',
    })

    const { createdUser } = userData()

    const confirmSignUp = async (): Promise<void> => {
      try {
        await Auth.confirmSignUp(form.username, form.confirmCode)
        const user = await Auth.signIn(form.username, form.password)
        form.userId = user.attributes.sub
        createdUser(form)
        router.push('/')
      } catch (error) {
        console.log('error confirming sign up', error)
      }
    }

    return {
      ...toRefs(form),
      confirmSignUp,
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
