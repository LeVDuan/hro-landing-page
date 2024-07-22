// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Link from '@components/Link'

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
              <div className='flex flex-col items-start gap-4'>
                <Link href='/'>
                  {/* <Logo color='var(--mui-palette-common-white)' /> */}
                  <div className='flex gap-4'>
                    <img
                      color='var(--mui-palette-common-white)'
                      src='/images/logos/Logo.png'
                      alt='apple store'
                      className='bs-[45px]'
                    />
                    <Typography
                      color='white'
                      fontWeight={700}
                      fontSize={30}
                      className='lg:max-is-[500px] opacity-[0.98]'
                    >
                      HRO
                    </Typography>
                  </div>
                  <Typography color='white' mt={5} fontWeight={700} className='lg:max-is-[390px] opacity-[0.98]'>
                    HUST Red Owls Baseball team
                  </Typography>
                </Link>
                <div>
                  <Typography color='white' className='lg:max-is-[390px] opacity-[0.78]'>
                    CLB Bóng chày Đoàn Đại học Bách Khoa Hà Nội
                  </Typography>
                  <Typography color='white' mt={1} className='lg:max-is-[390px] opacity-[0.78]'>
                    Số 1 Đại Cồ Việt, Quận Hai Bà Trưng, Hà Nội, Việt Nam
                  </Typography>
                  <Typography color='white' mt={1} className='lg:max-is-[390px] opacity-[0.78]'>
                    hustredowlsbaseballteam@gmail.com
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <Typography color='white' className='font-medium mbe-6 opacity-[1]'>
                Lối tắt
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography component={Link} href='/' color='white' className='opacity-[0.78]'>
                  Trang chủ
                </Typography>
                <Typography component={Link} href='#about-us' color='white' className='opacity-[0.78]'>
                  Về chúng tôi
                </Typography>
                <Link href='#activities' className='flex items-center gap-[10px]'>
                  <Typography color='white' className='opacity-[0.78]'>
                    Hoạt động
                  </Typography>
                  {/* <Chip label='New' color='primary' size='small' /> */}
                </Link>
                <Typography component={Link} href='#contact-us' color='white' className='opacity-[0.78]'>
                  Liên hệ
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <Typography color='white' className='font-medium mbe-6 opacity-[1]'>
                Cơ cấu tổ chức
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography component={Link} href='#leaders' color='white' className='opacity-[0.78]'>
                  Leaders
                </Typography>
                <Typography component={Link} href='#managers' color='white' className='opacity-[0.78]'>
                  Managers
                </Typography>
                <Typography component={Link} href='#media' color='white' className='opacity-[0.78]'>
                  Media
                </Typography>
                <Typography component={Link} href='#players' color='white' className='opacity-[0.78]'>
                  Players
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Typography color='white' className='font-medium mbe-6 opacity-[1]'>
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
                    <img src='/images/front-pages/ins_logo.png' alt='Instagram' className='bs-[34px]' />
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
