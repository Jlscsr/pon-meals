<template>
    <div v-if="!pageLoadingState" class="meals">
        <div class="meals__header">
            <h1>{{ pageTitle }}</h1>
        </div>
        <div class="divider"></div>
        <div class="meals__container">
            <div v-for="meal in searchedMeals" :key="meal.idMeal" class="meals__container__card border-radius-5">
                <div class="meals__container__card__img border-radius-3">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="border-radius-5" loading="lazy">
                </div>
                <div class="divider"></div>
                <div class="meals__container__card__contents">
                    <div class="meals__container__card__contents__heading">
                        <div class="meals__container__card__contents__heading__meal-name">
                            <h3>{{ meal.strMeal }}</h3>
                        </div>
                        <div class="meals__container__card__contents__heading__country-name">
                            <h3>{{ meal.strArea }}</h3>
                        </div>
                    </div>
                    <div class="meals__container__card__contents__category">
                        <div class="meals__container__card__contents__category__category-name">
                            <p>{{ meal.strCategory }}</p>
                        </div>
                    </div>
                    <div class="meals__container__card__contents__tags">
                        <div class="meals__container__card__contents__tags__tags-name">
                            <p>{{ !meal.strTags ? 'no tags' : meal.strTags.replace(/,/g, ', ') }}</p>
                        </div>
                    </div>
                    <div class="meals__container__card__contents__button">
                        <button class="default-button" @click="seeFullDetails(meal.idMeal)">Cook it!</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div v-else class="loading-container">
        <div class="loading"></div>
    </div>
</template>

<script src="./script/MealsCard"></script>

<style lang="scss">
@import "./style/mealsCard.scss";
</style>