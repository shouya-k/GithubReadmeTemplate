<template>
  <v-app-bar dark app>
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"
      >Github README Template</v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn link nuxt to="/" class="mr-3" icon>
      <v-icon title="ホーム">mdi-home</v-icon>
    </v-btn>

    <v-btn link nuxt to="/profile" class="mr-3" icon>
      <v-icon title="プロフィール">mdi-account</v-icon>
    </v-btn>

    <v-btn link nuxt to="/form" class="mr-3" icon>
      <v-icon title="作成する">mdi-plus-circle</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon title="サインアウト" @click="signout">mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
export default defineComponent({
  setup(props, context) {
    const router = context.root.$router

    const signout = async () => {
      try {
        await Auth.signOut()
        router.push('/signin')
      } catch (error) {
        console.log('error signing out: ', error)
      }
    }

    return {
      signout,
    }
  },
})
</script>
