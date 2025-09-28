<script setup lang="ts">
import Dock from '~/vue-bits/Components/Dock/Dock.vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
	{
		label: 'Home',
		icon: () => h(Icon, { icon: 'mdi:home', class: 'w-6 h-6 text-white' }),
		onClick: () => router.push('/')
	},
	{
		label: 'Experience',
		icon: () => h(Icon, { icon: 'mdi:inbox', class: 'w-6 h-6 text-white' }),
		onClick: () => router.push('/experience')
	},
	{
		label: 'Profile',
		icon: () => h(Icon, { icon: 'mdi:user', class: 'w-6 h-6 text-white' }),
		onClick: () => router.push('/profile')
	},
	{
		label: 'Settings',
		icon: () => h(Icon, { icon: 'mdi:cog', class: 'w-6 h-6 text-white' }),
		onClick: () => router.push('/settings')
	}
]
</script>

<template>
	<UFooter>
		<div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
			<Dock :items="items" :panel-height="75" :base-item-size="50" :magnification="60" :distance="200"
				:dock-height="256" :spring="{ mass: 0.1, stiffness: 150, damping: 12 }" />
		</div>
	</UFooter>
</template>

<style></style>
