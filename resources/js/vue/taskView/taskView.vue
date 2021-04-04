<template>
  <div class="taskView">
    <div>
      <input type="checkbox" @change="triggerTask" v-model="item.completed" />
      <span :class="[item.completed ? 'completed' : '', 'taskText']">{{
        item.name
      }}</span>
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
          axios.put('api/item/' + this.item.id, {
              item: this.item
          })
          .then(response => {
              if (response.status == 200) {
                  this.$emit('taskchanged')
              }
          })
          .console.log(error);
      },
      removeTask() {

      }
  }
};
</script>