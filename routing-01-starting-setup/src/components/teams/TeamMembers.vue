<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2" > Go to Next</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users','teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // teamId = this.$route.params.teamId;
    const selectedTeam = this.teams.find(team => team.id === teamId);
    const members = selectedTeam.members
    const selectMembers = [];
    for (const memeber of members) {
      const selectedUser = this.users.find(user => user.id === memeber);
      selectMembers.push(selectedUser);
    }
    this.members = selectMembers;
    this.teamName = selectedTeam.name;
    }
  },
  watch: {
    $route() {
      this.loadTeamMembers(this.teamId);
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>