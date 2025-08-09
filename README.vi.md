# HRO - Trang Web CLB Bóng chày HUST Red Owls

[![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/MUI-5.18.0-007FFF?logo=mui)](https://mui.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

*[English](README.md) | **Tiếng Việt***

Trang web chính thức của CLB Bóng chày HUST Red Owls - Câu lạc bộ bóng chày đầu tiên và hàng đầu tại Đại học Bách khoa Hà Nội (HUST), Việt Nam.

## 🦉 Giới thiệu về HRO

HUST Red Owls (HRO) là câu lạc bộ bóng chày hàng đầu tại Đại học Bách khoa Hà Nội, được thành lập và hoạt động dưới sự quản lý của Ban Văn nghệ Thể thao - Đoàn Đại học Bách khoa Hà Nội. Chúng tôi tận tâm trong việc phát triển văn hóa bóng chày tại Việt Nam và xây dựng cộng đồng những người đam mê bộ môn thể thao này.

### Sứ mệnh của chúng tôi
- Quảng bá bóng chày trong các trường đại học Việt Nam
- Xây dựng cộng đồng mạnh mẽ của những người yêu bóng chày
- Thi đấu ở cấp độ quốc gia và quốc tế
- Phát triển tài năng trẻ trong bộ môn bóng chày

## 🚀 Tính năng chính

### Khả năng của Website
- **Hỗ trợ Song ngữ**: Hỗ trợ đầy đủ tiếng Việt và tiếng Anh
- **Giới thiệu Đội**: Hồ sơ chi tiết của cầu thủ, huấn luyện viên và ban quản lý
- **Dòng thời gian Sự kiện**: Thành tích lịch sử và sự kiện sắp tới
- **Thư viện Ảnh**: Thư viện ảnh động với tích hợp Cloudinary
- **Hệ thống Liên hệ**: Form liên hệ trực tiếp với tích hợp EmailJS
- **Thiết kế Responsive**: Tối ưu cho mọi thiết bị
- **Chủ đề Theo mùa**: Hiệu ứng đặc biệt cho các ngày lễ (Giáng sinh, Tết Nguyên đán)

### Tính năng Kỹ thuật
- **Tối ưu Hiệu suất**: Xây dựng với Next.js App Router cho tải trang tối ưu
- **SEO Sẵn sàng**: Server-side rendering với tối ưu meta tags
- **Tích hợp Analytics**: Theo dõi thời gian thực với Vercel Analytics
- **Type Safety**: Triển khai TypeScript hoàn toàn
- **UI Hiện đại**: Components Material-UI với utilities Tailwind CSS

## 🛠️ Công nghệ sử dụng

### Framework Frontend
- **Next.js 14.2.31** - React framework với App Router
- **React 18.3.1** - Thư viện UI
- **TypeScript 5.9.2** - JavaScript với type-safe

### UI & Styling
- **Material-UI 5.18.0** - Thư viện component
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **Emotion** - Giải pháp CSS-in-JS

### Dịch vụ & Công cụ
- **Cloudinary** - Quản lý hình ảnh và video
- **EmailJS** - Dịch vụ email cho form liên hệ
- **Vercel Analytics** - Giám sát hiệu suất
- **next-intl 3.26.5** - Đa ngôn ngữ

## 📦 Cài đặt

### Yêu cầu tiên quyết
```bash
node --version  # Phải >= 18.17.0
npm --version   # Phải >= 9.0.0
```

### Hướng dẫn cài đặt
```bash
# Clone repository
git clone https://github.com/LeVDuan/HRO-landing-page.git
cd HRO-landing-page

# Cài đặt dependencies
npm install

# Thiết lập biến môi trường
cp .env.example .env.local
# Chỉnh sửa .env.local với thông tin của bạn

# Chạy development server
npm run dev
```

### Cấu hình môi trường

Tạo file `.env.local` với:

```env
# Cấu hình Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=hro-gallery

# Cấu hình EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Tùy chọn: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

## 🚀 Phát triển

### Các lệnh có sẵn

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Khởi động development server (http://localhost:3000) |
| `npm run build` | Tạo bản build production |
| `npm start` | Khởi động production server |
| `npm run lint` | Kiểm tra ESLint |
| `npm run lint:fix` | Tự động sửa lỗi ESLint |
| `npm run format` | Format code với Prettier |

## 📁 Cấu trúc dự án

```
HRO-landing-page/
├── public/                 # Tài nguyên tĩnh
│   ├── avatars/           # Ảnh thành viên đội
│   ├── landing-page/      # Hình ảnh landing page
│   └── logos/             # Logo HRO (biến thể theo mùa)
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (front-page)/  # Trang landing chính
│   │   ├── api/           # API routes
│   │   └── gallery/       # Trang thư viện ảnh
│   ├── components/        # React components
│   │   ├── layout/        # Layout components
│   │   └── dialogs/       # Dialog components
│   ├── configs/           # File cấu hình
│   ├── contexts/          # React contexts
│   ├── fake-db/           # Dữ liệu thành viên đội
│   ├── messages/          # Bản dịch i18n
│   ├── theme/             # Cấu hình theme MUI
│   ├── types/             # TypeScript types
│   ├── utils/             # Hàm tiện ích
│   └── views/             # Page view components
│       ├── front-pages/   # Các section landing page
│       └── gallery/       # Components thư viện ảnh
├── .env.example           # Template môi trường
├── next.config.mjs        # Cấu hình Next.js
├── package.json           # Dependencies
└── tsconfig.json          # Cấu hình TypeScript
```

## 🏗️ Triển khai

### Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Import dự án trên [Vercel](https://vercel.com)
3. Cấu hình biến môi trường
4. Tự động deploy

### Triển khai thủ công
```bash
# Build cho production
npm run build

# Khởi động production server
npm start
```

## 📊 Hiệu suất

### Tính năng tối ưu
- Tối ưu hình ảnh với Next.js Image component
- Lazy loading cho ảnh trong thư viện
- Code splitting theo route
- Tối ưu font chữ
- CSS purging với Tailwind

### Chỉ số
- Điểm Lighthouse: 95+ (Performance)
- First Contentful Paint: < 1.2s
- Time to Interactive: < 3.5s

## 🤝 Đóng góp

Chúng tôi hoan nghênh đóng góp từ cộng đồng HRO!

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/TinhNangMoi`)
3. Commit thay đổi (`git commit -m 'Thêm TinhNangMoi'`)
4. Push lên branch (`git push origin feature/TinhNangMoi`)
5. Mở Pull Request

