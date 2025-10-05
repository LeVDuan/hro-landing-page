# Hướng dẫn Setup Google Sheets cho HRO (Version 3.0) - Tích hợp đầy đủ

## Tổng quan

Hệ thống cho phép quản lý toàn bộ dữ liệu động của website thông qua Google Sheets, bao gồm:
- Thông tin thành viên CLB
- Timeline sự kiện
- Thống kê hoạt động (Stats)
- FAQ (Câu hỏi thường gặp)

## Ưu điểm của phương pháp này

- ✅ **Đơn giản**: Quản lý tất cả dữ liệu trong 1 file Google Sheets
- ✅ **Dễ quản lý**: Mỗi sheet cho một loại dữ liệu
- ✅ **Đa ngôn ngữ**: Hỗ trợ 4 ngôn ngữ (EN/VI/JA/KO)
- ✅ **Linh hoạt**: Có thể thêm/sửa/xóa dữ liệu không cần code

## Cấu hình Environment Variables

```env
# Google Sheets Configuration
NEXT_PUBLIC_GOOGLE_SHEET_ID="your_sheet_id"

# Sheet GIDs (tab IDs)
NEXT_PUBLIC_SHEET_GID="0"        # Team Members
NEXT_PUBLIC_FAQ_GID="2"          # FAQ
NEXT_PUBLIC_TIMELINE_GID="3"     # Timeline
NEXT_PUBLIC_STATS_GID="4"        # Stats
```

## Cấu trúc các Sheet

### 1. Team Members Sheet (GID: 0)

| Tên cột | Mô tả | Ví dụ | Bắt buộc |
|---------|-------|-------|----------|
| **ID** | Mã định danh duy nhất | 1, 2, 3... | ✅ |
| **Name** | Tên đầy đủ | Lê Tiến Dũng | ✅ |
| **Jersey** | Số áo (chỉ số) | 22 | ✅ |
| **Generation** | Thế hệ | Gen 1, Gen 2, Gen 3, Gen 4 | ✅ |
| **Color** | Màu hiển thị | error, warning, success | |
| **Captain** | Là đội trưởng? | TRUE/FALSE | |
| **President** | Là chủ tịch? | TRUE/FALSE | |
| **Vice_President** | Là phó chủ tịch? | TRUE/FALSE | |
| **Vice_Captain** | Là phó đội? | TRUE/FALSE | |
| **Manager** | Là quản lý? | TRUE/FALSE | |
| **Media** | Thuộc team media? | TRUE/FALSE | |
| **Media_Head** | Là trưởng media? | TRUE/FALSE | |
| **Pitcher** | Chơi vị trí Pitcher? | TRUE/FALSE | |
| **Catcher** | Chơi vị trí Catcher? | TRUE/FALSE | |
| **Infielder** | Chơi nội dã? | TRUE/FALSE | |
| **Outfielder** | Chơi ngoại dã? | TRUE/FALSE | |
| **Position_Detail** | Chi tiết vị trí | B1/B2, SS/OF | |
| **Batting_Throwing** | B/T | L/L, R/R, L/R | |
| **Former_Leader** | Là cựu lãnh đạo? | TRUE/FALSE | |
| **Former_Role** | Chức vụ cũ | Captain, President | |
| **Active** | Hiển thị trên website? | TRUE/FALSE | ✅ |

**Lưu ý:** Image tự động sử dụng ID.webp (ví dụ: ID=1 → 1.webp)

### 2. FAQ Sheet (GID: 2)

| Tên cột | Mô tả | Ví dụ | Bắt buộc |
|---------|-------|-------|----------|
| **id** | Mã định danh | panel1, panel2 | ✅ |
| **questionEn** | Câu hỏi tiếng Anh | What is HRO? | ✅ |
| **questionVi** | Câu hỏi tiếng Việt | HRO là gì? | |
| **questionJa** | Câu hỏi tiếng Nhật | HROとは？ | |
| **questionKo** | Câu hỏi tiếng Hàn | HRO란? | |
| **answerEn** | Câu trả lời tiếng Anh | HRO is... | ✅ |
| **answerVi** | Câu trả lời tiếng Việt | HRO là... | |
| **answerJa** | Câu trả lời tiếng Nhật | HROは... | |
| **answerKo** | Câu trả lời tiếng Hàn | HRO는... | |
| **active** | Mặc định mở rộng? | true/false | |

### 3. Timeline Sheet (GID: 3)

