import { Auth, API } from 'aws-amplify'
import { reactive, ref } from '@nuxtjs/composition-api'
import { searchUsers } from '~/graphql/queries'
import { updateUser } from '~/graphql/mutations'

export const useUpdateUser = () => {
  const form = reactive({
    id: '',
    username: '',
    email: '',
    img: '',
    oldPassword: '',
    newPassword: '',
    confirm: false,
  })

  const getUser = async (): Promise<void> => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      form.email = user.attributes.email
      const data: any = await API.graphql({
        query: searchUsers,
        variables: {
          filter: {
            uid: {
              match: user.attributes.sub,
            },
          },
        },
      })
      form.id = data.data.searchUsers.items[0].id
      form.username = data.data.searchUsers.items[0].name
      form.img = data.data.searchUsers.items[0].img
    } catch (error) {
      console.log(error)
    }
  }

  const updateName = async (): Promise<void> => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      await Auth.updateUserAttributes(user, {
        nickname: form.username,
      })
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: form.id,
            name: form.username,
          },
        },
      })
      location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const updateEmail = async (): Promise<void> => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      await Auth.updateUserAttributes(user, {
        email: form.email,
      })
      form.confirm = true
    } catch (error) {
      console.log(error)
    }
  }

  const changePassword = async (): Promise<void> => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      await Auth.changePassword(user, form.oldPassword, form.newPassword)
      alert('パスワードを変更しました。')
      location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const uploadImage = ref()

  const onImageUploaded = (e: any): void => {
    const img = e.target.files[0]
    __createImage(img)
  }

  const __createImage = (image: any): void => {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      uploadImage.value = reader.result

      __updateUserImage()
    }
  }

  const __updateUserImage = async (): Promise<void> => {
    try {
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: form.id,
            img: uploadImage.value,
          },
        },
      })
      getUser()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    form,
    getUser,
    updateName,
    updateEmail,
    changePassword,
    uploadImage,
    onImageUploaded,
  }
}
