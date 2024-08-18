import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import styleImport from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    react(),
    // styleImport({
    //   libs: [{
    //     libraryName: 'theme.less',
    //     esModule: true,
    //     resolveStyle: () => {
    //       return `theme.less`;
    //     }
    //   }]
    // })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: 'wb-components',
        replacement: path.resolve(__dirname, './packages/index.tsx')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname,'theme.less')}";`, // 确保这里的路径是正确的
        javascriptEnabled: true,
      },
    },
  },
})
