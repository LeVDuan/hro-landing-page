# HRO Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/MUI-5.18.0-007FFF?logo=mui)](https://mui.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

*[English](README.md) | **Tiếng Việt***

Giải pháp landing page cấp doanh nghiệp với hiệu suất cao, được xây dựng bằng công nghệ web hiện đại. Thiết kế tối ưu cho trải nghiệm người dùng, hiệu suất SEO và khả năng mở rộng.

## 🚀 Tính Năng Chính

### Khả Năng Cốt Lõi
- **Thiết Kế Responsive**: Bố cục thích ứng hoàn toàn cho desktop, tablet và thiết bị di động
- **Đa Ngôn Ngữ**: Hỗ trợ đa ngôn ngữ với next-intl cho phạm vi toàn cầu
- **Tối Ưu Hiệu Suất**: Tích hợp lazy loading, tối ưu hình ảnh và code splitting
- **SEO Sẵn Sàng**: Server-side rendering với quản lý meta tags và structured data
- **Tích Hợp Analytics**: Giám sát hiệu suất thời gian thực với Vercel Analytics

### Điểm Nổi Bật Kỹ Thuật
- **Type Safety**: Triển khai TypeScript hoàn toàn cho chất lượng code mạnh mẽ
- **Styling Hiện Đại**: Components Material-UI với utility classes Tailwind CSS
- **Tích Hợp Cloud**: Cloudinary cho việc phân phối và chuyển đổi hình ảnh tối ưu
- **Dịch Vụ Email**: Tích hợp EmailJS cho chức năng form liên hệ
- **Trải Nghiệm Developer**: Hot reload, ESLint, Prettier và công cụ toàn diện

## 📋 Yêu Cầu Hệ Thống

- **Node.js**: 18.17.0 trở lên (khuyến nghị LTS)
- **npm**: 9.0.0 trở lên
- **Hệ Điều Hành**: macOS, Windows (WSL2), hoặc Linux
- **RAM**: Tối thiểu 4GB (khuyến nghị 8GB cho development)

## 🛠️ Công Nghệ Sử Dụng

### Framework Frontend
- **Next.js 14.2.31** - React framework với App Router
- **React 18.3.1** - Thư viện UI
- **TypeScript 5.9.2** - JavaScript với type-safe

### UI & Styling
- **Material-UI 5.18.0** - Thư viện component
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **Emotion** - Giải pháp CSS-in-JS

### Dịch Vụ & Công Cụ
- **Cloudinary** - Quản lý hình ảnh và video
- **EmailJS** - Tích hợp dịch vụ email
- **Vercel Analytics** - Giám sát hiệu suất
- **next-intl 3.26.5** - Quốc tế hóa

## 📦 Cài Đặt

### Kiểm Tra Điều Kiện Tiên Quyết
```bash
node --version  # Phải >= 18.17.0
npm --version   # Phải >= 9.0.0
```

### Clone Repository
```bash
git clone https://github.com/your-org/hro-landing-page.git
cd hro-landing-page
```

### Cài Đặt Dependencies
```bash
npm ci  # Cài đặt chính xác theo lock file
# hoặc
npm install  # Cài đặt mới
```

### Cấu Hình Môi Trường

Tạo file `.env.local` trong thư mục gốc:

```env
# Bắt buộc: Cấu hình Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Bắt buộc: Cấu hình EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Tùy chọn: Analytics (tự động cấu hình trên Vercel)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Tùy chọn: Môi trường
NODE_ENV=development
```

## 🚀 Phát Triển

### Khởi Động Server Development
```bash
npm run dev
```
Ứng dụng sẽ chạy tại `http://localhost:3000`

### Các Lệnh Có Sẵn

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Khởi động server development với hot reload |
| `npm run build` | Tạo bản build production tối ưu |
| `npm start` | Khởi động server production |
| `npm run lint` | Chạy ESLint kiểm tra chất lượng code |
| `npm run lint:fix` | Tự động sửa lỗi ESLint |
| `npm run format` | Format code với Prettier |
| `npm run build:icons` | Tạo bundle icon |

## 📁 Kiến Trúc Dự Án

