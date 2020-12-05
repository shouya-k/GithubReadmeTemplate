<template>
  <v-layout>
    <Sample></Sample>
    <v-flex lg8>
      <Form></Form>
    </v-flex>
  </v-layout>
</template>

<script>
import Form from '~/components/contents/readme-form.vue'
import Sample from '~/components/parts/readme-form-sample.vue'
export default {
  components: {
    Form,
    Sample,
  },
}
</script>

<style lang="scss" scoped></style>
