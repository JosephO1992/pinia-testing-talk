import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/tests/setup.js"],
	},
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
});
