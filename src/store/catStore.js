import { defineStore } from "pinia";
import { ref } from "vue";

export const useCatStore = defineStore("catStore", () => {
	const cats = ref([]);
	const loading = ref(false);
	async function getCats() {
		loading.value = true;
		let res = await fetch(
			"https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",
			{
				method: "GET",
				headers: {
					"x-api-key": import.meta.env.VITE_CAT_API_KEY,
				},
			}
		)
			.then((resp) => {
				return resp.json();
			})
			.finally(() => {
				loading.value = false;
			});

		cats.value = await res;
	}

	return { cats, getCats, loading };
});
