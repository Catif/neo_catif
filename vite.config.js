import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        {
          vue: [
            "ref",
            "reactive",
            "computed",
            "watch",
            "onMounted",
            "onUnmounted",
            "provide",
            "inject",
          ],
        },
        {
          "vue-router": ["useRoute", "useRouter"],
        },
      ],
    }),
    Components({
      extensions: ["vue"],
      directoryAsNamespace: true,
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
