import { API, Auth } from 'aws-amplify'
import { createUser, updateUser } from '~/graphql/mutations'

export const userData = () => {
  const createdUser = async (form: {
    userId: string
    username: string
    useremail: string
    img: string
  }) => {
    try {
      await API.graphql({
        query: createUser,
        variables: {
          input: {
            userId: form.userId,
            name: form.username,
            email: form.useremail,
            img: form.img,
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateName = async (name: string): Promise<void> => {
    try {
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            name,
          },
        },
      })
      const user = await Auth.currentAuthenticatedUser()
      const result = await Auth.updateUserAttributes(user, {
        name,
      })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  // const updateEmail = () => {}

  return { createdUser, updateName }
}
