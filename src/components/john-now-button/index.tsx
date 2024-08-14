// Third-party Imports
import classnames from 'classnames'

// Style Imports
import { useTranslations } from 'next-intl'

import { Button } from '@mui/material'

import styles from './styles.module.css'
import { getFont } from '@/utils/getFont'

const JoinNowButton = ({ locale }: { locale: string }) => {
  const t = useTranslations('header')

  return (
    <div className={classnames(styles.wrapper, 'mui-fixed')}>
      <Button
        className={styles.button}
        role='button'
        href='https://www.facebook.com/HUSTRedOwlsBaseballTeam/posts/pfbid02nYKu2gD9e1yL9YWv74FpKXFpzLs3SF4yaSNCvYXumcEgdUedF2qt8C8hqSRyGByZl'
        target='_blank'
        sx={{ fontFamily: `${getFont(locale)}` }}
      >
        {t('Join Now')}
        <span className={styles.buttonInner} />
      </Button>
    </div>
  )
}

export default JoinNowButton
