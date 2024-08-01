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
              CHÍNH THỨC ĐƯỢC CÔNG NHẬN
            </Typography>
          </div>
          <div className='md:max-is-[535px]'>
            <Typography className='font-medium' color='text.secondary'>
              Tháng 3/2021, một trang mới đã được mở ra trong lịch sử của HRO khi chúng mình chính thức trở thành CLB
              của Đoàn Đại học Bách Khoa Hà Nội, trực thuộc Ban văn nghệ thể thao.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Đây là một bước tiến lớn đánh dấu sự trưởng thành của CLB.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Official
