<template>
	<div class="containers">
		<div class="parking-box">
			{{ pageName }}
		</div>
		<div class="car_input_box">
			<div>请输入正确的车牌</div>
			<div class="car_number_input">
				<div class="car_type">
					<div class="default_car" :class="{ active_car: activeNum === 0 }">
						<div class="" v-show="carNumber[0]">
							{{ carNumber[0] }}
						</div>
					</div>
					<div class="default_car default_car1" :class="{ active_car: activeNum === 1 }">
						<div class="" v-show="carNumber[1]">
							{{ carNumber[1] }}
						</div>
					</div>
					<div class="default_dot"></div>
					<div class="default_car" :class="{ active_car: activeNum === 2 }">
						<div class="" v-show="carNumber[2]">
							{{ carNumber[2] }}
						</div>
					</div>
					<div class="default_car" :class="{ active_car: activeNum === 3 }">
						<div class="" v-show="carNumber[3]">
							{{ carNumber[3] }}
						</div>
					</div>
					<div class="default_car" :class="{ active_car: activeNum === 4 }">
						<div class="" v-show="carNumber[4]">
							{{ carNumber[4] }}
						</div>
					</div>
					<div class="default_car" :class="{ active_car: activeNum === 5 }">
						<div class="" v-show="carNumber[5]">
							{{ carNumber[5] }}
						</div>
					</div>
					<div class="default_car" :class="{ active_car: activeNum === 6 }">
						<div class="" v-show="carNumber[6]">
							{{ carNumber[6] }}
						</div>
					</div>
					<div class="default_car" :class="{ diabled_car: currentIndex !== 1, active_car: activeNum === 7 && currentIndex === 1 }">
						<div class="" v-show="carNumber[7]">{{ carNumber[7] }}</div>
					</div>
				</div>
			</div>
			<div class="check_energy-box" @click="chooseIsNewEnergy">
				<div class="error" :class="{ shake: error }">{{ error }}</div>
				<div class="check_energy">
					<svg  style="width: 20px" v-if="currentIndex === 1" t="1690963984138" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18016" xmlns:xlink="http://www.w3.org/1999/xlink">
						<path d="M819.2 51.2H204.8a153.6 153.6 0 0 0-153.6 153.6v614.4a153.6 153.6 0 0 0 153.6 153.6h614.4a153.6 153.6 0 0 0 153.6-153.6V204.8a153.6 153.6 0 0 0-153.6-153.6z m5.632 326.656L487.424 716.8a51.2 51.2 0 0 1-72.704 0l-174.592-174.592a51.2 51.2 0 0 1 72.704-72.192l138.24 139.264L752.128 307.2a51.2 51.2 0 1 1 72.704 72.192z" fill="#3bb270" p-id="18017"></path>
					</svg>
					<svg style="width: 20px" v-else t="1690963959715" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17765" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M768 128H256c-70.4 0-128 57.6-128 128v512c0 70.4 57.6 128 128 128h512c70.4 0 128-57.6 128-128V256c0-70.4-57.6-128-128-128z m64 640c0 35.2-28.8 64-64 64H256c-35.2 0-64-28.8-64-64V256c0-35.2 28.8-64 64-64h512c35.2 0 64 28.8 64 64v512z" p-id="17766" fill="#3bb270"></path></svg>
					<div>新能源车牌号</div>
				</div>
			</div>
			<div class="confirm_btn" @click="submit">确认使用</div>
		</div>
		<div class="tips">注: 请认真核对车牌，以免错误！</div>
		<!-- 键盘 -->
		<div class="keyboard-content">
			<!-- 省份键盘 -->
			<template v-if="provinceBoardShow">
				<div style="position: relative">
					<div class="province-keyboard flex jus-center">
						<div class="td-nor color-333 province-td" v-for="(item, index) in provincesKeyList" :key="index" @click="provinceKeyClick(item, index)">
							<div class="province-font">
								{{ item }}
							</div>
						</div>
					</div>
					<div class="province-keyboard flex jus-center">
						<div class="td-nor color-333 province-td" v-for="(item, index) in provincesKeyTwo" :key="index" @click="provinceKeyClick(item, index)">
							<div class="province-font">
								{{ item }}
							</div>
						</div>
					</div>
					<div class="province-keyboard flex jus-center">
						<div class="td-nor color-333 province-td" v-for="(item, index) in provincesKeyThree" :key="index" @click="provinceKeyClick(item, index)">
							<div class="province-font">
								{{ item }}
							</div>
						</div>
					</div>
					<div class="province-keyboard flex">
						<div class="td-nor color-333 province-td" v-for="(item, index) in provincesKeyFour" :key="index" @click="provinceKeyClick(item, index)">
							<div class="province-font">
								{{ item }}
							</div>
						</div>
					</div>
					<div @click.stop="backspace" class="delete flex del-province">
						<svg t="1690963706360" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15563" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M635.3 841.5l-569.8-329 569.8-329v178.8h324.1v300.4H635.3z" fill="#3C454E" p-id="15564"></path></svg>
					</div>
				</div>
			</template>

			<!--数字键盘-->
			<template v-if="!provinceBoardShow">
				<div class="number-keyboard flex between">
					<div class="td td-num color-333" :class="numberIsDis ? 'board-active' : 'btn-def'" v-for="(item, index) in numberKeyList" :key="index" @click="numberKeyClick(item, index)">
						{{ item }}
					</div>
				</div>
			</template>
			<!--字母键盘-->
			<template v-if="!provinceBoardShow">
				<div class="english-keyboard flex between">
					<div class="td td-num color-333" :class="englishIsDis ? 'board-active' : 'btn-def'" v-for="(item, idx) in englishKeyOneList" :key="idx" @click="englishKeyClick(item, idx)">
						{{ item }}
					</div>
				</div>
				<!-- 最后一行 -->
				<div class="english-keyboard flex between">
					<div class="td td-num color-333" :class="englishIsDis ? 'board-active' : 'btn-def'" v-for="(item, index) in englishKeyTwoList" :key="index" @click="englishKeyClick(item, index)">
						{{ item }}
					</div>

					<!-- 挂字键 -->
					<div @click="trailerFiledClick('港')" class="td td-num color-333" :class="trailerFiledIsDis ? 'board-active' : 'btn-def'">港</div>
					<div @click="trailerFiledClick('澳')" class="td td-num color-333" :class="trailerFiledIsDis ? 'board-active' : 'btn-def'">澳</div>
					<div @click="trailerFiledClick('学')" class="td td-num color-333" :class="trailerFiledIsDis ? 'board-active' : 'btn-def'">学</div>
					<div @click="trailerFiledClick('使')" class="td td-num color-333" :class="trailerFiledIsDis ? 'board-active' : 'btn-def'">使</div>
					<div @click="trailerFiledClick('挂')" class="td td-num color-333" :class="trailerFiledIsDis ? 'board-active' : 'btn-def'">挂</div>
					<div @click="trailerFiledClick('警')" class="td td-num color-333" :class="trailerFiledIsDis ? 'board-active' : 'btn-def'">警</div>
					<div @click.stop="backspace" class="delete flex">
						<svg t="1690963706360" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15563" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M635.3 841.5l-569.8-329 569.8-329v178.8h324.1v300.4H635.3z" fill="#3C454E" p-id="15564"></path></svg>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(["confirm", "cancel"]);
