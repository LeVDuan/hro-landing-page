// Next Imports

// MUI Imports
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const HBMS2023 = () => {
  return (
    <section className='flex flex-col gap-16 plb-[50px]'>
      <div
        className={classnames(
          'flex items-center flex-wrap justify-center lg:justify-between gap-x-10',
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className='flex pbs-4 lg:pbs-[60px] md:pie-4 z-[1]'>
          <img
            src='/images/front-pages/landing-page/HBMS2023.png'
            alt='HBMS 2023'
            className='max-is-[550px] is-full rounded-xl'
          />
        </div>
        <div className='flex flex-col items-start gap-y-4 gap-x-0 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4' className='font-bold'>
              GIẢI VÔ ĐỊCH BÓNG CHÀY HÀ NỘI 2023
            </Typography>
          </div>
          <div className='md:max-is-[535px]'>
            <Typography className='font-medium' color='text.secondary'>
              Tháng 10/2023, tiếp nối tinh thần sau giải toàn quốc tháng 7, HRO tiếp tục tham gia “Giải vô địch bóng
              chày Hà Nội 2023”.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              HRO khép lại hành trình với thành tích chung cuộc đồng giải Ba.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HBMS2023
