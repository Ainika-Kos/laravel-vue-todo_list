<template>
  <div class="taskView">
    <div class="taskView_input">
      <input
        type="checkbox"
        @change="triggerTask"
        v-model="item.completed"
        :id="item.name"
      />
      <span class="checkmark"></span>
      <label
        :class="[item.completed ? 'completed' : '', 'taskText']"
        :for="item.name"
      >
        {{ item.name }}
      </label>
    </div>
    <div>
      <button>
        <font-awesome-icon icon="trash-alt" @click="removeTask" />
      </button>
    </div>
  </div>
</template>

<style src="./taskView.scss" lang="scss" scoped></style>

<script>
export default {
  props: ["item"],
  methods: {
    triggerTask() {
      axios
        .put("api/item/" + this.item.id, {
          item: this.item,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$emit("taskchanged");
          }
        })
        .console.log(error);
    },
    removeTask() {
      axios
        .delete("/api/item/" + this.item.id)
        .then((response) => {
          if (response.status == 200) {
            this.$emit("taskchanged");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>