const error = ref("");
const current = ref(0);
const currentIndex = ref(0);
const carNumber = ref([]);
const provincesKeyList = ref("京沪粤津冀晋蒙辽吉");
const provincesKeyTwo = ref("黑苏浙皖闽赣鲁豫鄂");
const provincesKeyThree = ref("湘桂琼渝川贵云藏陕");
const provincesKeyFour = ref("甘青宁新港澳台史无");
const provinceBoardShow = ref(true);
const numberKeyList = ref("1234567890");
const numberIsDis = ref(true);
const englishIsDis = ref(false);
const englishKeyOneList = ref("ABCDEFGHJKLMNPQRSTUV");
const englishKeyTwoList = ref("WXYZ");
const trailerFiledIsDis = ref(true);
const activeNum = ref(0);
defineProps({
	// 页面名称
	pageName: {
		default: "车牌录入",
		type: String,
	},
});

watch(
	() => carNumber.value.length,
	() => {
		setTrailerKeyboardDis();
		error.value = "";
		console.log(1111);
	}
);
//  确定按钮
function submit() {
	//普通车车牌校验
	const carCardP = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
	//新能源车牌校验
	const carCardD = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
	let carPlate = carNumber.value.join("");
	if (carNumber.value.length === 0) {
		error.value = "请输入车牌号";
		return;
	}
	if (!carCardP.test(carPlate) && currentIndex.value === 0) {
		// 普通车
		error.value = "车牌号输入有误";
		return;
	}
	if (!carCardD.test(carPlate) && currentIndex.value === 1) {
		// 新能源
		error.value = "车牌号输入有误";
		return;
	}
	emit("confirm", {
		carNumber: carNumber.value,
	});
}
// 点击新能源或者普通车
function chooseIsNewEnergy() {
	console.log(carNumber.value, "切换新能源");
	if (currentIndex.value === 1) {
		currentIndex.value = 0;
		if (carNumber.value.length === 8) {
			carNumber.value.pop();
		}
	} else {
		currentIndex.value = 1;
		if (carNumber.value.length === 7) {
			current.value = 7;
			activeNum.value = 7;
		}
	}
	console.log(carNumber.value, "切换新能源后");
}

