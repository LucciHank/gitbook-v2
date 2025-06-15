# Tài liệu ToMoi

Trang tài liệu chính thức của ToMoi với thiết kế hiện đại xây dựng bằng Jekyll.

## Các tính năng

- Thiết kế hiện đại, phản hồi nhanh
- Giao diện giống GitBook với màu chủ đạo #df2626
- Hỗ trợ Dark Mode
- Tìm kiếm dễ dàng
- Hỗ trợ SEO tích hợp
- Tối ưu hóa cho các công cụ tìm kiếm
- Đánh dấu trang và điều hướng
- Dễ dàng tùy chỉnh

## Cài đặt

### 1. Cài đặt Ruby và Jekyll

Trước tiên, bạn cần cài đặt Ruby và Jekyll:

#### Windows:

1. Tải và cài đặt Ruby+Devkit từ [RubyInstaller for Windows](https://rubyinstaller.org/downloads/)
2. Trong quá trình cài đặt, đánh dấu vào "Add Ruby executables to your PATH"
3. Mở Command Prompt và cài đặt Jekyll và Bundler:

```bash
gem install jekyll bundler
```

#### macOS:

1. Ruby đã được cài đặt sẵn trên macOS. Tuy nhiên, bạn nên cài đặt một phiên bản mới hơn bằng Homebrew:

```bash
# Cài đặt Homebrew nếu chưa có
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Cài đặt Ruby
brew install ruby

# Thêm Ruby vào PATH
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Cài đặt Jekyll và Bundler
gem install jekyll bundler
```

#### Linux (Ubuntu/Debian):

```bash
sudo apt-get update
sudo apt-get install ruby-full build-essential

# Cài đặt Jekyll và Bundler
gem install jekyll bundler
```

### 2. Chạy trang web cục bộ

Sau khi cài đặt Ruby và Jekyll, bạn có thể chạy trang web này cục bộ bằng cách:

1. Clone repository này:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Cài đặt các dependencies:

```bash
bundle install
```

3. Chạy máy chủ phát triển:

```bash
bundle exec jekyll serve
```

4. Truy cập trang web tại địa chỉ: http://localhost:4000

## Triển khai trên Netlify

Dự án này được cấu hình để triển khai trên Netlify. Để triển khai:

1. Đăng nhập vào [Netlify](https://www.netlify.com/)
2. Nhấp vào "New site from Git"
3. Chọn repository của bạn
4. Cấu hình triển khai:
   - Build command: `bundle exec jekyll build`
   - Publish directory: `_site`
5. Nhấp vào "Deploy site"

Tệp `netlify.toml` đã được cấu hình với các thiết lập cần thiết.

## Tối ưu SEO

Trang web đã được tối ưu hóa cho SEO với các tính năng sau:

- Thẻ meta đầy đủ cho từng trang
- Schema.org structured data
- Open Graph và Twitter Cards
- Sitemap tự động
- Robots.txt
- Canonical URLs

Để tùy chỉnh SEO cho từng trang, thêm front matter sau vào tệp Markdown:

```yaml
---
title: Tiêu đề trang
description: Mô tả ngắn về trang (dưới 160 ký tự)
keywords: từ khóa, phân cách, bằng dấu phẩy
image: /path/to/image.jpg
---
```

## Cấu trúc thư mục

```
.
├── _config.yml                  # Cấu hình Jekyll
├── _includes                    # Các thành phần HTML được tái sử dụng
├── _layouts                     # Các layout trang
├── _posts                       # Bài viết blog
├── _pages                       # Các trang tĩnh
├── _others                      # Các trang khác
├── assets                       # Tài nguyên tĩnh (CSS, JS, images)
│   └── gitbook                  # CSS, JS và images của GitBook
│       ├── custom.css           # CSS tùy chỉnh chính
│       ├── custom-local.css     # CSS tùy chỉnh cục bộ
│       └── images               # Hình ảnh
├── netlify.toml                 # Cấu hình Netlify
├── sitemap.xml                  # Sitemap
├── robots.txt                   # Robots.txt
└── README.md                    # Tệp này
```

## Tùy chỉnh

### Thay đổi tiêu đề và mô tả

Bạn có thể thay đổi tiêu đề và mô tả của trang web trong file `_config.yml`:

```yaml
title: Your Site Title
longtitle: Your Site Long Title
description: Your site description
```

### Thay đổi màu sắc và phông chữ

Bạn có thể thay đổi màu sắc và các biến CSS trong file `assets/gitbook/custom-local.css`:

```css
:root {
  --primary-color: #df2626;  /* Màu chủ đạo */
  --secondary-color: #c61f1f; /* Màu phụ */
  --accent-color: #f85353; /* Màu nhấn */
  /* ... */
}
```

### Thêm bài viết mới

Để thêm bài viết mới, tạo một file trong thư mục `_posts` với định dạng sau:

```markdown
---
title: Tiêu đề bài viết
date: 2023-01-01
categories: [category1, category2]
tags: [tag1, tag2]
description: Mô tả ngắn về bài viết
---

Nội dung bài viết ở đây.
```

### Thêm trang mới

Để thêm trang mới, tạo một file trong thư mục `_pages` với định dạng sau:

```markdown
---
title: Tiêu đề trang
layout: post
permalink: /your-page-url/
description: Mô tả ngắn về trang
---

Nội dung trang ở đây.
```

## Giấy phép

MIT
