<script setup>
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '',
    required: false,
  }
})

</script>

<template>
  <div class="flex flex-col items-start gap-y-2">
    <label class="text-gray-400 text-sm">{{ props.label }}</label>

    <input
        :type="props.type"
        :placeholder="props.placeholder"
        class="py-2 px-4 rounded border-gray-400 border-2 outline-0 w-full"
    >
  </div>
</template>
