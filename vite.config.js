import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";

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
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
