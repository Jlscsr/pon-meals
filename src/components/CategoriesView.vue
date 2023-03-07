<template>
    <div class="categories">
        <div class="categories__header">
            <div class="categories__header__title">
                <h1>Categories</h1>
            </div>
        </div>
        <div class="categories__card">
            <div class="categories__card__img-container">
                <img src="https://www.themealdb.com//images//category//beef.png" alt="categoryName">
            </div>
            <div class="categories__card__category-title">
                <div class="categories__card__category-title__title">
                    <h2>Beef</h2>
                </div>
            </div>
            <div class="categories__card__divider"></div>
            <div class="categories__card__button-container">
                <button type="submit">View meals</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        return {

        }
    }
}
</script>

<style lang="scss">
@import "./style/categories.scss"
</style>