```
hro-landing-page/
├── .github/                 # Cấu hình GitHub
│   └── workflows/          # CI/CD pipelines
├── public/                 # Tài nguyên tĩnh
│   ├── fonts/             # Font tùy chỉnh
│   ├── images/            # Hình ảnh tĩnh
│   └── locales/           # File dịch thuật
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── gallery/      # Trang gallery
│   │   ├── layout.tsx    # Layout gốc
│   │   └── page.tsx      # Trang chủ
│   ├── assets/           # Tài nguyên ứng dụng
│   │   └── iconify-icons/# Cấu hình icon
│   ├── components/       # React components
│   │   ├── common/       # Components dùng chung
│   │   ├── sections/     # Sections của trang
│   │   └── ui/           # UI components
│   ├── config/           # Cấu hình ứng dụng
│   ├── contexts/         # React Context providers
│   ├── core/             # Core utilities
│   ├── layouts/          # Layout components
│   ├── messages/         # File i18n
│   ├── theme/            # Cấu hình theme
│   │   ├── colors.ts     # Bảng màu
│   │   ├── components.ts # Component overrides
│   │   └── index.ts      # Export theme
│   └── utils/            # Hàm tiện ích
├── .env.example           # Template biến môi trường
├── .eslintrc.json        # Cấu hình ESLint
├── .prettierrc           # Cấu hình Prettier
├── next.config.mjs       # Cấu hình Next.js
├── package.json          # Dependencies và scripts
├── tailwind.config.ts    # Cấu hình Tailwind CSS
└── tsconfig.json         # Cấu hình TypeScript
```

## 🏗️ Build & Triển Khai

### Build Production
```bash
npm run build
```

Output build sẽ nằm trong thư mục `.next/`.

### Xem Trước Production
```bash
npm run build && npm start
```

### Các Tùy Chọn Triển Khai

#### Vercel (Khuyến Nghị)
1. Push code lên GitHub/GitLab/Bitbucket
2. Import dự án trên [Vercel](https://vercel.com)
3. Cấu hình biến môi trường
4. Deploy (tự động khi push vào main)

#### Triển Khai Docker
```dockerfile
# Ví dụ Dockerfile có sẵn trong repository
docker build -t hro-landing-page .
docker run -p 3000:3000 hro-landing-page
```

#### Hosting Truyền Thống
```bash
npm run build
npm start  # Yêu cầu Node.js trên server
```

## 🔧 Cấu Hình

### Cấu Hình Next.js
Xem `next.config.mjs` cho:
- Cài đặt tối ưu hình ảnh
- Routes đa ngôn ngữ
- Security headers
- Tùy chỉnh Webpack

### Cấu Hình TypeScript
Xem `tsconfig.json` cho:
- Path aliases
- Compiler options
- Module resolution

## 🧪 Đảm Bảo Chất Lượng

### Chất Lượng Code
- ESLint cho code linting
- Prettier cho code formatting
- TypeScript cho type checking
- Husky cho pre-commit hooks (nếu cấu hình)

### Chỉ Số Hiệu Suất
- Điểm Lighthouse: 95+ (Performance)
- First Contentful Paint: < 1.2s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📊 Giám Sát

### Vercel Analytics
Tự động tích hợp khi triển khai trên Vercel:
- Real User Metrics (RUM)
- Theo dõi Web Vitals
- Theo dõi custom events

### Theo Dõi Lỗi
Cấu hình dịch vụ theo dõi lỗi trong production:
```javascript
// Ví dụ: Tích hợp Sentry
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## 🔒 Bảo Mật

### Best Practices
- Biến môi trường cho dữ liệu nhạy cảm
- Content Security Policy headers
- Bắt buộc HTTPS
- Cập nhật dependencies thường xuyên
- Sanitization đầu vào

### Security Headers
Được cấu hình trong `next.config.mjs`:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📖 Tài Liệu API

### Gallery API
```
GET /api/gallery
```
Trả về hình ảnh gallery phân trang từ Cloudinary.

Tham số Query:
- `page` (number): Số trang
- `limit` (number): Số item mỗi trang

## 🤝 Đóng Góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng xem [Hướng dẫn đóng góp](CONTRIBUTING.md) để biết chi tiết.

### Quy Trình Phát Triển
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/TinhNangTuyetVoi`)
3. Commit thay đổi (`git commit -m 'Thêm TinhNangTuyetVoi'`)
4. Push lên branch (`git push origin feature/TinhNangTuyetVoi`)
5. Mở Pull Request

### Tiêu Chuẩn Code
- Tuân theo cấu hình ESLint
- Viết commit message có ý nghĩa
- Thêm TypeScript types phù hợp
- Cập nhật tài liệu khi cần

## 📄 Giấy Phép

Dự án này là phần mềm độc quyền. Mọi quyền được bảo lưu.

## 🆘 Hỗ Trợ

Để được hỗ trợ kỹ thuật hoặc có câu hỏi:
- Tạo issue trong repository
- Liên hệ đội ngũ phát triển
- Xem tài liệu tại [link tài liệu]

## 🙏 Lời Cảm Ơn

- Đội ngũ Next.js cho framework tuyệt vời
- Vercel cho hosting và analytics
- Material-UI cho thư viện component
- Tất cả contributors và maintainers

---

**Phiên bản:** 4.0.0  
**Cập nhật lần cuối:** Tháng 12 2024  
**Duy trì bởi:** Đội ngũ phát triển HRO