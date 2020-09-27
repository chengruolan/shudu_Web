<template>
	<div>
		<div class="header">
			<div class="left">Shudu</div>
			<div class="center">Shudu</div>
			<div class="right">
				<Button type="link" @click="open" class="button"><img class="svg" src="./../assets/login.svg" />登录</Button>
				<Button type="link" @click="open" class="button"><img class="svg" src="./../assets/register.svg" />注册</Button>
				<Button type="link" class="button"><img class="svg" src="./../assets/person.svg" />个人中心</Button>
			</div>
		</div>
		<template>
			<div v-show="a" class="loginPan">
				<div class="login">
					<div class="right">
						<p class="loginTest">登录Shudu</p>
						<a-input ref="userNameInput" v-model="userName" placeholder="请输入账号">
							<a-icon slot="prefix" type="user" />
						</a-input>
						<a-input ref="userNameInput" v-model="password" placeholder="请输入密码">
							<a-icon slot="prefix" type="lock" />
						</a-input>
						<Button type="link" class="passwordTest">忘记密码</Button>
						<Button type="link" class="passwordTest float-right">注册</Button>
						<Button type="primary" block>登录</Button>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import { Button, Input, Icon } from "ant-design-vue";
export default {
	name: "myHeader",
	components: {
		Button,
		"a-input": Input,
		"a-icon": Icon,
	},
	data() {
		return {
			a: false,
			userName: "",
			password: "",
		};
	},
	props: {
		msg: String,
	},
	methods: {
		open() {
			this.a = !this.a;
		},
		emitEmpty() {
			this.$refs.userNameInput.focus();
			this.userName = "";
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
	display: flex;
	width: 100%;
	padding: 0 100px;
	justify-content: space-between;
	.left {
		background: linear-gradient(to right, red, blue);
		-webkit-background-clip: text;
		color: transparent;
		font-size: 46px;
		text-shadow: #ccc 4px 4px 4px;
	}
	.right {
		.button {
			color: #333;
		}
	}
}
.svg {
	position: relative;
	top: -2px;
}
.loginPan {
	display: flex;
	margin-top: 60px;
	width: 100%;
	justify-content: center;
	.login {
		background: url(./../assets/loginPan.png);
		background-size: 410px;
		width: 750px;
		height: 400px;
		box-shadow: 16px 8px 4px #ccc;
		border-radius: 55px;
		.right {
			line-height: 48px;
			padding: 70px;
			text-align: center;
			float: right;
			width: 350px;
			height: 400px;
			background-color: #ffffff;
			border-radius: 0px 55px 55px 0px;
			.loginTest {
				margin-top: 20px;
				height: 30px;
				color: #222;
				font-size: 24px;
				font-weight: 500;
			}
			.passwordTest {
				padding: 0;
				font-size: 12px;
				float: left;
			}
			.float-right {
				float: right;
			}
		}
	}
}
</style>
