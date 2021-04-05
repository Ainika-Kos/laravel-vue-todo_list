<template>
  <div class="addTask">
    <input type="text" placeholder="Enter your task..." v-model="item.name" @keyup.enter="addTask"/>
    <button>
      <font-awesome-icon icon="plus" size="lg" @click="addTask" />
    </button>
  </div>
</template>

<style src="./addTaskForm.scss" lang="scss" scoped></style>

<script>
export default {
  data() {
    return {
      item: {
        name: "",
      },
    };
  },
  methods: {
    addTask() {
      if (this.item.name == "") {
        return;
      }
      axios
        .post('api/item/store', {
          item: this.item,
        })
        .then((response) => {
          if (response.status == 201) {
            this.item.name = '';
            this.$emit('reloadlist');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>