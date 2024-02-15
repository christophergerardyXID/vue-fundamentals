<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"])
const onInput = (event) => emit("update:modelValue", event.target.value);
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label class="text-sm text-violet-500">
      Buscar producto
    </label>

    <input
        type="text"
        class="px-4 py-4 border-gray-400 border-2 rounded outline-0"
        placeholder="Escribe para buscar..."
        :value="props.modelValue"
        @input="onInput"
    >
  </div>
</template>
