<template>
  <div>
    <Header></Header>
    <Card></Card>
  </div>
</template>

<script>
import Header from '../components/layout/header.vue'
import Card from '~/components/contents/content.vue'
export default {
  components: {
    Header,
    Card,
  },
}
</script>
