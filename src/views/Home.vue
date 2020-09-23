<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<button @click="ccc">这是一个按钮</button>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {getSubjectList} from '@/api/index';

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
	data() {
		return {};
	},
	methods: {
		ccc() {
			getSubjectList({a: '11'})
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>
