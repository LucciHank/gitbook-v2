---
layout: home
title: Hướng dẫn nhanh
permalink: /
description: Tài liệu hướng dẫn sử dụng dịch vụ tại TomOi.vn
---

# Hướng dẫn nhanh

<div class="guide-intro">
  <p>Chào mừng bạn đến với tài liệu hướng dẫn của TomOi.vn! Trang này cung cấp tổng quan về cách sử dụng tài liệu và tìm kiếm thông tin bạn cần.</p>
</div>

<div class="guide-section" id="tim-kiem">
  <h2>Tìm kiếm thông tin</h2>
  <div class="content-box">
    <p>Bạn có thể tìm kiếm thông tin trong tài liệu này bằng nhiều cách:</p>
    
    <ul>
      <li><strong>Thanh tìm kiếm:</strong> Sử dụng thanh tìm kiếm ở góc trên bên phải hoặc nhấn <kbd>Ctrl</kbd> + <kbd>K</kbd> để mở hộp tìm kiếm.</li>
      <li><strong>Menu bên trái:</strong> Duyệt qua các danh mục và trang trong menu điều hướng bên trái.</li>
      <li><strong>Mục lục:</strong> Sử dụng mục lục để di chuyển đến các phần cụ thể trong trang hiện tại.</li>
    </ul>
    
    <div class="info-box">
      <div class="info-icon"><i class="fa fa-info-circle"></i></div>
      <div class="info-content">
        <p>Bạn cũng có thể sử dụng phím tắt <kbd>Ctrl</kbd> + <kbd>K</kbd> để mở hộp tìm kiếm từ bất kỳ trang nào.</p>
      </div>
    </div>
  </div>
</div>

<div class="guide-section" id="cau-truc">
  <h2>Cấu trúc tài liệu</h2>
  <div class="content-box">
    <p>Tài liệu được tổ chức thành các phần chính sau:</p>
    
    <ul>
      <li><strong>Giới thiệu:</strong> Thông tin tổng quan về TomOi.vn và các dịch vụ.</li>
      <li><strong>Hướng dẫn mua hàng:</strong> Các hướng dẫn chi tiết về quy trình mua hàng, thanh toán và quản lý tài khoản.</li>
      <li><strong>Hướng dẫn cài đặt và sử dụng:</strong> Hướng dẫn cài đặt và sử dụng các sản phẩm.</li>
      <li><strong>Chính sách bảo hành:</strong> Thông tin về chính sách bảo hành và hỗ trợ.</li>
      <li><strong>Ưu đãi:</strong> Thông tin về các chương trình khuyến mãi và ưu đãi.</li>
      <li><strong>Câu hỏi thường gặp:</strong> Giải đáp các câu hỏi phổ biến.</li>
    </ul>
  </div>
</div>

<div class="guide-section" id="ho-tro">
  <h2>Hỗ trợ thêm</h2>
  <div class="content-box">
    <p>Nếu bạn không tìm thấy thông tin cần thiết trong tài liệu này, vui lòng liên hệ với chúng tôi qua:</p>
    
    <ul>
      <li><strong>Hotline:</strong> 1900 xxxx</li>
      <li><strong>Email:</strong> support@tomoi.vn</li>
      <li><strong>Live Chat:</strong> Có sẵn trên website từ 8:00 - 22:00 hàng ngày</li>
    </ul>
    
    <div class="alert-box">
      <div class="alert-icon"><i class="fa fa-exclamation-triangle"></i></div>
      <div class="alert-content">
        <p>Đội ngũ hỗ trợ của chúng tôi sẽ phản hồi trong vòng 5-10 phút kể từ khi nhận được yêu cầu của bạn.</p>
      </div>
    </div>
  </div>
</div>

<div class="last-updated">
  <p>Cập nhật lần cuối: {% assign date_format = site.minima.date_format | default: "%d/%m/%Y" %}{{ site.time | date: date_format }}</p>
</div>

<style>
/* Apple-like design styles */
.guide-intro {
  background-color: rgba(223, 38, 38, 0.05);
  border-left: 4px solid #df2626;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 6px;
  font-size: 18px;
}

.guide-section {
  margin-bottom: 40px;
}

.guide-section h2 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
}

.content-box {
  background-color: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.content-box ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 20px;
}

.content-box ul li {
  padding-left: 25px;
  position: relative;
  margin-bottom: 12px;
}

.content-box ul li:before {
  content: "•";
  color: #df2626;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 18px;
}

.info-box, .alert-box {
  display: flex;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  align-items: flex-start;
}

.info-box {
  background-color: #f0f7ff;
  border: 1px solid #c7e0ff;
}

.alert-box {
  background-color: #fff0f0;
  border: 1px solid #ffd7d7;
}

.info-icon, .alert-icon {
  margin-right: 15px;
  font-size: 24px;
}

.info-icon {
  color: #0066cc;
}

.alert-icon {
  color: #df2626;
}

.info-content, .alert-content {
  flex-grow: 1;
}

kbd {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  color: #333;
  display: inline-block;
  font-size: 0.8em;
  line-height: 1.4;
  margin: 0 0.1em;
  padding: 0.2em 0.6em;
  white-space: nowrap;
}

.navigation-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
}

.next-button, .prev-button {
  display: inline-flex;
  align-items: center;
  background-color: #df2626;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
}

.next-button:hover, .prev-button:hover {
  background-color: #c61f1f;
}

.button-text {
  margin-right: 10px;
}

.last-updated {
  margin-top: 40px;
  color: #666;
  font-size: 14px;
  text-align: right;
}
</style> 