## 📱 Kết nối với HRO

- **Facebook**: [HUST Red Owls Baseball Team](https://www.facebook.com/HUSTRedOwlsBaseballTeam)
- **Instagram**: [@hustredowlsbaseballteam](https://www.instagram.com/hustredowlsbaseballteam/)
- **Email**: hustredowlsbaseballteam@gmail.com
- **Địa điểm**: Đại học Bách khoa Hà Nội, Việt Nam

## 🏆 Thành tích

- Tham gia Giải vô địch Bóng chày Quốc gia
- Đại diện tại Hội thao Sinh viên các trường Đại học
- Thành viên tích cực của Liên đoàn Bóng chày Việt Nam
- Nhiều thành tích nổi bật trong các giải đấu khu vực

## 📄 Giấy phép

Dự án này là phần mềm độc quyền của CLB Bóng chày HUST Red Owls. Mọi quyền được bảo lưu.

## 🙏 Lời cảm ơn

- Ban Văn nghệ Thể thao - Đoàn Đại học Bách khoa Hà Nội vì sự hỗ trợ liên tục
- Tất cả thành viên, huấn luyện viên và người ủng hộ HRO
- Liên đoàn Bóng chày Việt Nam
- Các nhà tài trợ và đối tác của chúng tôi

---

**Phiên bản:** 0.3.0  
**Cập nhật lần cuối:** Tháng 12 2024  
**Duy trì bởi:** Đội ngũ phát triển HRO

⚾ **Play Ball!** ⚾