import { Auth } from 'aws-amplify'

export const currentAuthUser = (props, context) => {
  const router = context.root.$router

  const getCurrentUser = async () => {
    try {
      await Auth.currentAuthenticatedUser()
    } catch (error) {
      console.log(error)
      router.push('/signup')
    }
  }

  return { router, getCurrentUser }
}
