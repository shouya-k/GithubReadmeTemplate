<template>
  <v-app-bar dark app>
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/signup')"
      >Github README Template</v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn link nuxt to="/signin" class="font-weight-bold mr-2"
      >サインイン</v-btn
    >

    <v-btn link nuxt to="/signup" class="font-weight-bold">サインアップ</v-btn>
  </v-app-bar>
</template>
