// Next Imports

// MUI Imports
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const Official = () => {
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
            src='/images/front-pages/landing-page/team-image.jpg'
            alt='early-stage-image'
            className='max-is-[550px] is-full rounded-xl'
          />
        </div>
        <div className='flex flex-col items-start gap-y-4 gap-x-0 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4' className='font-bold'>
              Trở thành CLB chính thức
            </Typography>
          </div>
          <div>
            <Typography className='font-medium' color='text.secondary'>
              Tháng 3/2021, HRO đã có bước tiến đầu tiên khi trở thành
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              CLB chính thức của Đoàn Đại học Bách Khoa, trực thuộc
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Ban văn nghệ thể thao.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Sau thời gian hoạt động, cùng rất nhiều nỗ lực làm việc
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              với Ban Văn nghệ thể thao, Đại học Bách Khoa Hà Nội.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Official
