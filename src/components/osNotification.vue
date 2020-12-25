<template lang="pug">
  div(
    :class="{'os-notification--unread': !itemData.read}"
  ).os-notification
    div(
      :class="`os-notification__avatar--${itemData.gender}`"
    ).os-notification__avatar
      male-icon(
        v-if="itemData.gender === 'male'"
      ).os-notification__gender.os-notification__gender--male
      female-icon(
        v-else
      ).os-notification__gender.os-notification__gender--female
      .os-notification__messenger
        img(
          :src="require(`@/assets/images/${itemData.messenger}-icon.png`)"
          :alt="itemData.messenger"
        ).os-notification__messenger-icon
    div.os-notification__bio
      p.os-notification__name {{ itemData.name }}
      p {{ itemData.phone }}
    p.os-notification__text {{ text }}
    p.os-notification__date {{ getTime(itemData.timestamp) }}
    p.os-notification__date {{ getDate(itemData.timestamp) }}
</template>

<script>

import MaleIcon from '@/assets/images/male-icon.svg?inline';
import FemaleIcon from '@/assets/images/female-icon.svg?inline';

export default {
  name: 'osNotification',
  components: {
    MaleIcon,
    FemaleIcon,
  },
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    text() {
      const result = this.itemData.text.substring(0, 150);
      return `${result}...`;
    },
  },
  methods: {
    getTime(ts) {
      const date = new Date(ts);
      return `${date.getHours()}:${date.getMinutes()}`;
    },
    getDate(ts) {
      const date = new Date(ts);
      return `${date.getDate()}.${date.getMonth()}.${date.getYear()}`;
    },
  },
};
</script>

<style lang="scss">

.os-notification {
  display: flex;
  padding: 15px 45px;
  justify-content: flex-start;
  align-items: center;
  background-color: $blue-1;
  cursor: pointer;

  &--unread {
    background-color: $white;
  }

  &__avatar {
    display: flex;
    width: 70px;
    height: 70px;
    border: 3px solid $white;
    border-radius: 50%;
    margin-right: 15px;
    flex-shrink: 0;
    position: relative;
    justify-content: center;
    align-items: center;
    box-shadow: $sh-1;

    &--male {
      background-color: $blue-3;
    }

    &--female {
      background-color: $red-1;
    }
  }

  &__gender {
    width: 30px;
    height: 30px;

    &--male {
      color: $blue-4;
    }

    &--female {
      color: $red-2;
    }
  }

  &__messenger {
    width: 25px;
    height: 25px;
    border: 3px solid $white;
    border-radius: 50%;
    position: absolute;
    right: -5px;
    bottom: -5px;
    box-shadow: $sh-1;
  }

  &__messenger-icon {
    width: 100%;
  }

  &__bio {
    width: 180px;
    font-size: 14px;
    font-weight: 700;
  }

  &__name {
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__text {
    max-width: 600px;
    padding: 0 30px;
    margin: 0 auto;
    font-size: 14px;
    color: $blue-4;
  }

  &__date {
    margin-left: 30px;
    font-size: 14px;
    color: $gray-1;
  }
}

</style>
