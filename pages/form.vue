<template>
  <div>
    <Header></Header>
    <v-layout>
      <Sample></Sample>
      <v-flex lg8>
        <Form></Form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { currentAuthUser } from '@/conpositions/currentAuthUser'
import Header from '../components/layout/header.vue'
import Form from '~/components/contents/readme-form.vue'
import Sample from '~/components/parts/readme-form-sample.vue'
export default defineComponent({
  components: {
    Header,
    Form,
    Sample,
  },
  setup(props, context) {
    const { getCurrentUser } = currentAuthUser(props, context)

    getCurrentUser()
  },
})
</script>

<style lang="scss" scoped></style>
