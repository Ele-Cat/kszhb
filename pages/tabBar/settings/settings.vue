<template>
	<view style="padding-bottom: 36px;">
		<uni-nav-bar :fixed="true" left-text="返回" title="设置" right-text="重置" @clickLeft="back" @clickRight="reset" />

		<uni-card title="应用标题" extra="展示在顶部的文字">
			<uni-easyinput type="text" v-model="title" placeholder="请输入应用标题" @input="handleTitleChange" />
		</uni-card>

		<uni-card title="我的信息">
			<uni-forms>
				<uni-forms-item label="用户名">
					<uni-easyinput v-model="username" @input="handleUsernameChange" />
				</uni-forms-item>
				<uni-forms-item label="金额">
					<uni-easyinput v-model="money" @input="handleMoneyChange" />
				</uni-forms-item>
				<uni-forms-item label="邀请码">
					<uni-easyinput v-model="code" @input="handleCodeChange" />
				</uni-forms-item>
			</uni-forms>
		</uni-card>

		<uni-card title="首页中部卡片数据">
			<template v-slot:title>
				<view style="padding: 16rpx 0 0;display: flex;justify-content: space-between;align-items: center;">
					<p>首页中部卡片数据</p>
					<p @click="handleResetCenter" style="display: inline-block;line-height: 2.3;font-size: 13px;padding: 0 1.34em;color: #fff;background-color: #e64340;">重置</p>
				</view>
			</template>
			<uni-forms>
				<uni-card v-for="(item, index) in centerList" :key="index">
					<view class="idx">{{index + 1}}</view>
					<uni-forms-item label="标题">
						<uni-easyinput v-model="item.title" @input="e => handleCenterChange(e, 'title', index)" />
					</uni-forms-item>
					<uni-forms-item label="类型">
						<uni-easyinput v-model="item.type" @input="e => handleCenterChange(e, 'type', index)" />
					</uni-forms-item>
					<uni-forms-item label="金额">
						<uni-easyinput v-model="item.price" @input="e => handleCenterChange(e, 'price', index)" />
					</uni-forms-item>
					<uni-forms-item label="封面">
						<img @click="handleCenterImgChange('center', index)" :src="item.img" alt="" style="width: 240rpx;">
						<!-- <uni-file-picker v-model="item.img" :image-styles="imageStyles" file-mediatype="image" mode="grid" file-extname="png,jpg"
							return-type="object" :limit="1" @success="success" @select="e => handleCenterChange(e, 'img', index)" /> -->
					</uni-forms-item>
				</uni-card>
			</uni-forms>
		</uni-card>

		<uni-card title="首页列表数据">
			<template v-slot:title>
				<view style="padding: 16rpx 0 0;display: flex;justify-content: space-between;align-items: center;">
					<p>首页列表数据</p>
					<p @click="handleResetBottom" style="display: inline-block;line-height: 2.3;font-size: 13px;padding: 0 1.34em;color: #fff;background-color: #e64340;">重置</p>
				</view>
			</template>
			<uni-forms>
				<view class="add" @click="handleAdd"><uni-icons type="plusempty" size="14"></uni-icons>插入一条数据</view>
				<uni-card v-for="(item, index) in bottomList" :key="index">
					<uni-icons type="close" class="close" size="24" color="red" @click="handleRemove(index)"></uni-icons>
					<view class="idx">{{index + 1}}</view>
					<uni-forms-item label="标题" style="margin-top:12px;">
						<uni-easyinput v-model="item.title" @input="e => handleBottomChange(e, 'title', index)" />
					</uni-forms-item>
					<uni-forms-item label="类型">
						<uni-easyinput v-model="item.type" @input="e => handleBottomChange(e, 'type', index)" />
					</uni-forms-item>
					<uni-forms-item label="金额">
						<uni-easyinput v-model="item.price" @input="e => handleBottomChange(e, 'price', index)" />
					</uni-forms-item>
					<uni-forms-item label="剩余">
						<uni-easyinput v-model="item.left" @input="e => handleBottomChange(e, 'left', index)" />
					</uni-forms-item>
					<uni-forms-item label="已赚">
						<uni-easyinput v-model="item.used" @input="e => handleBottomChange(e, 'used', index)" />
					</uni-forms-item>
					<uni-forms-item label="封面">
						<img @click="handleCenterImgChange('bottom', index)" :src="item.img" alt="" style="width: 240rpx;">
					</uni-forms-item>
				</uni-card>
			</uni-forms>
		</uni-card>
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
				username: "",
				money: "",
				code: "",
				centerList: [],
				bottomList: [],
				imageStyles: {
					"height": 90,	// 边框高度
					"width": 120,	// 边框宽度
					"border":{ // 如果为 Boolean 值，可以控制边框显示与否
						"color":"#eee",		// 边框颜色
						"width":"1px",		// 边框宽度
						"style":"solid", 	// 边框样式
					}
				}
			}
		},
		onShow() {
			this.title = uni.getStorageSync("title") || "圈子"
			this.username = uni.getStorageSync("username") || "轩宝"
			this.money = uni.getStorageSync("money") || "3600.00"
			this.code = uni.getStorageSync("code") || "1264"
			document.title = this.title
			this.centerList = uni.getStorageSync("centerList")
			this.bottomList = uni.getStorageSync("bottomList")
		},
		methods: {
			back() {
				// uni.navigateBack()
				uni.switchTab({
					url: "/pages/tabBar/home/home"
				})
			},
			reset() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认重置应用数据？',
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync("title", "圈子")
							that.title = uni.getStorageSync("title")
							uni.setStorageSync("username", "轩宝")
							that.username = uni.getStorageSync("username")
							uni.setStorageSync("money", "3600.00")
							that.money = uni.getStorageSync("money")
							uni.setStorageSync("code", "1264")
							that.code = uni.getStorageSync("code")
							document.title = that.title

							uni.setStorageSync("centerList", initCenterList)

							uni.setStorageSync("bottomList", initBottomList)
						}
					}
				});
			},
			handleTitleChange(e) {
				document.title = e
				uni.setStorageSync("title", e)
			},
			handleUsernameChange(e) {
				uni.setStorageSync("username", e)
			},
			handleMoneyChange(e) {
				uni.setStorageSync("money", e)
			},
			handleCodeChange(e) {
				uni.setStorageSync("code", e)
			},
			handleCenterChange(e, type, idx) {
				this.centerList[idx][type] = e
				uni.setStorageSync("centerList", this.centerList)
			},
			handleCenterImgChange(position, index) {
				let that = this
				let fileInput = document.createElement('input');
				fileInput.type = 'file';
				fileInput.accept = 'image/*';
				fileInput.onchange = function (e) {
					let file = e.target.files[0];
					let reader = new FileReader();
					reader.onload = function (event) {
						let base64String = event.target.result;
						if (position == 'center') {
							that.handleCenterChange(base64String, 'img', index)
						} else {
							that.handleBottomChange(base64String, 'img', index)
						}
					};
					reader.readAsDataURL(file);
				};
				fileInput.click();
			},
			handleResetCenter() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认重置中部卡片数据？',
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync("centerList", initCenterList)
							that.centerList = initCenterList
						}
					}
				});
			},
			handleBottomChange(e, type, idx) {
				this.bottomList[idx][type] = e
				uni.setStorageSync("bottomList", this.bottomList)
			},
			handleResetBottom() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认重置首页列表数据？',
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync("bottomList", initBottomList)
							that.bottomList = initBottomList
						}
					}
				});
			},
			handleAdd() {
				this.bottomList.unshift({
					id: Date.now(),
					img: "https://ele-cat.github.io/ks/static/images/pic_2.jpg",
					title: "",
					type: "",
					price: "",
					left: "",
					used: "",
				})
				uni.setStorageSync("bottomList", this.bottomList)
			},
			handleRemove(idx) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认移除这条数据？',
					success: function(res) {
						if (res.confirm) {
							that.bottomList.splice(idx, 1)
							uni.setStorageSync("bottomList", that.bottomList)
							uni.showToast({
								title: "移除成功"
							})
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.uni-forms-item {
		margin-bottom: 8px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.add {
		display: inline-block;
		border-radius: 12rpx;
		padding: 8rpx 12rpx;
		border: 1px solid #ccc;
	}

	.close {
		position: absolute;
		right: -2px;
		top: -2px;
	}

	.idx {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 36rpx;
		height: 36rpx;
		line-height: 36rpx;
		text-align: center;
		background-color: #ec602d;
		color: #fff;
	}
</style>