// 省份键盘
function provinceKeyClick(val) {
	console.log(currentIndex.value, carNumber.value.length, "carNumber.length省");
	carNumber.value[0] = val;
	provinceBoardShow.value = false;
	numberIsDis.value = true;
	englishIsDis.value = false;
	current.value++;
	activeNum.value = current.value;
}
// 数字键盘
function numberKeyClick(val) {
	let flag = carNumber.value.indexOf("") === -1;
	console.log(currentIndex.value, carNumber.value, flag, carNumber.value.length, "carNumber.length数字");
	if (numberIsDis.value) return false;
	if ((currentIndex.value === 0 && carNumber.value.length >= 7 && current.value >= 7) || (currentIndex.value === 1 && carNumber.value.length >= 8 && current.value >= 8)) {
		return false;
	}
	current.value++;
	carNumber.value[current.value - 1] = val;
	setTrailerKeyboardDis();
	activeNum.value = current.value;
	numberIsDis.value = false;
}
// 字母键盘
function englishKeyClick(val) {
	if (englishIsDis.value) return;
	if ((currentIndex.value === 0 && carNumber.value.length >= 7 && current.value >= 7) || (currentIndex.value === 1 && carNumber.value.length >= 8 && current.value >= 8)) {
		return;
	}
	current.value++;
	carNumber.value[current.value - 1] = val;
	if (current.value === 2) numberIsDis.value = false;
	setTrailerKeyboardDis();
	activeNum.value = current.value;
	numberIsDis.value = false;
	error.value = "";
}

// 设置挂车键盘禁用（只能最后一个选择挂）
function setTrailerKeyboardDis() {
	trailerFiledIsDis.value = !((currentIndex.value === 0 && carNumber.value.length >= 6 && current.value >= 6) || (currentIndex.value === 1 && carNumber.value.length >= 7 && current.value >= 7));
}
// 点击挂字
function trailerFiledClick(val) {
	console.log(val, trailerFiledIsDis.value, "挂字");
	if (trailerFiledIsDis.value) return;
	if ((currentIndex.value === 0 && carNumber.value.length >= 7 && current.value >= 7) || (currentIndex.value === 1 && carNumber.value.length >= 8 && current.value >= 8)) {
		return;
	}
	current.value++;
	carNumber.value[current.value - 1] = val;
	activeNum.value = current.value;
}
// 删除键
function backspace() {
	if (current.value < 0) return;
	if (current.value === 0) {
		provinceBoardShow.value = true;
		activeNum.value = 0;
		carNumber.value[0] = "";
		console.log(carNumber.value[0], "carNumber[0]");
		return false;
	} else if (current.value === 1) {
		provinceBoardShow.value = true;
		activeNum.value = 1;
		carNumber.value[1] = "";
	} else if (current.value === 2) {
		provinceBoardShow.value = false;
		numberIsDis.value = true;
		carNumber.value[current.value] = "";
	} else {
		provinceBoardShow.value = false;
		carNumber.value[current.value - 1] = "";
	}
	trailerFiledIsDis.value = (currentIndex.value === 0 && current.value <= 6) || (currentIndex.value === 1 && current.value <= 7);
	current.value--;
	activeNum.value = current.value;
	error.value = "";
}
</script>

<style scoped>
.containers {
	width: 100%;
	box-sizing: border-box;
}
.parking-box {
	width: 100%;
	height: 177px;
	background: linear-gradient(180deg, #11b690 0%, #299f84 100%);
	font-size: 22px;
	font-weight: 600;
	color: #ffffff;
	text-align: center;
	padding-top: 26px;
	box-sizing: border-box;
}

.car_input_box {
	width: 351px;
	height: 220px;
	background: #ffffff;
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.06);
	border-radius: 6px;
	margin: -43px auto 0;
	font-size: 16px;
	font-weight: 400;
	color: #333333;
	text-align: center;
	padding: 20px 10px;
	box-sizing: border-box;
}

