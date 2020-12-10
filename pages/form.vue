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
import Header from '../components/layout/header.vue'
import Form from '~/components/contents/readme-form.vue'
import Sample from '~/components/parts/readme-form-sample.vue'
export default {
  components: {
    Header,
    Form,
    Sample,
  },
}
</script>

<style lang="scss" scoped></style>
