import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

const GithubAuthPage = () => {
  const { logIn } = useAuth()
  const loginWithGhAuthCode = async () => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')

    const data = await logIn({ ssoLoginCode: code })

    if (data.message) {
      toast(data.message)
    } else if (data.error) {
      toast.error(data.error)
    } else {
      toast.success('Welcome back!')
    }
    navigate(routes.home())
  }

  React.useEffect(() => {
    loginWithGhAuthCode()
  }, [])

  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <MetaTags
        title="GithubAuth"
        // description="GithubAuth description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>login in progress . . .</h1>
    </>
  )
}

export default GithubAuthPage
