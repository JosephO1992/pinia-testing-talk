<script setup>
	import { ref } from "vue";

	const cats = ref([]);

	async function getCats() {
		let res = await fetch(
			"https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",
			{
				method: "GET",
				headers: {
					"x-api-key": import.meta.env.VITE_CAT_API_KEY,
				},
			}
		).then((resp) => {
			return resp.json();
		});

		cats.value = await res;
	}

	getCats();
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
			@click="getCats"
		>
			Get More Cats!
		</button>
		<div class="grid grid-cols-5 gap-4">
			<div
				v-for="cat in cats"
				:key="cat.id"
				class="rounded-lg shadow-lg bg-white max-w-sm"
			>
				<a href="#!">
					<img class="rounded-t-lg" :src="cat.url" alt="cat-image" />
				</a>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2">
						{{ cat.breeds[0].name }}
					</h5>
					<p class="text-gray-700 text-base mb-4">
						{{ cat.breeds[0].origin }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
