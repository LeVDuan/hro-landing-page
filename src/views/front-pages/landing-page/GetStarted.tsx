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
          'flex items-center flex-wrap justify-center lg:justify-between gap-y-4 gap-x-10',
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className='flex flex-col items-start gap-y-4 gap-x-4 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4' className='font-bold'>
              THỜI GIAN ĐẦU KHÓ KHĂN
            </Typography>
          </div>
          <div className='md:max-is-[485px]'>
            <Typography className='font-medium' color='text.secondary'>
              Những ngày đầu, HRO đối mặt với vô vàn khó khăn. Thiếu thốn về cơ sở vật chất, dụng cụ tập luyện là điều
              không thể tránh khỏi.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Những ngày đầu, sân tập của chúng tôi chỉ là một khoảng đất trống với vài chiếc găng cũ kỹ. Mỗi thành viên
              đều phải tự trang bị và cùng nhau chia sẻ. Thế nhưng, chính những khó khăn đó đã tôi luyện ý chí và gắn
              kết mọi người lại với nhau.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Dù bắt đầu với hai bàn tay trắng, nhưng với tình yêu bóng chày cháy bỏng, HRO đã chứng minh rằng: khi có
              niềm tin và sự đoàn kết, mọi khó khăn đều có thể vượt qua.
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
