# Hướng dẫn Setup Google Sheets cho HRO Team Data (Version 2.0)

## Tổng quan

Hệ thống cho phép quản lý thông tin thành viên CLB thông qua 1 bảng Google Sheets duy nhất, giúp dễ dàng cập nhật mà không cần sửa code.

## Ưu điểm của phương pháp này

- ✅ **Đơn giản**: Chỉ cần 1 bảng duy nhất
- ✅ **Dễ quản lý**: Mỗi thành viên 1 dòng, dễ nhìn và chỉnh sửa
- ✅ **Linh hoạt**: Thành viên có thể có nhiều vai trò cùng lúc
- ✅ **Hỗ trợ Table format**: Có thể dùng Format as Table trong Google Sheets

## Cấu trúc Google Sheet

### Bước 1: Tạo Google Sheet mới

Tạo một Google Sheet với các cột sau (thứ tự không quan trọng):

| Tên cột | Mô tả | Ví dụ | Bắt buộc |
|---------|-------|-------|----------|
| **ID** | Mã định danh duy nhất | 1, 2, 3... | ✅ |
| **Name** | Tên đầy đủ | Lê Tiến Dũng | ✅ |
| **Jersey** | Số áo (chỉ số) | 22 | ✅ |
| **Generation** | Thế hệ và trường | Gen 2 - K66 HUST | ✅ |
| **Image** | Đường dẫn ảnh | /avatars/tienDung.png | ✅ |
| **Color** | Màu hiển thị | error, warning, success | |
| **Captain** | Là đội trưởng? | TRUE/FALSE hoặc để trống | |
| **President** | Là chủ tịch? | TRUE/FALSE hoặc để trống | |
| **Vice_President** | Là phó chủ tịch? | TRUE/FALSE hoặc để trống | |
| **Vice_Captain** | Là phó đội? | TRUE/FALSE hoặc để trống | |
| **Manager** | Là quản lý? | TRUE/FALSE hoặc để trống | |
| **Media** | Thuộc team media? | TRUE/FALSE hoặc để trống | |
| **Media_Head** | Là trưởng media? | TRUE/FALSE hoặc để trống | |
| **Pitcher** | Chơi vị trí Pitcher? | TRUE/FALSE hoặc để trống | |
| **Catcher** | Chơi vị trí Catcher? | TRUE/FALSE hoặc để trống | |
| **Infielder** | Chơi nội dã? | TRUE/FALSE hoặc để trống | |
| **Outfielder** | Chơi ngoại dã? | TRUE/FALSE hoặc để trống | |
| **Position_Detail** | Chi tiết vị trí | B1/B2, SS/OF | |
| **Batting_Throwing** | B/T | L/L, R/R, L/R | |
| **Former_Leader** | Là lãnh đạo cũ? | TRUE/FALSE hoặc để trống | |
| **Former_Role** | Chức vụ cũ | Captain Gen 1, President Gen 2 | |
| **Active** | Đang hoạt động? | TRUE/FALSE | ✅ |

### Giá trị cho cột Color

- `primary` - Màu chính (xanh dương)
- `secondary` - Màu phụ (tím)
- `error` - Màu đỏ
- `warning` - Màu cam
- `info` - Màu xanh da trời
- `success` - Màu xanh lá

### Giá trị TRUE/FALSE

Có thể dùng bất kỳ format nào sau:
- `TRUE` / `FALSE`
- `1` / `0`
- `Yes` / `No`
- `X` / để trống
- Hoặc chỉ để trống nếu là FALSE

## Ví dụ thực tế

### Thành viên có nhiều vai trò

| ID | Name | Jersey | Generation | Captain | Vice_President | Manager | Pitcher | Position_Detail | Active |
|----|------|--------|------------|---------|----------------|---------|---------|-----------------|--------|
| 1 | Trần Tiến Đạt | 18 | Gen 2 - K66 HUST | | TRUE | TRUE | TRUE | Pitcher | TRUE |

→ Đạt vừa là Vice President, vừa là Manager, vừa là Pitcher

### Thành viên chơi nhiều vị trí

| ID | Name | Infielder | Outfielder | Position_Detail | Batting_Throwing |
|----|------|-----------|------------|-----------------|------------------|
| 2 | Đặng Hải Anh | TRUE | TRUE | B3/OF | L/R |

→ Hải Anh có thể chơi cả B3 và OF

## Setup trong Google Sheets

### 1. Format as Table (Tùy chọn)

Bạn có thể format bảng để dễ nhìn hơn:
1. Chọn toàn bộ data
2. Format → Format as table
3. Chọn style bạn thích

### 2. Chia sẻ Google Sheet

1. Click nút **Share** ở góc trên bên phải
2. Click **"Change to anyone with the link"**
3. Đặt quyền là **"Viewer"**
4. Copy link

### 3. Lấy thông tin cấu hình

#### Sheet ID
Từ URL: `https://docs.google.com/spreadsheets/d/1ABC123XYZ789/edit`
→ Sheet ID là: `1ABC123XYZ789`

#### GID (Tab ID)
Click vào tab → xem URL → `...edit#gid=0`
→ GID = `0` (thường là 0 cho tab đầu tiên)

## Cấu hình trong file .env

```env
# Google Sheets Configuration (Single Table)
NEXT_PUBLIC_GOOGLE_SHEET_ID="1ABC123XYZ789"
NEXT_PUBLIC_SHEET_GID="0"
```

## Tips và Lưu ý

### 1. Thứ tự cột không quan trọng
Bạn có thể sắp xếp cột theo ý thích, hệ thống sẽ tự động nhận diện qua tên cột.

### 2. Có thể thêm cột mới
Nếu cần thêm thông tin khác (email, phone...), chỉ cần thêm cột mới. Hệ thống sẽ bỏ qua các cột không nhận diện được.

### 3. Filter và Sort
Bạn có thể dùng các tính năng Filter và Sort của Google Sheets để quản lý dễ dàng hơn.

### 4. Data Validation
Khuyến nghị setup Data Validation cho các cột TRUE/FALSE:
1. Chọn cột
2. Data → Data validation
3. Criteria: Checkbox hoặc List of items (TRUE,FALSE)

### 5. Conditional Formatting
Có thể dùng Conditional Formatting để highlight:
- Thành viên inactive (Active = FALSE)
- Leaders (Captain/President = TRUE)
- Etc.

## Troubleshooting

### Dữ liệu không hiển thị
1. ✅ Kiểm tra Sheet đã được share public chưa
2. ✅ Kiểm tra Sheet ID và GID đúng chưa
3. ✅ Kiểm tra có dòng trống ở giữa không
4. ✅ Kiểm tra cột Active = TRUE

### Performance
- Data được cache 1 giờ ở server
- Rebuild/redeploy để cập nhật ngay lập tức

### Debug
Xem console log trong browser để debug nếu có lỗi

## Template mẫu

Bạn có thể copy template mẫu tại:
[Link to template - sẽ được cung cấp sau]

---

Nếu cần hỗ trợ, liên hệ tech team qua Issues trên GitHub.