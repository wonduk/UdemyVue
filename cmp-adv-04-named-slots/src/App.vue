<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <CourseGoals #default="slotProps" test="test">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </CourseGoals>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- component태그는 vue만의 기능으로 :is에 되어 있는 html태그로 변경을 시켜줌 -->
    <!-- 단점으로 html이 변경이 되면 기존에 있던 요소가 사라짐 그래서 그것을 보안하기 위한 방법이
     keep-alive태그로 감싸주는거임 -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
    test() {

    },
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>