<template>
  <div class="taskList">
    <h3 v-if="items.length === 1" class="taskListHeading">You have 1 task total:</h3>
    <h3 v-else-if="items.length > 1" class="taskListHeading">
      You have {{ items.length }} tasks total:
    </h3>
    <h3 v-else class="taskListHeading">Yo don't have any task yet</h3>
    <div v-for="(item, index) in items" :key="index">
      <task-view :item="item" v-on:taskchanged="$emit('reloadlist')"/>
    </div>
  </div>
</template>

<style src="./taskListView.scss" lang="scss" scoped></style>

<script>
import taskView from "../taskView/taskView";
export default {
  props: ['items'],
  components: { taskView },
};
</script>