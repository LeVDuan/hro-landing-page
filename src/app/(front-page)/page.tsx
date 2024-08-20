// Component Imports
import LandingPageWrapper from '@views/front-pages/landing-page'

// Server Action Imports
import { getServerMode, getUserLocaleFromCookies } from '@core/utils/serverHelpers'

const LandingPage = () => {
  // Vars
  const mode = getServerMode()
  const locale = getUserLocaleFromCookies()

  // console.log('locale', locale)

  return <LandingPageWrapper mode={mode} locale={locale} />
}

export default LandingPage
