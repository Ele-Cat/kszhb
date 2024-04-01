<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: uni.getStorageSync("title") || "圈子"
			})
			uni.showLoading({
				title: "加载中...",
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>