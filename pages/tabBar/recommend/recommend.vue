<template>
	<view class="page" @click="clear">
		<view class="bottom-list" v-if="selectList.length">
			<view class="bottom-item" v-for="(item, index) in selectList" :key="index">
				<view class="img">
					<img :src="item.img" alt="">
				</view>
				<view class="info">
					<view class="title">
						<text>{{item.title}}</text>
						<text>+{{item.price}}</text>
					</view>
					<view class="type">
						<text>{{item.type}}</text>
					</view>
					<view class="left">
						<text>已接 {{item.count}}</text>
						<text class="btn">开始</text>
					</view>
				</view>
			</view>
		</view>

		<view class="empty" v-if="!selectList.length">
			<uni-icons type="folder-add" size="80" color="#999"></uni-icons>
			<view>暂无数据</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectList: [],
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: uni.getStorageSync("title") || "圈子"
			})
			this.selectList = uni.getStorageSync("selectList") || []
		},
		methods: {
			clear() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认清空任务数据？',
					success: function(res) {
						if (res.confirm) {
							that.selectList = []
							uni.setStorageSync("selectList", [])
							uni.showToast({
								title: "清空成功"
							})
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.page {
		min-height: calc(100vh - 100rpx);
	}
	.empty {
		padding: calc(50vh - 160rpx) 0 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #999;
		
		.uni-icons {
			height: 120rpx;
		}
	}

	.bottom-list {
		padding: 16rpx;

		.bottom-item {
			border-radius: 12rpx;
			overflow: hidden;
			display: flex;
			background-color: #fff;
			margin-bottom: 12rpx;

			.img {
				width: 240rpx;

				img {
					max-width: 100%;
					object-fit: contain;
					border-radius: 12rpx;
				}
			}

			.info {
				padding: 12rpx;
				flex: 1;

				.title {
					display: flex;
					justify-content: space-between;
					font-size: 34rpx;

					text:last-child {
						color: #ec602d;
					}
				}

				.type {
					display: flex;
					margin-top: 4rpx;

					text {
						display: block;
						background-color: #f5f5f5;
						margin-right: -16rpx;
						font-size: 24rpx;
						padding: 8rpx 12rpx;
						border-radius: 8rpx;
						transform: scale(0.8);
						transform-origin: 0;
					}
				}

				.left {
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #999;
					font-size: 28rpx;
					margin-top: 4rpx;

					.btn {
						background-color: #ec602d;
						color: #fff;
						padding: 4rpx 12rpx;
						border-radius: 8rpx;
					}
				}
			}
		}
	}
</style>