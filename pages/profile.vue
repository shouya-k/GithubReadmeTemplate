<template>
  <div>
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentAuthUser } from '~/conpositions/useCurrentAuthUser'
import Header from '~/components/layout/Header.vue'
import Form from '~/components/contents/ProfileForm.vue'
export default defineComponent({
  components: {
    Header,
    Form,
  },
  setup(props, context) {
    const { getCurrentUser } = currentAuthUser(props, context)

    getCurrentUser()

    return {}
  },
})
</script>

<style scoped></style>