| Tên cột | Mô tả | Ví dụ | Bắt buộc |
|---------|-------|-------|----------|
| **id** | Mã định danh | 1, 2, 3 | ✅ |
| **time** | Thời gian | 21/10/2020, 3/2021 | ✅ |
| **image** | Đường dẫn ảnh | /landing-page/early-stage.jpg | ✅ |
| **totalMatches** | Tổng số trận | 5 | |
| **winMatches** | Số trận thắng | 3 | |
| **loseMatches** | Số trận thua | 2 | |
| **competitionResultsEn** | Kết quả (EN) | Cup2023-3rd | |
| **competitionResultsVi** | Kết quả (VI) | Hạng 3 Cup2023 | |
| **competitionResultsJa** | Kết quả (JA) | Cup2023 3位 | |
| **competitionResultsKo** | Kết quả (KO) | Cup2023 3위 | |
| **titleEn** | Tiêu đề (EN) | Early stage | ✅ |
| **titleVi** | Tiêu đề (VI) | Giai đoạn đầu | |
| **titleJa** | Tiêu đề (JA) | 初期段階 | |
| **titleKo** | Tiêu đề (KO) | 초기 단계 | |
| **descriptionEn** | Mô tả (EN) | Early stage description | ✅ |
| **descriptionVi** | Mô tả (VI) | Mô tả giai đoạn đầu | |
| **descriptionJa** | Mô tả (JA) | 初期段階の説明 | |
| **descriptionKo** | Mô tả (KO) | 초기 단계 설명 | |
| **active** | Hiển thị? | true/false | ✅ |

**Lưu ý:** Màu chấm Timeline tự động xoay vòng: đỏ → xanh lá → xanh dương → vàng → xanh cyan

### 4. Stats Sheet (GID: 4)

| Tên cột | Mô tả | Ví dụ | Bắt buộc |
|---------|-------|-------|----------|
| **id** | Mã định danh | 1, 2, 3 | ✅ |
| **icon** | Icon class | ri-time-line, ri-user-line | ✅ |
| **color** | Màu sắc | primary, warning, success, info | ✅ |
| **value** | Giá trị số | 4, 40, 3 | ✅ |
| **titleEn** | Tiêu đề (EN) | Years Active | ✅ |
| **titleVi** | Tiêu đề (VI) | Năm hoạt động | |
| **titleJa** | Tiêu đề (JA) | 活動年数 | |
| **titleKo** | Tiêu đề (KO) | 활동 연수 | |
| **active** | Hiển thị? | true/false | ✅ |

## Giá trị màu sắc (Color values)

- `primary` - Xanh dương
- `secondary` - Tím
- `error` - Đỏ
- `warning` - Cam/Vàng
- `info` - Xanh da trời
- `success` - Xanh lá

## Setup trong Google Sheets

### Bước 1: Tạo Google Sheet mới
1. Tạo file Google Sheets mới
2. Tạo các tab với tên tương ứng
3. Copy cấu trúc cột vào từng tab

### Bước 2: Chia sẻ Google Sheet
1. Click nút **Share** ở góc trên bên phải
2. Click **"Change to anyone with the link"**
3. Đặt quyền là **"Viewer"**
4. Copy link

### Bước 3: Lấy thông tin cấu hình

#### Sheet ID
Từ URL: `https://docs.google.com/spreadsheets/d/1ABC123XYZ789/edit`
→ Sheet ID là: `1ABC123XYZ789`

#### GID (Tab ID)
Click vào tab → xem URL → `...edit#gid=0`
→ GID = `0` (cho tab đầu tiên)

## Data Validation (Khuyến nghị)

### Các cột TRUE/FALSE:
1. Chọn cột
2. Data → Data validation  
3. Criteria: Checkbox

### Cột Generation:
1. Data → Data validation
2. List of items: Gen 1,Gen 2,Gen 3,Gen 4

### Cột Color:
1. Data → Data validation
2. List of items: primary,secondary,error,warning,info,success

## Ví dụ dữ liệu mẫu

### Team Members:
```csv
ID,Name,Jersey,Generation,Captain,Pitcher,Active
1,Lê Tiến Dũng,22,Gen 3,TRUE,TRUE,TRUE
2,Nguyễn Thị Thu,89,Gen 3,,FALSE,TRUE
```

### Timeline:
```csv
id,time,image,titleEn,titleVi,descriptionEn,descriptionVi,active
1,21/10/2020,/landing-page/early-stage.jpg,Early stage,Giai đoạn đầu,Early stage description,Mô tả giai đoạn đầu,true
```

### Stats:
```csv
id,icon,color,value,titleEn,titleVi,active
1,ri-time-line,primary,4,Years Active,Năm hoạt động,true
2,ri-user-line,warning,40,Members,Thành viên,true
```

### FAQ:
```csv
id,questionEn,questionVi,answerEn,answerVi,active
panel1,What is HRO?,HRO là gì?,HRO is a baseball club,HRO là CLB bóng chày,true
```

## Troubleshooting

### Dữ liệu không hiển thị
1. ✅ Kiểm tra Sheet đã được share public
2. ✅ Kiểm tra Sheet ID và GID đúng
3. ✅ Kiểm tra cột Active = TRUE
4. ✅ Kiểm tra không có dòng trống ở giữa

### Performance
- Dữ liệu được cache tạm thời
- Cập nhật khi rebuild/redeploy
- Test local trước khi deploy production

### Debug
- Xem console log trong browser
- Kiểm tra Network tab để xem API calls

## Logic ngôn ngữ fallback

Nếu ngôn ngữ hiện tại không có dữ liệu:
1. Fallback về tiếng Anh
2. Nếu tiếng Anh cũng không có → ẩn mục đó

---

Nếu cần hỗ trợ, liên hệ tech team qua Issues trên GitHub.