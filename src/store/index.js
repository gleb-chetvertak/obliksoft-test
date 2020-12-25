import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: [
      {
        id: 1,
        name: 'Александра Александрова',
        gender: 'female',
        messenger: 'viber',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-20T14:40:35.054562',
        read: false,
      },
      {
        id: 2,
        name: 'Александр Александров',
        gender: 'male',
        messenger: 'telegram',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-19T14:40:35.054562',
        read: false,
      },
      {
        id: 3,
        name: 'Александра Александрова',
        gender: 'female',
        messenger: 'viber',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-18T14:40:35.054562',
        read: true,
      },
      {
        id: 4,
        name: 'Александр Александров',
        gender: 'male',
        messenger: 'telegram',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-17T14:40:35.054562',
        read: true,
      },
      {
        id: 5,
        name: 'Александра Александрова',
        gender: 'female',
        messenger: 'viber',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-16T14:40:35.054562',
        read: false,
      },
      {
        id: 6,
        name: 'Александр Александров',
        gender: 'male',
        messenger: 'telegram',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-15T14:40:35.054562',
        read: false,
      },
      {
        id: 7,
        name: 'Александра Александрова',
        gender: 'female',
        messenger: 'viber',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-14T14:40:35.054562',
        read: true,
      },
      {
        id: 8,
        name: 'Александр Александров',
        gender: 'male',
        messenger: 'telegram',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-13T14:40:35.054562',
        read: true,
      },
      {
        id: 9,
        name: 'Александра Александрова',
        gender: 'female',
        messenger: 'viber',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-12T14:40:35.054562',
        read: false,
      },
      {
        id: 10,
        name: 'Александр Александров',
        gender: 'male',
        messenger: 'telegram',
        phone: '0955555555',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt omnis eum dignissimos, minima perferendis autem saepe sed mollitia eius cupiditate molestias facilis deserunt similique quod reprehenderit nemo illum dicta sequi repellat, nam debitis. Rerum sed veritatis alias nobis porro blanditiis vero corporis voluptates, expedita numquam aliquam quaerat eum doloribus, sequi enim ullam consequatur tenetur dolorem ipsam necessitatibus quibusdam totam explicabo in eaque. Quas quam obcaecati harum exercitationem sunt, laboriosam autem distinctio voluptates. Enim ex eius assumenda cum maxime vitae consequatur amet dolores illum. Odio, dolor porro. Expedita accusantium minima earum accusamus ullam officia rem, vel tempore voluptatem quia itaque!',
        timestamp: '2020-12-11T14:40:35.054562',
        read: false,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    NOTIFICATIONS(state) {
      return state.notifications;
    },
  },
  modules: {
  },
});
