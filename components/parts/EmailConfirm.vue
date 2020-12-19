<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="pa-5 mt-10">
        <h4 class="card__title">Email Confirm</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form class="form mt-5">
          <v-text-field
            v-model="email"
            class="form__field"
            placeholder="メールアドレス"
            prepend-icon="fa-envelope"
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
              @click="emailConfirm"
              >送信する</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto mt-5" max-width="500"
      ><v-card-text class="text-center font-weight-black">
        メールアドレスに確認コードを送信しました。<br />メールを確認してコードを入力してください。
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
export default defineComponent({
  props: {
    email: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    // const router = context.root.$router

    const form = reactive({
      userEmail: props.email,
      confirmCode: '',
    })

    const emailConfirm = async (): Promise<void> => {
      try {
        await Auth.verifyCurrentUserAttributeSubmit(
          form.userEmail,
          form.confirmCode
        )
        location.reload()
      } catch (error) {
        console.log('error confirming sign up', error)
      }
    }

    return {
      ...toRefs(form),
      emailConfirm,
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
