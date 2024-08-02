// Next Imports

// MUI Imports
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const NationalCup2023 = () => {
  return (
    <section className='flex flex-col gap-16 plb-[10px]'>
      <div
        className={classnames(
          'flex items-center flex-wrap justify-center lg:justify-between gap-y-4 gap-x-10',
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className='md:max-is-[485px] flex flex-col items-start gap-y-4 gap-x-4 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h5' className='font-bold'>
              CÚP CÁC CÂU LẠC BỘ BÓNG CHÀY TOÀN QUỐC NĂM 2023 – CÚP VIN CÀ PHÊ
            </Typography>
          </div>
          <div>
            <Typography className='font-medium' color='text.secondary'>
              HRO khép lại hành trình lần đầu tham gia “Giải Cúp các câu lạc bộ bóng chày toàn quốc 2023” với thành tích
              Quý quân đồng thời mang về tấm huy chương Đồng 🥉
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Là một đội chưa có nhiều kinh nghiệm nhưng nhờ những ngày nỗ lực tập luyện chăm chỉ dưới cái nắng gắt của
              Hà Nội, những buổi lẻ trong tuần đã giúp HRO có một giải đấu thành công.
            </Typography>
            <Typography className='font-medium' color='text.secondary'>
              Trong giải chúng tôi đã trải qua 5 trận đấu cùng các đội đến từ cả 3 miền Bắc Trung Nam với 3 trận thắng,
              2 trận thua 🔥 Những nỗ lực, tiến bộ qua từng trận đã để lại cho chúng tôi nhiều điều, chúng tôi sẽ quay
              trở lại và mạnh mẽ hơn trong những chặng đường tiếp theo.
            </Typography>
          </div>
        </div>
        <div className='flex pbs-4 lg:pbs-[60px] md:pie-4 z-[1]'>
          <img
            src='/images/front-pages/landing-page/nationalCup2023.png'
            alt='early-stage-image'
            className='max-is-[550px] is-full rounded-xl'
          />
        </div>
      </div>
    </section>
  )
}

export default NationalCup2023
