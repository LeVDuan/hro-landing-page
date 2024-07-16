// Next Imports

// MUI Imports
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const GetStarted = () => {
  return (
    <section className='flex flex-col gap-16 plb-[10px]'>
      <div
        className={classnames(
          'flex items-center flex-wrap justify-center lg:justify-between gap-y-4 gap-x-28',
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className='flex flex-col items-start gap-y-4 gap-x-4 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4' className='font-bold'>
              Thời gian đầu đầy khó khăn
            </Typography>
          </div>
          <div>
            <Typography className='font-medium' color='text.secondary'>
              Với sự thiếu thốn cả về cơ sở vật chất, dụng cụ tập luyện.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Mọi người đều phải chắt chiu, dùng chung găng, chày.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Tuy vậy, HRO đã vượt qua với tình yêu, đam mê với bóng chày
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Để sau đó là một cột mốc đáng nhớ của HRO.
            </Typography>
          </div>
        </div>
        <div className='flex pbs-4 lg:pbs-[60px] md:pie-4 z-[1]'>
          <img
            src='/images/front-pages/landing-page/early-stage.jpg'
            alt='early-stage-image'
            className='max-is-[550px] is-full rounded-xl'
          />
        </div>
      </div>
    </section>
  )
}

export default GetStarted
