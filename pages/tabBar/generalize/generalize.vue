<template>
	<view class="page">
		<view class="top-title">邀请好友</view>
		<view class="top">
			<view>
				我的邀请码： {{code}}<text>复制</text>
			</view>
			<view class="btn">立即分享 赚钱咯</view>
		</view>
		<view class="bottom">
			<view class="title">注意事项</view>
			<view class="bottom-box">
				<view>1.学费：0.00(普通会员)</view>
				<view>2.接单：3-10(根据权重叠加)</view>
				<view>3.一级分佣：2%</view>
				<view>4.二级分佣：1%</view>
				<view>{{title}}可能会根据实际业务对活动规则进行优化调整，调整后的奖励将按照新活动规则进行奖励发放，在法律许可的合法范围内。</view>
				<view>本活动最终解释权归{{title}}所有。</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				code: "",
			}
		},
		onShow() {
			uni.hideLoading()
			this.title = uni.getStorageSync("title") || "圈子"
			uni.setNavigationBarTitle({
				title: this.title
			})
			
			this.code = uni.getStorageSync("code") || "1264"
			uni.setStorageSync("code", this.code)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.page {
		height: calc(100vh - 100rpx);
		background-color: #f1ba6a;
	}

	.top-title {
		background-color: #f57768;
		color: #fff;
		line-height: 78rpx;
		color: #fff;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		letter-spacing: 4rpx;
	}

	.top {
		width: 80%;
		background-color: #fff;
		margin-left: 10%;
		text-align: center;
		border-radius: 0 0 16rpx 16rpx;
		padding: 32rpx 0 36rpx;

		text {
			color: #f57768;
			margin-left: 12rpx;
		}

		.btn {
			background-color: #efd45e;
			color: #f57768;
			width: 78%;
			font-size: 36rpx;
			height: 78rpx;
			line-height: 78rpx;
			margin: 36rpx auto 0;
			border-radius: 78rpx;
		}
	}

	.bottom {
		position: relative;
		width: 80%;
		background-color: #fff;
		margin: 88rpx auto 0;
		border-radius: 16rpx;
		
		.title {
			position: absolute;
			background-color: #f57768;
			color: #fff;
			width: 168rpx;
			height: 68rpx;
			line-height: 68rpx;
			text-align: center;
			border-radius: 8rpx;
			left: 50%;
			top: -34rpx;
			margin-left: -84rpx;
		}

		.bottom-box {
			padding: 64rpx 32rpx 48rpx;
			color: #666;
			line-height: 2;
		}
	}
</style>