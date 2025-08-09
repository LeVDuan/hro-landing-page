# Hướng dẫn Setup Google Sheets cho HRO Team Data

## Tổng quan
Hệ thống cho phép quản lý thông tin thành viên CLB thông qua Google Sheets, giúp dễ dàng cập nhật mà không cần sửa code.

## Cấu trúc Google Sheets

### 1. Tạo Google Sheet mới
Tạo một Google Sheet mới với 2 tabs:

#### Tab 1: Members (Thông tin cơ bản)
| ID | Name | Jersey Number | Generation | Image | Color |
|----|------|---------------|------------|-------|-------|
| 1 | Lê Tiến Dũng | 22 | Gen 2 - K66 HUST | /avatars/tienDung.png | var(--mui-palette-error-mainOpacity) |
| 2 | Trần Tiến Đạt | 18 | Gen 2 - K66 HUST | /avatars/dat.png | var(--mui-palette-warning-mainOpacity) |

**Lưu ý về các cột:**
- **ID**: Số duy nhất cho mỗi thành viên
- **Name**: Tên đầy đủ
- **Jersey Number**: Số áo (chỉ số, không có dấu #)
- **Generation**: Thế hệ và trường (ví dụ: Gen 2 - K66 HUST)
- **Image**: Đường dẫn ảnh trong folder public (ví dụ: /avatars/tienDung.png)
- **Color**: Màu hiển thị, có thể dùng:
  - `var(--mui-palette-primary-mainOpacity)`
  - `var(--mui-palette-secondary-mainOpacity)`
  - `var(--mui-palette-error-mainOpacity)`
  - `var(--mui-palette-warning-mainOpacity)`
  - `var(--mui-palette-info-mainOpacity)`
  - `var(--mui-palette-success-mainOpacity)`

#### Tab 2: Roles (Chức vụ và vị trí)
| Member ID | Role Type | Role | Position | Batting Throwing | Order | Active |
|-----------|-----------|------|----------|------------------|-------|--------|
| 1 | leadership | Captain | | | 1 | TRUE |
| 2 | leadership | Vice president | | | 2 | TRUE |
| 2 | management | | | | 1 | TRUE |
| 2 | player | | Pitcher | L/L | 3 | TRUE |

**Lưu ý về các cột:**
- **Member ID**: ID tương ứng với tab Members
- **Role Type**: Loại vai trò
  - `leadership`: Lãnh đạo (Captain, President, Vice president, Vice captain)
  - `management`: Ban quản lý
  - `player`: Cầu thủ
  - `media`: Đội media
  - `predecessor`: Lãnh đạo các thế hệ trước
- **Role**: Chức vụ cụ thể (cho leadership và predecessor)
- **Position**: Vị trí thi đấu (Pitcher, Catcher, B1, B2, B3, SS, OF)
- **Batting Throwing**: B/T (L/L, R/R, L/R, R/L)
- **Order**: Thứ tự hiển thị
- **Active**: TRUE/FALSE - đang hoạt động hay không

### 2. Chia sẻ Google Sheet

1. Click nút "Share" ở góc trên bên phải
2. Chọn "Anyone with the link"
3. Đặt quyền là "Viewer"
4. Copy link

### 3. Lấy thông tin cấu hình

#### Sheet ID:
Từ URL: `https://docs.google.com/spreadsheets/d/1ABC123XYZ789/edit`
Sheet ID là: `1ABC123XYZ789`

#### GID cho mỗi tab:
- Click vào tab Members → xem URL → `...edit#gid=0` → GID = 0
- Click vào tab Roles → xem URL → `...edit#gid=123456` → GID = 123456

### 4. Cấu hình trong file .env

```env
NEXT_PUBLIC_GOOGLE_SHEET_ID="1ABC123XYZ789"
NEXT_PUBLIC_MEMBERS_GID="0"
NEXT_PUBLIC_ROLES_GID="123456"
```

## Ví dụ thực tế

### Thành viên có nhiều vai trò:
Trần Tiến Đạt (ID: 2):
- Là Vice president (leadership)
- Là Manager (management)  
- Là Pitcher (player)

Trong tab Roles sẽ có 3 dòng:
```
2 | leadership | Vice president | | | 2 | TRUE
2 | management | | | | 1 | TRUE
2 | player | | Pitcher | L/L | 3 | TRUE
```

### Thành viên chơi nhiều vị trí:
Đặng Hải Anh có thể chơi B3 và OF:
```
3 | player | | B3 | L/R | 1 | TRUE
3 | player | | OF | L/R | 2 | TRUE
```

## Troubleshooting

### Dữ liệu không hiển thị:
1. Kiểm tra Sheet đã được share public chưa
2. Kiểm tra Sheet ID và GID đúng chưa
3. Kiểm tra format dữ liệu trong sheet
4. Xem console log để debug

### Performance:
- Data được cache 1 giờ ở server-side
- Data được cache 5 phút ở client-side
- Rebuild site để cập nhật ngay lập tức

## Tips

1. **Backup data**: Luôn backup sheet trước khi thay đổi lớn
2. **Test trước**: Test với ít data trước khi nhập toàn bộ
3. **Đặt tên ảnh chuẩn**: Dùng convention: tênViếtLiền.png (camelCase)
4. **Order field**: Dùng để sắp xếp thứ tự hiển thị