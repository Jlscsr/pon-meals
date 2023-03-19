<template>
    <section class="search-view">
        <div class="search-view__content">
            <header class="search-view__content__ask">
                <h1>Feeling hungry? Let's cook something <span class="text-accent-1">delicious</span>!</h1>
            </header>
            <div class="search-view__content__input-container">
                <section class="search-view__content__input-container__input">
                    <input v-model="foodName" type="text" placeholder="e.g. 'A' or 'Egg'" name="foodname" required
                        @focus="onFocused()" autocomplete="off" aria-label="Food name" aria-required="true"
                        @keyup.enter="searchMeals(foodName)">
                    <div class="search-view__content__error-container" :class="{ 'hide-error': isInputFocused }">
                        <p>Invalid input!</p>
                    </div>
                </section>
                <section class="search-view__content__button-container">
                    <button class="button-svg border-radius-3" @click="searchMeals(foodName)">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 512.009 512.009"
                            xml:space="preserve">
                            <g>
                                <path
                                    d="M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z"
                                    data-original="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </section>
            </div>
        </div>
    </section>
</template>

<script src="./script/Search.js"></script>

<style lang="scss">
@import "./style/searchView.scss";
</style>