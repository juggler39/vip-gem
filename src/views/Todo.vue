<template>
  <div class="todo-page">
    <h1>Todo</h1>
    <form @submit.prevent>
      <div class="mb1">
        <label for="task-label">Task Label: </label>
        <input type="text" id="task-label" v-model="newTask.label" />
      </div>
      <div class="mb1">
        <label for="task-type">Take Type: </label>
        <select name="task-type" id="task-type" v-model="newTask.type">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button @click="addTask">Add Task</button>
    </form>
    <h2>Task List</h2>
    <div>
      <button @click="listFilter = 'all'">All</button> |
      <button @click="listFilter = 'incomplete'">Incomplete</button> |
      <button @click="listFilter = 'complete'">Complete</button>
    </div>
    <p v-if="isLoading">Loading...</p>
    <ul v-else>
      <li v-for="(task, index) in filteredTasks" :key="`task-${index}`">
        <input type="checkbox" v-model="task.isComplete" /> {{ task.label }} ({{
          task.type
        }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
import { onMounted } from 'vue';
import { TodoItem } from '@/types/Todo';
export default defineComponent({
  setup() {
    const state = reactive({
      newTask: {
        label: '',
        type: 'personal'
      } as TodoItem,
      taskItems: [] as TodoItem[],
      listFilter: 'all',
      isLoading: false
    });

    const filteredTasks = computed(() => {
      if (state.listFilter === 'complete') {
        return state.taskItems.filter(
          (item: TodoItem) => item.isComplete === true
        );
      } else if (state.listFilter === 'incomplete') {
        return state.taskItems.filter(
          (item: TodoItem) => item.isComplete === false
        );
      } else {
        return state.taskItems;
      }
    });

    const addTask = () => {
      state.taskItems.push({
        ...state.newTask,
        isComplete: false
      });
      fetch('https://vip-gem-default-rtdb.firebaseio.com/tasks.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state.newTask, isComplete: false })
      });
    };

    const loadTasks = () => {
      state.isLoading = true;
      fetch('https://vip-gem-default-rtdb.firebaseio.com/tasks.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          state.taskItems = [...(Object.values(data) as TodoItem[])];
          state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(() => {
      loadTasks();
    });

    return {
      ...toRefs(state),
      filteredTasks,
      addTask,
      loadTasks
    };
  }
});
</script>

<style scoped>
.todo-page {
  max-width: 800px;
  margin: 0 auto;
}
ul {
  list-style: none;
}
.mb1 {
  margin-bottom: 1rem;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
select,
input {
  border: 1px solid black;
}
</style>
