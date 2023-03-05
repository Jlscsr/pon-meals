<template>
    <header class="header px-md py-sm">
        <nav class="header__navbar">
            <div class="header__navbar__logo">
                <a href="/card-show">Pon <span class="text-accent-1">Meals</span></a>
            </div>
            <ul class="header__navbar__nav-links">
                <li class="header__navbar__nav-links__nav-item">
                    <router-link to="/categories"
                        class="header__navbar__nav-links__nav-item__route">Categories</router-link>
                </li>
                <li class="header__navbar__nav-links__nav-item">
                    <router-link to="/countries" class="header__navbar__nav-links__nav-item__route">Countries</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    setup() {
        return {

        }
    }
}
</script>

<style lang="scss">
@import "./style/navbar.scss";
</style>