<template>
  <div>
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
import Header from '~/components/layout/LoginHeader.vue'
import Form from '~/components/contents/SignupForm.vue'
export default defineComponent({
  components: {
    Header,
    Form,
  },
  setup() {
    const getCurrentUser = async (): Promise<void> => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser()
        console.log(currentUser)
      } catch (error) {
        console.log('未認証です。')
        console.log(error)
      }
    }

    getCurrentUser()
  },
})
</script>

<style lang="scss" scoped></style>
