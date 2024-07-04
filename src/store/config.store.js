// src/stores.js
import { writable } from 'svelte/store';

// Create a writable store with an initial value
export const config = writable({
    key : "",
    type : "",
    type_description : "",
    children : []
});

export const childrenCount = writable(0);