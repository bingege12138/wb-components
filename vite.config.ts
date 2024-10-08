import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// import styleImport from 'vite-plugin-style-import';
const { resolve } = path;
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsConfigFilePath: './tsconfig.build.json',
      outputDir: 'lib/types',
      insertTypesEntry: true,
    }),
    // typescript({
    //   check: false,
    //   target: 'es5',
    //   rootDir: resolve('packages/'),
    //   declaration: true,
    //   declarationDir: resolve('lib'),
    //   exclude: resolve('node_modules/**'),
    //   allowSyntheticDefaultImports: true,
    // }),
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
  build: {
    // 打包输出的目录
    outDir: 'lib',
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    cssTarget: 'chrome61',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('packages/index.tsx'),
      // 组件库名称
      name: 'WbComponents',
      // 文件名称, 打包结果举例: my-packages.umd.cjs
      fileName: 'wb-components',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: 'wb-components',
        replacement: path.resolve(__dirname, './packages/index.tsx'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, 'theme.less')}";`, // 确保这里的路径是正确的
        javascriptEnabled: true,
      },
    },
  },
});
