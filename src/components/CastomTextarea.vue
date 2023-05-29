<script setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
   type: {
      type: String,
      default: 'text'
   },
   modelValue: {
      type: String,
      default: ''
   },
   value: {
      type: String,
      default: ''
   },
   name: {
      type: String,
      required: true
   },
   label: {
      type: String,
      required: true
   },
   placeholder: {
      type: String,
      default: ''
   }
})

const name = toRef(props, 'name')

const {
   value: inputValue,
   errorMessage,
   handleBlur,
   handleChange
   //meta,
} = useField(name, undefined, {
   initialValue: props.modelValue
})
</script>

<template>
   <div
      class="TextInput"
      :class="{ 'has-error': !!errorMessage }"
   >
      <label :for="name">{{ label }}</label>
      <textarea
         rows="3"
         :name="name"
         :id="name"
         :type="type"
         :value="inputValue"
         :placeholder="placeholder"
         @input="handleChange"
         @blur="handleBlur"
      />
      <p
         class="help-message"
         v-show="errorMessage"
      >
         {{ errorMessage }}
      </p>
   </div>
</template>

<style scoped>
.TextInput {
   position: relative;
   margin-bottom: calc(1em * 1.5);
   width: 100%;
}

label {
   display: block;
   margin-bottom: 4px;
   width: 100%;
}

textarea {
   border-radius: 5px;
   border: 2px solid transparent;
   padding: 15px 10px;
   outline: none;
   background-color: #f2f5f7;
   width: 100%;
   transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
}

textarea:focus {
   border-color: var(--primary-color);
}

.help-message {
   position: absolute;
   bottom: calc(-1.5 * 1em);
   left: 0;
   margin: 0;
   font-size: 14px;
   color: red;
}

.TextInput.has-error textarea {
   background-color: var(--error-bg-color);
   color: var(--error-color);
}

.TextInput.has-error textarea:focus {
   border-color: var(--error-color);
}

.TextInput.has-error .help-message {
   color: var(--error-color);
}

.TextInput.success textarea {
   background-color: var(--success-bg-color);
   color: var(--success-color);
}

.TextInput.success textarea:focus {
   border-color: var(--success-color);
}

.TextInput.success .help-message {
   color: var(--success-color);
}
</style>
