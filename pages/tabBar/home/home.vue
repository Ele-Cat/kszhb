<template>
	<view>
		<view class="top">
			<view class="top-bg"></view>
			<view class="search-box">
				<text class="title">{{title}}</text>
				<uni-search-bar class="search-bar" radius="100" placeholder="输入任务编号搜索" clearButton="none" cancelButton="none" />
				<uni-icons type="scan" size="24" color="#fff"></uni-icons>
			</view>
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" :interval="3500" :autoplay="true" @change="change">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view class="swiper-item">
							<img :src="item.url" alt="" srcset="" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="center">
			<view class="center-box" v-for="(item, index) in centerList" :key="index">
				<img :src="item.img" alt="" />
				<view class="title">{{item.title}}</view>
				<view class="type">{{item.type}}</view>
				<view class="price">+{{item.price}}</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom_nav">
				<view class="title">全部任务</view>
				<view class="nav">
					<text class="active">默认排序</text>
					<text>最新发布</text>
					<text>佣金最高</text>
				</view>
			</view>
			<view class="bottom-list">
				<view class="bottom-item" v-for="(item, index) in bottomList" :key="index">
					<view class="img">
						<img :src="item.img" alt="">
					</view>
					<view class="info">
						<view class="title">
							<text>{{item.title}}</text>
							<text>+{{item.price}}</text>
						</view>
						<view class="type">
							<text>ID:{{10320 + index}}</text>
							<text>{{item.type}}</text>
						</view>
						<view class="left">
							<text>剩余 {{item.left}}/已结 {{item.used}}</text>
							<text class="btn" @click="handleSub(item, index)">接单</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" class="popup-box" background-color="#fff" border-radius="10px 10px 0 0" :is-mask-click="false">
			<view class="title">请联系【系统管理员】获取密钥</view>
			<view class="input">
				<uni-easyinput focus v-model="secretKey" placeholder="请输入密钥"></uni-easyinput>
			</view>
			<view class="btn" @click="confirm">确认</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		initCenterList,
		initBottomList
	} from "../helper.js"
	export default {
		data() {
			return {
				title: "",
				info: [{
					url: "https://ele-cat.gitee.io/ks/static/images/swiper_1.png",
				}, {
					url: "https://ele-cat.gitee.io/ks/static/images/swiper_2.png",
				}, {
					url: "https://ele-cat.gitee.io/ks/static/images/swiper_3.png",
				}],
				current: 0,
				mode: 'default',
				centerList: [],
				bottomList: [],
				timer: null,
				secretKey: "",
				checkPeriod: 3 * 1000,
			}
		},
		onHide() {
			this.timer && clearInterval(this.timer)
		},
		onShow() {
			// this.checkSecretKey()
			// this.timer = setInterval(() => {
			// 	this.checkSecretKey()
			// }, this.checkPeriod)
			
			uni.hideLoading()
			this.title = uni.getStorageSync("title") || "圈子"
			document.title = this.title
			uni.setNavigationBarTitle({
				title: this.title
			})
			uni.setStorageSync("title", this.title)

			const centerList = uni.getStorageSync("centerList") || initCenterList
			uni.setStorageSync("centerList", centerList)
			this.centerList = centerList

			const bottomList = uni.getStorageSync("bottomList") || initBottomList
			uni.setStorageSync("bottomList", bottomList)
			this.bottomList = bottomList
		},
		methods: {
			checkSecretKey() {
				let secretKey = uni.getStorageSync("secretKey")
				console.log('secretKey', secretKey)
				if (!secretKey || secretKey != this.returnSecretKey()) {
					// 禁止点击底部按钮
					uni.hideTabBar()
					// 弹出密钥输入框
					this.$nextTick(() => {
						this.showPop()
						this.timer && clearInterval(this.timer)
					})
				} else {
					uni.showTabBar()
					this.timer && clearInterval(this.timer)
					this.timer = setInterval(() => {
						this.checkSecretKey()
					}, this.checkPeriod)
				}
			},
			showPop() {
				this.$refs.popup.open('center')
			},
			hidePop() {
				this.$refs.popup.close()
				this.timer && clearInterval(this.timer)
				this.timer = setInterval(() => {
					this.checkSecretKey()
				}, this.checkPeriod)
			},
			confirm() {
				if (this.secretKey === this.returnSecretKey()) {
					this.hidePop()
					uni.setStorageSync("secretKey", this.secretKey)
					this.secretKey = ""
				} else {
					uni.showToast({
						title: "密钥错误",
						icon: "error"
					})
				}
			},
			returnSecretKey() {
				let currentDate = new Date();
				currentDate.setHours(12, 0, 0, 0);
				let secretKey = btoa(currentDate.getTime() / 1000);
				return secretKey
			},
			change(e) {
				this.current = e.detail.current;
			},
			handleSub(row, idx) {
				let count = Number(this.bottomList[idx]["left"])
				count -= 1
				this.bottomList[idx]["left"] = count || 999
				uni.setStorageSync("bottomList", this.bottomList)
				let selectList = uni.getStorageSync("selectList") || []
				if (selectList.find(item => item.id == row.id)) {
					let selectIndex = selectList.findIndex(item => item.id == row.id)
					selectList[selectIndex]["count"] += 1
				} else {
					selectList.push({
						...row,
						count: 1,
					})
				}
				uni.setStorageSync("selectList", selectList)
			}
		}
	}
</script>

<style lang="scss">
	.top {
		position: relative;

		.top-bg {
			position: absolute;
			background-color: #e0c750;
			width: 100vw;
			height: 320rpx;
			z-index: 0;
		}
	}

	.search-box {
		position: relative;
		display: flex;
		align-items: center;
		padding: 0 16rpx;
		z-index: 99;

		.title {
			color: #fff;
			font-size: 28rpx;
		}

		.search-bar {
			flex: 1;
		}
	}

	.swiper-box {
		margin: 16rpx 28rpx 0;
		border-radius: 16rpx;
		overflow: hidden;
	}

	.swiper-item {
		width: 100%;
		height: 38vw;
		overflow: hidden;

		img {
			width: 100%;
			height: 38vw;
			// height: 100%;
			object-fit: cover;
		}
	}

	.center {
		display: flex;
		margin: 12rpx 32rpx 0;
		justify-content: space-between;

		.center-box {
			width: 32%;
			background-color: #fff;
			border-radius: 12rpx;
			overflow: hidden;
			text-align: center;
			padding-bottom: 12rpx;
			font-size: 32rpx;

			img {
				max-width: 100%;
				border-radius: 6rpx;
			}

			.type {
				font-size: 24rpx;
				color: #999;
				transform: scale(0.8);
				line-height: 2;
			}

			.price {
				color: #ec602d;
			}
		}
	}

	.bottom {
		.bottom_nav {
			background-color: #fff;
			margin-top: 18rpx;
			height: 88rpx;
			display: flex;
			align-items: center;
			padding: 0 16rpx;

			.title {
				font-size: 36rpx;
				font-weight: bold;
				color: #333;
			}

			.nav {
				margin: 2rpx 0 0 24rpx;

				text {
					position: relative;
					margin-right: 18rpx;
					color: #999;

					&.active {
						color: #333;

						&::after {
							content: "";
							position: absolute;
							left: 50%;
							margin-left: -0.88rem;
							bottom: -6rpx;
							width: 2em;
							height: 6rpx;
							background-color: #ec602d;
						}
					}
				}
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
						margin-top: 8rpx;

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
						margin-top: 6rpx;

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