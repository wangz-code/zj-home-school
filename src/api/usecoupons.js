import axios from "axios";
import qs from "query-string";

const instance = axios.create({
	baseURL: "/api",
});

// 编码
const encodeData = function (params = {}) {
	for (const key in params) {
		const type = Object.prototype.toString.call(params[key]);
		if (type == "[object Object]" || type == "[object Array]") {
			params[key] = JSON.stringify(params[key]);
		}
	}
	return qs.stringify(params);
};

// 查询电子券
export function queryCoupons(params) {
	return instance.get("/getcouponinfo", { params });
}

// 领取使用电子券
export function useCoupons(params, data) {
	return instance.post("/reveivecouponanduse", encodeData({ data }), { params });
}
