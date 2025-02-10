<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
        <p v-if="isLoading"> Loading...</p>
      <ul>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  mounted() {
    this.loadExperiences();
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    loadExperiences() {
      fetch('https://vue-http-demo-768f1-default-rtdb.firebaseio.com/surveys.json').then((response) => {
        this.isLoading = true;
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        console.log(data);
        const results = []
        for (const id in data) {
          results.push({ id: id, name: data[id].name, reting: data[id].rating });
          // this.results = data;
        }
        this.results = results;
        this.isLoading = false;
      });
    },
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>