<script setup>
import {computed, watch} from "vue";

const props = defineProps(["task"])
const emit = defineEmits(["TaskCompleted"]);

watch(props.task, () => {
  if (props.task.completed) {
    emit("TaskCompleted", props.task);
  }
})

const taskCompletedClass = computed(() => {
  return {
    'line-through': props.task.completed
  }
});

</script>

<template>
  <div
      class="flex justify-between items-center py-4 border-b-[1px] border-gray-300"
  >
    <h3 :class="taskCompletedClass">{{ props.task.title }}</h3>

    <input
        type="checkbox"
        v-model="props.task.completed"
    >
  </div>
</template>