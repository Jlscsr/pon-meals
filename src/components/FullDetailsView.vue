<template>
    <section class="meal mt-lg">
        <div class="meal__card">
            <section class="meal__card__first-row">
                <div class="meal__card__first-row__meal-details">
                    <div class="meal__card__first-row__meal-details__name">
                        <h1>{{ mealsDetails.strMeal }}</h1>
                    </div>
                    <div class="meal__card__first-row__meal-details__category-country">
                        <h3>{{ mealsDetails.strArea }}</h3>
                        <h3>{{ mealsDetails.strCategory }}</h3>
                    </div>
                    <div class="meal__card__first-row__meal-details__youtube-btn">
                        <a :href="mealsDetails.strYoutube" target="_blank" class="default-button">Video Tutorial</a>
                    </div>
                </div>
                <figure class="meal__card__first-row__meal-img">
                    <img :src="mealsDetails.strMealThumb" :alt="mealsDetails.strMeall">
                </figure>
            </section>
            <section class="meal__card__second-row">
                <div class="meal__card__second-row__ingredients">
                    <ul>
                        <li v-for="ingredient in ingredients" :key="ingredient">
                            {{ ingredient }}
                        </li>
                    </ul>
                </div>
                <div class="meal__card__second-row__instructions">
                    <p>{{ mealsDetails.strInstructions }}</p>
                </div>
            </section>
        </div>
    </section>
</template>

<script src="./script/FullDetails"></script>

<style lang="scss">
@import "./style/fullDetails.scss";
</style>