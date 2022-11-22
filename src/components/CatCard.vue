<script setup>
	import { useCatStore } from "../store/catStore";
	import { computed } from "vue";
	const store = useCatStore();
	const props = defineProps({
		cat: {},
	});
	const chosenCat = computed(() => {
		return store.catInBasket.id === props.cat.id;
	});
</script>

<template>
	<div
		class="rounded-lg shadow-lg bg-white max-w-sm h-96"
		data-testId="cat-card"
		:class="chosenCat ? 'shadow-white' : ''"
	>
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
		<button
			type="button"
			data-testId="add-cat-button"
			class="
				inline-block
				px-6
				py-2.5
				bg-gray-800
				text-white
				font-medium
				text-xs
				leading-tight
				uppercase
				rounded
				shadow-md
				hover:bg-blue-700 hover:shadow-lg hover:text-white
				focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
				active:bg-blue-800 active:shadow-lg
				transition
				duration-150
				ease-in-out
				mb-8
			"
			@click="store.addCatToBasket(cat)"
		>
			Add Cat To Basket
		</button>
	</div>
</template>
