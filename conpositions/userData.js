import { API, Auth } from 'aws-amplify'
import { createUser, updateUser } from '~/graphql/mutations'

export const userData = () => {
  const createdUser = async (form) => {
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

  const updateName = async (name) => {
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
