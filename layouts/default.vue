<template>
  <v-app class="bgc">
    <v-app-bar dark app>
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"
        >Github README Template</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn link nuxt to="/form" icon>
        <v-icon title="作成する">fa-plus-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.bgc {
  background-color: #f2f2f2;
}
</style>
