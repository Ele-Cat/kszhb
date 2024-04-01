<template>
	<view>
		<view class="top">
			<view class="search-box">
				<text class="title">{{title}}</text>
				<uni-search-bar class="search-bar" radius="100" placeholder="输入任务编号搜索" clearButton="none" cancelButton="none" />
				<uni-icons type="scan" size="24" color="#fff"></uni-icons>
			</view>
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" :autoplay="false" @change="change">
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
							<text>剩余{{item.left}}个</text>
							<text>{{item.used}}人已赚</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				info: [{
					url: "../../../static/images/swiper_1.png",
				}, {
					url: "../../../static/images/swiper_2.png",
				}, {
					url: "../../../static/images/swiper_3.png",
				}],
				current: 0,
				mode: 'default',
				centerList: [],
				bottomList: [],
			}
		},
		onShow() {
			uni.hideLoading()
			this.title = uni.getStorageSync("title") || "圈子"
			document.title = this.title
			uni.setNavigationBarTitle({
				title: this.title
			})
			uni.setStorageSync("title", this.title)
			
			const initCenterList = [{
					id: 1,
					img: "../../../static/images/pic_1.jpg",
					title: "去有你的地方",
					type: "短剧",
					price: "80.00",
				},
				{
					id: 2,
					img: "../../../static/images/pic_1.jpg",
					title: "隐秘而伟大",
					type: "短剧",
					price: "90.00",
				},
				{
					id: 3,
					img: "../../../static/images/pic_1.jpg",
					title: "巨富归来",
					type: "短剧",
					price: "85.00",
				}
			]
			const centerList = uni.getStorageSync("centerList") || initCenterList
			uni.setStorageSync("centerList", centerList)
			this.centerList = centerList

			const initBottomList = [{
					img: "../../../static/images/pic_2.jpg",
					title: "父爱如山",
					type: "短剧",
					price: "85.00",
					left: 583,
					used: 17,
				},
				{
					img: "../../../static/images/pic_2.jpg",
					title: "后会有期",
					type: "短剧",
					price: "75.00",
					left: 544,
					used: 16,
				},
				{
					img: "../../../static/images/pic_2.jpg",
					title: "西游记",
					type: "电视剧",
					price: "80.00",
					left: 370,
					used: 15,
				},
				{
					img: "../../../static/images/pic_2.jpg",
					title: "狂飙",
					type: "电视剧",
					price: "85.00",
					left: 523,
					used: 12,
				},
				{
					img: "../../../static/images/pic_2.jpg",
					title: "漫长的季节",
					type: "电视剧",
					price: "85.00",
					left: 583,
					used: 17,
				},
				{
					img: "../../../static/images/pic_2.jpg",
					title: "猎冰",
					type: "电视剧",
					price: "85.00",
					left: 583,
					used: 17,
				},
				{
					img: "../../../static/images/pic_2.jpg",
					title: "繁花",
					type: "电视剧",
					price: "85.00",
					left: 583,
					used: 17,
				},
				{
					img: "../../../static/images/pic_2.jpg",
					title: "汉武大帝",
					type: "电视剧",
					price: "85.00",
					left: 583,
					used: 17,
				}
			]
			const bottomList = uni.getStorageSync("bottomList") || initBottomList
			uni.setStorageSync("bottomList", bottomList)
			this.bottomList = bottomList
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style lang="scss">
	.top {
		background-color: #e0c750;
		height: 320rpx;
	}

	.search-box {
		display: flex;
		align-items: center;
		padding: 0 16rpx;

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
		margin: 88rpx 32rpx 0;
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
						color: #999;
						font-size: 28rpx;
						margin-top: 6rpx;
					}
				}
			}
		}
	}
</style>