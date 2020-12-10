<template>
  <div>
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script>
import Header from '../components/layout/login-header.vue'
import Form from '../components/contents/signup-form.vue'
export default {
  components: {
    Header,
    Form,
  },
}
</script>

<style lang="scss" scoped></style>
