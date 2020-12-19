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
import { currentAuthUser } from '~/conpositions/useCurrentAuthUser'
import Header from '~/components/layout/Header'
import Form from '~/components/contents/ReadmeForm'
import Sample from '~/components/parts/ReadmeFormSample'
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
