import { Auth, API } from 'aws-amplify'
import { reactive } from '@nuxtjs/composition-api'
import { deleteReadme } from '~/graphql/mutations'

export const useDialog = () => {
  const dialog = reactive({
    delete: false,
    message: '',
    deleteBtn: false,
  })

  const showDeleteDialog = async (uid: String): Promise<void> => {
    const user = await Auth.currentAuthenticatedUser()
    dialog.delete = true
    if (uid === user.attributes.sub) {
      dialog.message = '本当にこの投稿を削除しますか？'
      dialog.deleteBtn = true
    } else {
      dialog.message = '投稿者しか投稿を削除する事は出来ません。'
      dialog.deleteBtn = false
    }
  }

  const deleteReadmes = async (readme: { id: string }): Promise<void> => {
    try {
      await API.graphql({
        query: deleteReadme,
        variables: {
          input: {
            id: readme.id,
          },
        },
      })
      location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    dialog,
    showDeleteDialog,
    deleteReadmes,
  }
}
