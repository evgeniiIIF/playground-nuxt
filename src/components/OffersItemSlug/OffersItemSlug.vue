<script setup lang="ts">
import { useOffersStore } from '@/store/offers';
import { formatDate } from './OffersItemSlug.utils';

const { offersEffects, offersState } = useOffersStore();

const { slug } = useRoute().params;

await useAsyncData('offer', async () => {
  await Promise.all([offersState.value.offersItemSlug.slug !== slug && offersEffects.fetchOffersItems(slug as string)]);
});

const [isOpenModal, openModal, closeModal] = useBooleanState(false);

const currentOffersItemSlug = computed(() => offersState.value.offersItemSlug);
const datePubic = computed(() => formatDate(currentOffersItemSlug.value.created_at));
const anotherOffersItems = computed(() =>
  offersState.value.offersItems.filter((item) => item.slug !== currentOffersItemSlug.value.slug).slice(0, 3),
);
</script>
<template>
  <section class="offers-item-slug">
    <div class="container">
      <div class="offers-item-slug__wrapper">
        <div class="offers-item-slug__description">
          <div class="offers-item-slug__head">
            <div class="offers-item-slug__title">{{ currentOffersItemSlug.title }}</div>
            <div class="offers-item-slug__date">{{ datePubic }}</div>
          </div>
          <div class="offers-item-slug__body">
            <div class="offers-item-slug__image ibg">
              <img :src="currentOffersItemSlug.image" :alt="currentOffersItemSlug.title" />
            </div>
            <div class="offers-item-slug__content content-offers-item-slug">
              <div class="content-offers-item-slug__text">{{ currentOffersItemSlug.preview_text }}</div>
              <div class="content-offers-item-slug__button">
                <UIButton text="Записаться на сервис" @click="openModal" />
              </div>
              <div class="content-offers-item-slug__notice">
                <p>*считывание кодов ошибок производится бесплатно для клиента.</p>
                <p>**поиск и устранение неисправностей производится за счет клиента.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="offers-item-slug__another another-offers">
          <h2 class="another-offers__title">Другие акции</h2>
          <div class="another-offers__row">
            <div v-for="item in anotherOffersItems" :key="item.id" class="another-offers__card">
              <OffersItemCard
                :title="item.title"
                :text="item.preview_text"
                :image="item.image"
                :image-mobile="item.image_mobile"
                :slug="item.slug"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offers-item-slug__modal">
      <UIModal :is-open="isOpenModal" position="center" @on-close="closeModal">
        <AppCallbackForm title="Обратный звонок" />
      </UIModal>
    </div>
  </section>
</template>

<style lang="scss">
.offers-item-slug {
  &__wrapper {
    padding: 80px 0;
  }
  &__head {
    margin-bottom: 22px;
  }
  &__title {
    @include title-slug();
    color: $color-blue;
    margin-bottom: 14px;
  }
  &__date {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 125% */
    color: var(--7, #a7b0b0);
  }
  &__body {
    display: flex;
    @include mobile() {
      flex-direction: column;
    }
  }
  &__image {
    flex: 1 1 auto;
    padding-top: 28.3333333%;
    margin-right: 50px;
    @include mobile() {
      padding-top: 60.9756098%;
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
  &__content {
    flex: 0 0 46.6666667%;
  }
}

.content-offers-item-slug {
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  @include mobile() {
    padding-top: 0;
    margin-bottom: 30px;
  }
  &__text {
    flex: 1 1 auto;
    margin-bottom: 25px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--Black, #18243c);
  }
  &__button {
    margin-bottom: 9px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 214.286% */
    color: #fff;
    @include mobile() {
      margin-bottom: 19px;
    }

    .button {
      background: #00a19c;
      @include mobile() {
        width: 100%;

        font-size: 10px;
        font-weight: 400;
        line-height: 15px; /* 150% */
      }
    }
  }
  &__notice {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 150% */
    color: #b3baba;
  }
}

.another-offers {
  padding-top: 40px;
  &__row {
    @include row-flex();
  }

  &__title {
    margin-bottom: 30px;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 133.333% */
    color: var(--Black, #18243c);
  }

  &__card {
    @include col();
    @include size(4);
    @include mobile() {
      @include size(12);
    }
    .popup-offers-item-card {
      display: flex;
      flex-direction: column;
      padding: 15px 20px;
      &__title {
        flex: 1 1 auto;
        font-size: 20px;
        margin-bottom: 4px;
      }
      &__text {
        display: none;
        font-size: 10px;
        max-width: 100%;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
