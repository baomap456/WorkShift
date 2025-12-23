import axios from "axios";

// Tạo một instance (bản sao) của axios với cấu hình mặc định
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Quá 10s không thấy server trả lời thì báo lỗi
});

// Interceptor: Cái phễu lọc
// Trước khi gửi request đi, tự động đính kèm Token (nếu có)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // Lấy token từ kho
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;