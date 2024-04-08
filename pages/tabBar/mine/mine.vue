<template>
	<view class="mine">
		<!-- <img src="/static/images/mine.png" alt="" /> -->
		<img src="/static/images/mine_1.png" alt="" />
		<view class="username" @click="showPop">{{username}}</view>
		<view class="money">{{money}}</view>
	</view>
	<uni-popup ref="popup" type="bottom" class="popup-box" background-color="#fff" border-radius="10px 10px 0 0">
		<view class="title">密钥</view>
		<uni-icons type="close" class="close" size="24" color="red" @click="hidePop"></uni-icons>
		<view class="input">
			<uni-easyinput focus v-model="password" type="password" placeholder="请输入密钥"></uni-easyinput>
		</view>
		<view class="btn" @click="confirm">确认</view>
	</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				money: "",
				password: "",
			}
		},
		onShow() {
			uni.hideLoading()
			uni.setNavigationBarTitle({
				title: uni.getStorageSync("title") || "圈子"
			})
			this.username = uni.getStorageSync("username") || "轩宝"
			uni.setStorageSync("username", this.username)
			this.money = uni.getStorageSync("money") || "3600.00"
			uni.setStorageSync("money", this.money)
		},
		methods: {
			showPop() {
				this.$refs.popup.open('center')
			},
			hidePop() {
				this.$refs.popup.close()
			},
			confirm() {
				if (this.password === "1234") {
					this.hidePop()
					uni.navigateTo({
						url: "/pages/tabBar/settings/settings"
					})
				} else {
					uni.showToast({
						title: "密钥错误",
						icon: "error"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.mine {
		position: relative;
		height: calc(100vh - 100rpx);
		background-color: #fff;

		img {
			width: 100%;
			object-fit: contain;
		}
		
		.username {
			position: absolute;
			z-index: 99;
			font-size: 36rpx;
			top: 150rpx;
			left: 150rpx;
			font-weight: bold;
			color: #333;
		}
		
		.money {
			position: absolute;
			z-index: 99;
			font-size: 28rpx;
			top: 346rpx;
			left: 150rpx;
			color: #ddd;
		}
	}

	.popup-box {
		.uni-popup__wrapper {
			width: 640rpx !important;
		}

		.title {
			width: 80vw !important;
			height: 68rpx;
			line-height: 68rpx;
			text-align: center;
		}
		
		.close {
			position: absolute;
			right: 20rpx;
			top: 12rpx;
		}
		
		.input {
			padding: 20rpx;
		}
		
		.btn {
			background-color: #ec602d;
			color: #fff;
			text-align: center;
			width: 128rpx;
			margin: 0 auto 24rpx;
			height: 56rpx;
			line-height: 56rpx;
		}
	}
</style>