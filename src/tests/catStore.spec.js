import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCatStore } from "@/store/catStore.js";

describe("initial cat store tests", () => {
	let store = null;

	beforeEach(() => {
		setActivePinia(createPinia());
		store = useCatStore();
	});

	it("has no cats when the store is created", () => {
		expect(store.cats.length).toEqual(0);
	});

	it("has no favorite catInBasket when the store is created", () => {
		expect(store.catInBasket).toEqual({});
	});

	it("adds returned data from getCats into the store", () => {
		const catData = [
			{
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
			{
				breeds: [
					{
						id: "beng",
						name: "Bengal",
					},
				],
				id: "iWyIaja-G",
				url: "https://cdn2.thecatapi.com/images/iWyIaja-G.jpg",
				width: 1080,
				height: 769,
			},
		];
		store.addCatsToBasket(catData);
		expect(store.cats.length).toEqual(2);
	});
});
