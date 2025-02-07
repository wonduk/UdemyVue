<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? 'favorite' : 'sss' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phone',
  //   'email',
  //   'isFavorite'
  // ],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true, //값이 필수인지 아닌지를 나타냄
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false, //기본값설정 function() {} 설정도 가능
      // validator: (value) => { //props데이터 검증
      //   return ['0', '1'].includes(value); // value가 0, 1 이어야만 true
      // },
    },

  },
  //emits을 명시하면 어떤값을 반환하고 사용하는지 좀 더 명시적으로 나타낼 수 있음.
  emtis: ['toggle-favorite','delete'],
  //해당 건은 어떻게 표시할 건지 좀 더 자세하게 설명하는거 그냥 이정도까지는 필요없을 듯.
  // emtis: {
  //   'toggle-favorite': function(id) {
  //     if(id === this.id) { //유효성 검사
  //       this.isFavorite =!this.isFavorite;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete', this.id);
    }
  }
};
</script>