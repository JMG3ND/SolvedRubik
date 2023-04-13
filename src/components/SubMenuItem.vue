<script setup>
  defineProps(['title', 'description', 'color']);
</script>

<template>
    <li class="sub-menu__content-item dospordos-link-container">
      <a class="sub-menu__link" href="#">
        <div :class="'sub-menu__icon sub-menu__icon--' + color"></div>
        <div class="sub-menu__contain">
          <div class="sub-menu__heading">{{ title }}</div>
          <p class="sub-menu__description">{{ description }}</p>
        </div>
      </a>
    </li>
</template>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

@media screen and (min-width: 851px) {
  .sub-menu {
    display: block;
    width: 100%;
    border-radius: 5px;
    padding: 0.5rem;
    list-style-type: none;
    background-color: $dark-baground-color-z-index-2;
    border: 1px solid $dark-border-box-color;
    box-shadow: 0px 0px 1px $dark-border-box-color;

    body.light & {
      background-color: $light-baground-color-z-index-2;
      border: 1px solid $light-border-box-color;
      box-shadow: 0px 0px 1px $light-border-box-color;
    }

    &__link {
      display: flex;
      align-items: center;
      padding: 12px;
      text-decoration: none;
      border-radius: 5px;
      width: 100%;
      height: 100%;

      &:hover {
        background-color: $dark-baground-color-z-index-1;

        body.light & {
          background-color: $light-baground-color-z-index-1;
        }
      }
    }

    &__icon {
      height: 2rem;
      margin-right: 0.75rem;
      width: 0.2rem;
      margin: 0px 12px 0px 0px;

      &--red {
        background-color: #ff012d;
      }

      &--green {
        background-color: #00c400;
      }

      &--orange {
        background-color: #ff5500;
      }

      &--blue {
        background-color: #0094c6;
      }

      &--yellow {
        background-color: #cacc06;
      }

      &--white {
        background-color: #dfe9e1;
      }
    }

    &__contain {
      background-color: transparent;

      & * {
        background-color: transparent;
      }
    }

    &__heading {
      margin: 0px 0px 5px 0px;
    }

    &__description {
      font-size: small;
    }
  }
}

@media screen and (max-width: 850px) {
  .sub-menu {
    width: 100%;
    list-style-type: none;
    background-color: $dark-baground-color-z-index-2;
    border-bottom: 1px solid $dark-border-box-color;
    border-top: 1px solid $light-border-box-color;
    box-shadow: 0px 0px 1px $dark-border-box-color;

    body.light & {
      background-color: $light-baground-color-z-index-2;
      border-bottom: 1px solid $light-border-box-color;
      border-top: 1px solid $light-border-box-color;
      ;
      box-shadow: 0px 0px 1px $light-border-box-color;
    }

    &__link {
      display: flex;
      align-items: center;
      padding: 12px;
      text-decoration: none;
      width: 100%;
      height: 100%;

      &:hover {
        background-color: $dark-baground-color-z-index-1;

        body.light & {
          background-color: $light-baground-color-z-index-1;
        }
      }
    }

    &__icon {
      height: 2rem;
      margin-right: 0.75rem;
      width: 0.2rem;
      margin: 0px 12px 0px 0px;

      &--red {
        background-color: #ff012d;
      }

      &--green {
        background-color: #00c400;
      }

      &--orange {
        background-color: #ff5500;
      }

      &--blue {
        background-color: #0094c6;
      }
    }

    &__contain {
      background-color: transparent;

      & * {
        background-color: transparent;
      }
    }

    &__heading {
      margin: 0px 0px 5px 0px;
    }

    &__description {
      font-size: small;
    }
  }
}
</style>