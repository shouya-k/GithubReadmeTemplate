<template>
  <div>
    <Sidebar></Sidebar>
    <Form></Form>
  </div>
</template>

<script>
import Form from '~/components/readme-form'
import Sidebar from '~/components/form-sidebar'
export default {
  components: {
    Form,
    Sidebar,
  },
}
</script>

<style lang="scss" scoped></style>
