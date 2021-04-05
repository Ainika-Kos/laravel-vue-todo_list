<template>
  <div class="todoListContainer">
    <div class="container">
      <div class="row center-xs">
        <div class="col-xs-12">
          <h2 class="heading">Hey, Your Todo List is here!</h2>
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-12 col-md-9">
          <add-task-form v-on:reloadlist="getTaskList" />
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-12 col-md-9">
          <task-list-view :items="items" v-on:reloadlist="getTaskList" />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./app.scss" lang="scss" scoped></style>

<script>
import addTaskForm from "./addTaskForm/addTaskForm";
import taskListView from "./taskListView/taskListView"; //
export default {
  components: {
    addTaskForm,
    taskListView,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getTaskList() {
      axios
        .get("api/items")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getTaskList();
  },
};
</script>