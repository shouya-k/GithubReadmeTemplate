<template>
  <div>
    <Header></Header>
    <Card></Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentAuthUser } from '~/conpositions/useCurrentAuthUser'
import Header from '~/components/layout/Header.vue'
import Card from '~/components/contents/Content.vue'
export default defineComponent({
  components: {
    Header,
    Card,
  },
  setup(props, context) {
    const { getCurrentUser } = currentAuthUser(props, context)

    getCurrentUser()
  },
})
</script>
