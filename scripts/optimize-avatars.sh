#!/bin/bash

# Avatar optimization script
# Renames files to ID and converts to WebP

echo "🖼️  Starting avatar optimization..."

# Create backup directory
mkdir -p public/avatars/backup
echo "📁 Created backup directory"

# Copy all current images to backup
cp public/avatars/*.png public/avatars/backup/ 2>/dev/null
cp public/avatars/*.jpg public/avatars/backup/ 2>/dev/null
echo "✅ Backed up original images"

# Create mapping file for reference
cat > public/avatars/mapping.txt << 'EOF'
1=tienDung.png
2=phuongThao.png
3=chi.png
4=xuanDuc.png
5=doanHoang.png
6=C_vuGiap.png
7=dinhDuc.png
8=caoKhoa.png
9=duanLe.png
10=huongGen1.png
11=co-found-Ha.jpg
12=co-found-Chau.jpg
EOF

echo "📝 Created mapping reference file"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Installing webp tools..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install webp
    else
        sudo apt-get install webp
    fi
fi

# Convert specific files to WebP with ID names
echo "🔄 Converting images to WebP..."
cd public/avatars

# Manual conversion with correct IDs
cwebp -q 85 "tienDung.png" -o "1.webp" 2>/dev/null && echo "  ✓ tienDung.png → 1.webp"
cwebp -q 85 "phuongThao.png" -o "2.webp" 2>/dev/null && echo "  ✓ phuongThao.png → 2.webp"
cwebp -q 85 "chi.png" -o "3.webp" 2>/dev/null && echo "  ✓ chi.png → 3.webp"
cwebp -q 85 "xuanDuc.png" -o "4.webp" 2>/dev/null && echo "  ✓ xuanDuc.png → 4.webp"
cwebp -q 85 "doanHoang.png" -o "5.webp" 2>/dev/null && echo "  ✓ doanHoang.png → 5.webp"
cwebp -q 85 "C_vuGiap.png" -o "6.webp" 2>/dev/null && echo "  ✓ C_vuGiap.png → 6.webp"
cwebp -q 85 "dinhDuc.png" -o "7.webp" 2>/dev/null && echo "  ✓ dinhDuc.png → 7.webp"
cwebp -q 85 "caoKhoa.png" -o "8.webp" 2>/dev/null && echo "  ✓ caoKhoa.png → 8.webp"
cwebp -q 85 "duanLe.png" -o "9.webp" 2>/dev/null && echo "  ✓ duanLe.png → 9.webp"
cwebp -q 85 "huongGen1.png" -o "10.webp" 2>/dev/null && echo "  ✓ huongGen1.png → 10.webp"
cwebp -q 85 "co-found-Ha.jpg" -o "11.webp" 2>/dev/null && echo "  ✓ co-found-Ha.jpg → 11.webp"
cwebp -q 85 "co-found-Chau.jpg" -o "12.webp" 2>/dev/null && echo "  ✓ co-found-Chau.jpg → 12.webp"

# Convert remaining files (keeping original names for now)
for file in *.png *.jpg; do
  if [ -f "$file" ]; then
    # Skip if already converted
    case "$file" in
      tienDung.png|phuongThao.png|chi.png|xuanDuc.png|doanHoang.png|C_vuGiap.png|dinhDuc.png|caoKhoa.png|duanLe.png|huongGen1.png|co-found-Ha.jpg|co-found-Chau.jpg)
        # Already converted above
        ;;
      *)
        # Convert with original name (for files not in mapping)
        base="${file%.*}"
        cwebp -q 85 "$file" -o "${base}.webp" 2>/dev/null && echo "  ✓ $file → ${base}.webp"
        ;;
    esac
  fi
done

# Add default avatar if exists
if [ -f "default.png" ]; then
  cwebp -q 85 "default.png" -o "default.webp" 2>/dev/null && echo "  ✓ default.png → default.webp"
fi

echo ""
echo "✨ Avatar optimization complete!"
echo "📊 Results:"
echo "  - WebP files created: $(ls -1 *.webp 2>/dev/null | wc -l)"
echo "  - Original files backed up in: public/avatars/backup/"
echo "  - Mapping saved in: public/avatars/mapping.txt"
echo ""
echo "📝 Next steps:"
echo "  1. Remove the Image column from Google Sheets"
echo "  2. Images will now auto-map from member IDs (1.webp, 2.webp, etc.)"
echo "  3. Original PNG/JPG files can be deleted after verification"