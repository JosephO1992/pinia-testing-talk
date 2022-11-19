<script setup>
	const props = defineProps({
		cat: {},
	});
</script>

<template>
	<div class="rounded-lg shadow-lg bg-white max-w-sm h-96">
		<div
			class="h-1/2 bg-cover rounded-t-lg"
			:style="`background-image: url(${cat.url})`"
		></div>
		<div class="p-6">
			<h5 class="text-gray-900 text-xl font-medium mb-2">
				{{ cat.breeds[0].name }}
			</h5>
			<p class="text-gray-700 text-base mb-4">
				{{ cat.breeds[0].origin }}
			</p>
		</div>
	</div>
</template>