@keyframes fade {
	from {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@-webkit-keyframes fade {
	from {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.flex {
	display: flex;
}

.between {
	justify-content: space-between;
	align-items: center;
}

.font-30 {
	font-size: 15px;
}

.color-333 {
	color: #333333;
}

.car_type {
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	width: 100%;
	align-items: center;
}

.default_car {
	width: 36px;
	height: 47px;
	background: #ffffff;
	border-radius: 2px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	text-align: center;
	line-height: 47px;
	font-size: 20px;
	font-weight: bold;
	color: #333333;
}

.line {
	color: #ea4070;
	border-radius: 1px;
	animation: fade 1500ms infinite;
	-webkit-animation: fade 1500ms infinite;
}

.car_type_item {
	width: 65px;
	height: 34px;
	border: 1px solid #999999;
	text-align: center;
	line-height: 34px;
	font-size: 15px;
	font-weight: 500;
	color: #999999;
}

.check_energy {
	font-size: 16px;
	line-height: 12px;
	font-weight: 400;
	color: #6d7278;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.check_energy-box {
	margin-top: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.error {
	color: #ea4070;
	font-size: 12px;
	line-height: 12px;
}
@keyframes shake {
	from,
	to {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}

	15%,
	30%,
	45%,
	80% {
		-webkit-transform: translate3d(-5px, 0, 0);
		transform: translate3d(-5px, 0, 0);
	}

	30%,
	60%,
	90% {
		-webkit-transform: translate3d(5px, 0, 0);
		transform: translate3d(5px, 0, 0);
	}
}
.shake {
	animation: shake 0.8s;
}
.check_energy img {
	width: 16px;
	height: 16px;
	margin-right: 4px;
}

.car_type_item:nth-child(1) {
	border-radius: 3px 0 0 3px;
	border-right: 1px solid #999999;
}

.car_type_item:nth-child(2) {
	border-right: none;
	border-left: none;
}

.car_type_item:nth-child(3) {
	border-radius: 0 3px 3px 0;
}

.active {
	width: 65px;
	height: 34px;
	border: 1px solid #999999;
	text-align: center;
	line-height: 34px;
	font-size: 15px;
	font-weight: bold;
	color: #ea4070;
	background: rgba(#ea4070, 0.1);
}

.active:nth-child(1) {
	border-radius: 3px 0 0 3px;
	border-right: 1px solid #999999;
}

.active:nth-child(2) {
	border-right: none;
	border-left: none;
}

.active:nth-child(3) {
	border-radius: 0 3px 3px 0;
}

.car_number_input {
	margin-top: 20px;
}

.tips {
	font-size: 12px;
	font-weight: 400;
	color: #6d7278;
	margin: 8px 12px;
}

.keyboard-content {
	width: 100%;
	height: 300px;
	box-sizing: border-box;
	position: fixed;
	left: 0;
	bottom: 0px;
	background: #e5e4e5;
	padding-top: 6px;
}

.td {
	font-size: 17px;
	color: #333333;
	font-weight: 500;
	margin: 6px 1px;
	box-shadow: 0 1px 0 0 #898a8d;
	border-radius: 4px;
	height: 42px;
	line-height: 42px;
	text-align: center;
	background-color: #fff;
}

.province-keyboard {
	margin: 0 4px;
	padding: 0 5px;
}

.number-keyboard {
	margin: 0 2px;
}

.board-active {
	box-shadow: 0 0 0 #f5f5f5;
	background: #f5f5f5;
}

.english-keyboard {
	margin: 0 2px;
	flex-wrap: wrap;
}

.td-num {
	flex: 0 1 9%;
}

.board-active {
	box-shadow: 0 0 0 #f2f2f2;
	background: #f2f2f2;
}

.delete {
	position: relative;
	right: -70%;
	width: 29%;
	height: 44px;
	text-align: center;
	background-color: #aaadb7;
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1px 0 0 #898a8d;
}
.delete:active {
	background-color: red;
}
.del-province {
	/* position: absolute;
	right: 10px;
	bottom: 6px;
	width: 40px;
	border-radius: 4px;
	font-size: 17px;
	color: #333333;
	font-weight: 500;
	box-shadow: 0 1px 1px 0 #898a8d;
	height: 42px;
	line-height: 42px;
	text-align: center;
	background: #aaadb7; */
}

.default_dot {
	width: 4px;
	height: 4px;
	background: #333333;
	margin: 0 2px;
}

.jus-center {
	justify-content: center;
}

.diabled_car {
	background: #f5f5f5;
	border-radius: 2px;
	border: 1px solid rgba(0, 0, 0, 0.1);
}

.active_car {
	border-radius: 2px;
	border: 1px solid #375de9;
}

.confirm_btn {
	width: 331px;
	height: 46px;
	line-height: 46px;
	background: #11b690;
	font-size: 16px;
	font-weight: 500;
	color: #ffffff;
	border-radius: 23px;
	margin-top: 20px;
}

.province-td {
	width: 12.5%;
}

.province-font {
	width: 36px;
	box-shadow: 0 1px 0 0 #898a8d;
	border-radius: 4px;
	font-size: 17px;
	color: #000;
	font-weight: 500;
	margin: 6px auto;
	height: 42px;
	line-height: 42px;
	text-align: center;
	background-color: #fff;
}

.province-font:active,
.btn-def:active {
	background: #01be6e;
	scale: 1.1;
}
.cash-box {
	width: 285px;
	background: rgb(223, 223, 223);
	border-radius: 14px;
	margin: 30vh auto 0;
	text-align: center;
	min-height: 100px;
}
</style>
