import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// arco按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import path from "path";
const nodeResolve = (dir) => path.resolve(__dirname, ".", dir);
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ArcoResolver()],
		}),
		Components({
			resolvers: [
				ArcoResolver({
					sideEffect: true,
				}),
			],
		}),
	],
	base: "/",
	server: {
		proxy: {},
	},
	build: {
		rollupOptions: {
			output: {
				//https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
				sanitizeFileName(name) {
					// eslint-disable-next-line no-control-regex  无效字符会导致gitpages 加载失败
					const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
					const DRIVE_LETTER_REGEX = /^[a-z]:/i;
					const match = DRIVE_LETTER_REGEX.exec(name);
					const driveLetter = match ? match[0] : "";
					return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
				},
				dir: "docs",
			},
		},
	},
	resolve: {
		alias: {
			"@": nodeResolve("src"),
		},
	},
});
