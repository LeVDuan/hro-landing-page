// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
// import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

function Footer() {
  return (
    <footer className={frontLayoutClasses.footer}>
      <div className='relative'>
        <img
          src='/images/front-pages/footer-bg.png'
          alt='footer bg'
          className='absolute inset-0 is-full bs-full object-cover -z-[1]'
        />
        <div className={classnames('plb-12 text-white', frontCommonStyles.layoutSpacing)}>
          <Grid container rowSpacing={10} columnSpacing={12}>
            <Grid item xs={12} lg={5}>
              <div className='flex flex-col items-start gap-6'>
                <Link href='/'>
                  {/* <Logo color='var(--mui-palette-common-white)' /> */}
                  <div className='flex gap-4'>
                    <img
                      color='var(--mui-palette-common-white)'
                      src='/images/logos/Logo.png'
                      alt='apple store'
                      className='bs-[65px]'
                    />
                    <Typography
                      color='white'
                      fontWeight={700}
                      fontSize={40}
                      className='lg:max-is-[500px] opacity-[0.98]'
                    >
                      HRO
                    </Typography>
                  </div>
                </Link>
                <Typography color='white' fontWeight={700} className='lg:max-is-[390px] opacity-[0.98]'>
                  HUST Red Owls Baseball team
                </Typography>
                <Typography color='white' className='lg:max-is-[390px] opacity-[0.78]'>
                  CLB Bóng chày trực thuộc Ban Văn nghệ thể thao Đoàn Đại học Bách Khoa Hà Nội
                </Typography>
                {/* <div className='flex gap-4'>
                  <TextField
                    size='small'
                    className={styles.inputBorder}
                    label='Subscribe to newsletter'
                    placeholder='Your email'
                    sx={{
                      ' & .MuiInputBase-root:hover:not(.Mui-focused) fieldset': {
                        borderColor: 'rgb(var(--mui-mainColorChannels-dark) / 0.6) !important'
                      },
                      '& .MuiInputBase-root.Mui-focused fieldset': {
                        borderColor: 'var(--mui-palette-primary-main)!important'
                      },
                      '& .MuiFormLabel-root.Mui-focused': {
                        color: 'var(--mui-palette-primary-main) !important'
                      }
                    }}
                  />
                  <Button variant='contained' color='primary'>
                    Subscribe
                  </Button>
                </div> */}
              </div>
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Trang
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography component={Link} href='' color='white' className='opacity-[0.78]'>
                  Trang chủ
                </Typography>
                <Typography component={Link} href='/pricing' color='white' className='opacity-[0.78]'>
                  Về chúng tôi
                </Typography>
                <Link href='/payment' className='flex items-center gap-[10px]'>
                  <Typography color='white' className='opacity-[0.78]'>
                    Địa chỉ
                  </Typography>
                  {/* <Chip label='New' color='primary' size='small' /> */}
                </Link>
                <Typography component={Link} href='/help-center' color='white' className='opacity-[0.78]'>
                  Liên hệ
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Cơ cấu
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography
                  component={Link}
                  href='https://hdwallet.toolhub.app'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Leader
                </Typography>
                <Typography
                  component={Link}
                  href='https://hdwallet.toolhub.app'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Manager
                </Typography>
                <Typography
                  component={Link}
                  href='https://hdwallet.toolhub.app'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Media
                </Typography>
                <Typography
                  component={Link}
                  href='https://hdwallet.toolhub.app'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Player
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Mạng xã hội
              </Typography>
              <div className='flex flex-col gap-4'>
                <Link
                  href='https://www.facebook.com/HUSTRedOwlsBaseballTeam'
                  target='_blank'
                  className='bg-[#211B2C] bs-[56px] is-[211px] rounded'
                >
                  <div className='flex items-center pli-5 plb-[7px] gap-6'>
                    <img src='/images/front-pages/f_logo.png' alt='apple store' className='bs-[34px]' />
                    <div className='flex flex-col items-start'>
                      <Typography variant='body2' color='white' className='capitalize opacity-[0.82]'>
                        Theo dõi trên
                      </Typography>
                      <Typography color='white' className='font-medium capitalize opacity-[0.92]'>
                        Facebook
                      </Typography>
                    </div>
                  </div>
                </Link>
                <Link
                  href='https://www.instagram.com/hustredowlsbaseballteam/'
                  target='_blank'
                  className='bg-[#211B2C] bs-[56px] is-[211px] rounded'
                >
                  <div className='flex items-center pli-5 plb-[7px] gap-6'>
                    <img src='/images/front-pages/ins_logo.png' alt='Google play' className='bs-[34px]' />
                    <div className='flex flex-col items-start'>
                      <Typography variant='body2' color='white' className='opacity-[0.82]'>
                        Theo dõi trên
                      </Typography>
                      <Typography color='white' className='font-medium opacity-[0.92]'>
                        Instagram
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='bg-[#211B2C]'>
        <div
          className={classnames(
            'flex flex-wrap items-center justify-center sm:justify-between gap-4 plb-[15px]',
            frontCommonStyles.layoutSpacing
          )}
        >
          <p className='text-white text-[13px] opacity-[0.92]'>
            <span>{`© ${new Date().getFullYear()}, Made with `}</span>
            <span>{`❤️`}</span>
            <span>{` by `}</span>
            <Link href='https://github.com/LeVDuan' target='_blank' className='font-medium text-white'>
              DuanLV
            </Link>
          </p>
          <div className='flex gap-6 items-center opacity-[0.78]'>
            <IconButton component={Link} size='small' href='https://github.com/LeVDuan' target='_blank'>
              <i className='ri-github-fill text-white text-lg' />
            </IconButton>
            <IconButton component={Link} size='small' href='https://www.facebook.com/LeVDuan0308/' target='_blank'>
              <i className='ri-facebook-fill text-white text-lg' />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
