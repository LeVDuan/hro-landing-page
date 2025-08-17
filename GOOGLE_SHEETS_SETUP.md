# Google Sheets Setup for Timeline and Stats

This document explains how to set up Google Sheets for Timeline and Stats components.

## Environment Variables

Add these to your `.env.local` file:

```bash
# Existing variables
NEXT_PUBLIC_GOOGLE_SHEET_ID=your_sheet_id
NEXT_PUBLIC_SHEET_GID=0
NEXT_PUBLIC_FAQ_GID=2

# New variables for Timeline and Stats
NEXT_PUBLIC_TIMELINE_GID=3
NEXT_PUBLIC_STATS_GID=4
```

## Sheet Structure

### Timeline Sheet (GID: 3)

Required columns:

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| id | string | Unique identifier | 1, 2, 3, etc. |
| time | string | Date/time display | "21/10/2020", "3/2021" |
| image | string | Image path | "/landing-page/early-stage.jpg" |
| totalMatches | string | Total matches (optional) | "5" |
| winMatches | string | Win matches (optional) | "3" |
| loseMatches | string | Lose matches (optional) | "2" |
| competitionResults | string | Competition results (optional) | "Cup2023-3rd" |
| titleEn | string | Title in English | "Early stage" |
| titleVi | string | Title in Vietnamese | "Giai đoạn đầu" |
| titleJa | string | Title in Japanese | "初期段階" |
| titleKo | string | Title in Korean | "초기 단계" |
| descriptionEn | string | Description in English | "Early stage description" |
| descriptionVi | string | Description in Vietnamese | "Mô tả giai đoạn đầu" |
| descriptionJa | string | Description in Japanese | "初期段階の説明" |
| descriptionKo | string | Description in Korean | "초기 단계 설명" |
| active | string | Active status | "true", "false", "1", "0" |

### Stats Sheet (GID: 4)

Required columns:

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| id | string | Unique identifier | 1, 2, 3, etc. |
| icon | string | Icon class name | "ri-time-line", "ri-user-line" |
| color | string | Theme color | "primary", "warning", "success", "info" |
| value | string | Numeric value | "4", "40", "3", "10" |
| titleEn | string | Title in English | "Years Active" |
| titleVi | string | Title in Vietnamese | "Năm hoạt động" |
| titleJa | string | Title in Japanese | "活動年数" |
| titleKo | string | Title in Korean | "활동 연수" |
| active | string | Active status | "true", "false", "1", "0" |

## Sample Data

### Timeline Sheet Example:

```csv
id,time,image,totalMatches,winMatches,loseMatches,competitionResults,titleEn,titleVi,titleJa,titleKo,descriptionEn,descriptionVi,descriptionJa,descriptionKo,active
1,21/10/2020,/landing-page/early-stage.jpg,,,,"Early stage","Giai đoạn đầu","初期段階","초기 단계","Early stage description","Mô tả giai đoạn đầu","初期段階の説明","초기 단계 설명",true
2,3/2021,/landing-page/team-image.jpg,,,,"Official","Chính thức","公式","공식","Official description","Mô tả chính thức","公式な説明","공식 설명",true
3,7/2023,/landing-page/nationalCup2023.png,5,3,2,Cup2023-3rd,"Cup2023","Cup2023","Cup2023","Cup2023","Cup2023 description","Mô tả Cup2023","Cup2023の説明","Cup2023 설명",true
```

**Note:** Timeline dot colors are automatically assigned in sequence: red (error) → green (success) → blue (primary) → yellow (warning) → cyan (info), then repeats.

### Stats Sheet Example:

```csv
id,icon,color,value,titleEn,titleVi,titleJa,titleKo,active
1,ri-time-line,primary,4,"Years Active","Năm hoạt động","活動年数","활동 연수",true
2,ri-user-line,warning,40,"Members","Thành viên","メンバー","멤버",true
3,ri-award-line,success,3,"Tournaments Participated","Giải đấu tham gia","参加トーナメント","참가 토너먼트",true
4,ri-calendar-event-line,info,10,"Events","Sự kiện","イベント","이벤트",true
```

## Fallback Behavior

- If Google Sheets data is unavailable, components will fall back to static data
- If a translation for current locale is empty, it will fallback to English
- Components cache data for performance optimization

## Testing

1. Set up your Google Sheets with the above structure
2. Update environment variables
3. Restart your development server
4. Check components render with Google Sheets data
5. Test fallback by temporarily breaking the sheet URL