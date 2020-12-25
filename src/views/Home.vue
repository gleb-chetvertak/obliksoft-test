<template lang="pug">
  .home
    os-notifications
</template>

<script>

import osNotifications from '@/components/osNotifications.vue';

export default {
  name: 'Home',
  components: {
    osNotifications,
  },
};
</script>

<style lang="scss">

.home {
  padding: 80px 50px 30px 200px;
  background-color: #f1f2f7;
}

</style>
