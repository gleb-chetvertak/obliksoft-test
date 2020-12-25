<template lang="pug">
  .os-notifications
    .os-notifications__header
      refresh-icon(
        @click="fetchJSONFile()"
      ).os-notifications__refresh
      p.os-notifications__info {{ `Повідомлень - ${listLength}` }}
      p.os-notifications__info {{ `Непрочитаних - ${unread.length}` }}
    os-notification(
      v-for="(ns, index) in unread"
      :itemData="ns"
      @click.native="clickedUnread(ns)"
    ).os-notifications__notification
    os-notification(
      v-for="(ns, index) in read"
      :itemData="ns"
      @click.native="clickedRead(ns)"
    ).os-notifications__notification
</template>

<script>

import osNotification from '@/components/osNotification.vue';
import RefreshIcon from '@/assets/images/refresh-icon.svg?inline';

export default {
  name: 'osNotifications',
  components: {
    osNotification,
    RefreshIcon,
  },
  data() {
    return {
      unread: [],
      read: [],
      listLength: null,
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    this.fetchJSONFile();
  },
  methods: {
    fetchJSONFile() {
      const httpRequest = new XMLHttpRequest();
      const vm = this;
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200 || httpRequest.status === 0) {
            const data = JSON.parse(httpRequest.responseText);
            vm.loadData(data.notifications);
          }
        }
      };
      httpRequest.open('GET', `${this.publicPath}db.json`);
      httpRequest.send();
    },
    loadData(data) {
      this.unread = [];
      this.read = [];
      this.listLength = null;

      this.listLength = data.length;
      const sorted = this.sortData(data);
      this.filterData(sorted, 'unread');
      this.filterData(sorted, 'read');
    },
    filterData(data, type) {
      const result = data.filter((n) => (type === 'read' ? n.read : !n.read));
      this[type].push(...result);
    },
    sortData(data) {
      const result = data.sort((a, b) => {
        const aDate = new Date(a.timestamp).getTime();
        const bDate = new Date(b.timestamp).getTime();
        return aDate > bDate ? -1 : 1;
      });
      return result;
    },
    clickedUnread(item) {
      const index = this.unread.indexOf(item);
      this.unread[index].read = true;
      this.unread.splice(index, 1);
      this.read.push(item);
      this.read = this.sortData(this.read);
    },
    clickedRead(item) {
      this.read.splice(this.read.indexOf(item), 1);
    },
  },
};
</script>

<style lang="scss">

.os-notifications {
  margin: 0 auto;
  box-shadow: $sh-1;

  &__header {
    display: flex;
    padding: 10px;
    background-color: $blue-2;
    justify-content: flex-start;
    align-items: center;
  }

  &__refresh {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    color: $blue-3;
    cursor: pointer;
  }

  &__info {
    margin-right: 30px;
    font-size: 14px;
    font-weight: 700;
  }

  &__notification {
    margin-bottom: 2px;
  }
}

</style>
