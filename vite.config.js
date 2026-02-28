import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // 启用 React 支持（JSX 转换、Fast Refresh 等)
  base: '/',

  // 开发服务器配置
  server: {
    host: '10.7.26.84',
    port: 3000,        // 自定义端口
    open: true,        // 启动时自动打开浏览器
    // proxy: { ... }  // 如需代理 API，可在此配置
  },

  // 构建输出配置
  build: {
    outDir: 'dist',    // 生产构建输出目录
    sourcemap: false,   // 生成 source map 方便调试
  },
  preview: {
    host: '10.7.26.84',
    port: 3000
  }
});