import catCard from "@/components/catCard.vue";
import { createTestingPinia } from "@pinia/testing";
import { afterEach, describe, expect, it, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { useCatStore } from "@/store/catStore.js";

describe("catCard.vue", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(catCard, {
			propsData: {
				cat: {
					breeds: [
						{
							id: "bsho",
							name: "British Shorthair",
						},
					],
					id: "qXypILClv",
					url: "https://cdn2.thecatapi.com/images/qXypILClv.jpg",
					width: 960,
					height: 826,
				},
			},
			global: {
				plugins: [
					createTestingPinia({
						createSpy: vi.fn,
						initialState: {
							catStore: {
								catInBasket: {
									breeds: [
										{
											id: "bsho",
											name: "British Shorthair",
										},
									],
									id: "qXypILClv",
									url: "https://cdn2.thecatapi.com/images/qXypILClv.jpg",
									width: 960,
									height: 826,
								},
							},
						},
					}),
				],
			},
		});
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it("mounts", () => {
		expect(wrapper.exists()).toBe(true);
	});

	it("adds the cat to the basket when they click the add cat button", async () => {
		const store = useCatStore();
		const button = wrapper.find('[data-testId="add-cat-button"]');
		await button.trigger("click");
		expect(store.addCatToBasket).toHaveBeenCalledOnce();
	});
	it('applies the "shadow-white" class when the same cat is in the catInBasket', () => {
		const card = wrapper.get('[data-testId="cat-card"]');
		expect(card.classes()).toContain("shadow-white");
	});
});
