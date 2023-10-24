<script lang="ts" setup></script>

<template>
  <header class="header">
    <AppContainer>
      <div class="header__wrapper">
        <NuxtLink class="header__logo" to="/">
          <IcLogo filled />
        </NuxtLink>
        <div class="header__navigation">
          <AppNavigation />
        </div>
        <div class="header__contacts">
          <div class="header__calls">
            <a class="header__calls-phone" href="tel:88652500520" rel="noopener">+7 (8652) 500-520</a>
            <span class="header__calls-callback">обратный звонок</span>
          </div>
          <a
            class="header__whatsapp"
            href="https://api.whatsapp.com/send/?phone=79283152020"
            target="_blank"
            rel="noopener"
          >
            <span class="header__whatsapp-icon">
              <IcWhatsapp filled />
            </span>
          </a>
        </div>
      </div>
    </AppContainer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 10;
  background: #000;
  padding: 35px 0;
  color: #fff;

  @include text-main-big;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 266px;
  }

  &__contacts {
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
    gap: 15px;
  }

  &__calls {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &-phone {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      color: $color-white;
      text-decoration: none;
    }

    &-callback {
      @include text-main-small;

      line-height: 14px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &__whatsapp {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #868789;
    border-radius: 50%;
    text-decoration: none;

    &-icon {
      max-width: 24px;
      max-height: 24px;
    }
  }
}
</style>
