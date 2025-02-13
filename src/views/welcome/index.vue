<template>
	<h1 class="bor">JSON => Pretty</h1>
	<div class="box">
		<a-card :style="{ width: '50%' }" title="JSON" hoverable>
			<a-textarea class="m-textarea" placeholder="Please enter something" v-model="myJSON" allow-clear />
		</a-card>
		<a-card class="card-demo bor" title="Pretty" hoverable>
			<JsonViewer v-bind="viewProps" :value="toJSON" copyable theme="light" />
		</a-card>
	</div>
</template>

<script setup>
import { JsonViewer } from "@/components/JsonViewer/index.js";
import { computed, reactive, ref } from "vue";
const viewProps = reactive({
	previewMode: false,
	expandDepth:100
});
const myJSON = ref("");

const toJSON = computed(() => {
	try {
		return JSON.parse(myJSON.value);
	} catch (error) {
		return {};
	}
});
</script>

<style scoped>
.box {
	width: 100%;
	display: flex;
	justify-content: center;
}
.w-full {
	width: 100%;
}
.bor {
	margin-left: 24px;
}
.card-demo {
	width: 45%;
	transition-property: all;
}
.card-demo:hover {
	transform: translateY(-4px);
}
.m-textarea {
	height: 80vh;
}
</style>
