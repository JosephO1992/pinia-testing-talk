<script setup>
	import { useCatStore } from "./store/catStore.js";
	import CatCard from "./components/CatCard.vue";

	const store = useCatStore();

	store.getCats();
</script>

<template>
	<div class="text-center bg-gray-800 h-full w-screen text-white px-4 pb-8">
		<h1
			class="
				h-36
				flex
				items-center
				justify-center
				text-6xl
				font-extrabold
				tracking-tight
			"
		>
			Cat Fetcher
		</h1>
		<button
			type="button"
			class="
				inline-block
				px-6
				py-2.5
				bg-white
				text-gray-800
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
			@click="store.getCats"
		>
			Get More Cats!
		</button>
		<div v-if="store.loading">Getting more cats...</div>
		<div v-else class="grid grid-cols-5 gap-4">
			<CatCard v-for="cat in store.cats" :key="cat.id" :cat="cat" />
		</div>
	</div>
</template>
