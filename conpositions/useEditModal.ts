import { Auth, API } from 'aws-amplify'
import { ref } from '@nuxtjs/composition-api'
import { getReadme } from '~/graphql/queries'

export const useEditModal = () => {
  const editReadme = ref({})
  const editDialog = ref(false)

  const __getEditReadme = async (id: string) => {
    const getdata: any = await API.graphql({
      query: getReadme,
      variables: {
        id,
      },
    })
    editReadme.value = getdata.data.getReadme
  }

  const showEditModal = async (readme: {
    user: { uid: string }
    id: string
    editModal: boolean
  }) => {
    const user = await Auth.currentAuthenticatedUser()
    if (readme.user.uid === user.attributes.sub) {
      __getEditReadme(readme.id)
      readme.editModal = true
      editDialog.value = false
    } else {
      editDialog.value = true
    }
  }
  const hiddenEditModal = (readme: { editModal: boolean }) => {
    readme.editModal = false
    // getReadmes() subscription
    location.reload()
  }

  return { editReadme, editDialog, showEditModal, hiddenEditModal }
}
