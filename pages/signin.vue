<template>
  <div>
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script>
import Header from '~/components/layout/LoginHeader'
import Form from '~/components/contents/SigninForm'
export default {
  components: {
    Header,
    Form,
  },
}
</script>

<style lang="scss" scoped></style>
