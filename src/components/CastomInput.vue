<template>
   <div class="text-input" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
      <label :for="name">{{ label }}</label>
      <input :name="name" :id="name" :type="type" :value="inputValue" :placeholder="placeholder" @input="handleChange"
         @blur="handleBlur" />

      <p class="help-message" v-show="errorMessage || meta.valid">
         {{ errorMessage || successMessage }}
      </p>
   </div>
</template>
 
<script setup lang="ts">
import { toRef, onMounted } from 'vue';
import { useField } from 'vee-validate';
import * as yup from 'yup';

//const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const shema = {
   text: yup.string(),
   url: yup.string().url(),
   //yup.object({
   //   'text': yup.string(),
   //   //'lastName': yup.string().required("Value is required"),
   //   //'email': yup.string().email(),
   //   //'phone': yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must contain 10 characters").max(10, "Phone number must contain 10 characters"),

   //})
}
onMounted(() => console.log(name.value))
const props = defineProps({
   type: {
      type: String,
      default: 'text',
   },
   modelValue: {
      type: String,
      default: '',
   },
   name: {
      type: String,
      required: true,
   },
   label: {
      type: String,
      required: true,
   },
   successMessage: {
      type: String,
      default: '',
   },
   placeholder: {
      type: String,
      default: '',
   },
});

const name = toRef(props, 'name');

const {
   value: inputValue,
   errorMessage,
   handleBlur,
   handleChange,
   meta,
} = useField(name, shema[name.value], {
   initialValue: props.modelValue,
});
</script>

<style scoped>
.TextInput {
   position: relative;
   margin-bottom: calc(1em * 1.5);
   /*width: 100%;*/
}

label {
   display: block;
   margin-bottom: 4px;
   width: 100%;
}

input {
   border-radius: 5px;
   border: 2px solid transparent;
   padding: 10px 10px;
   outline: none;
   background-color: #f2f5f7;
   width: 100%;
   transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
}

input:focus {
   border-color: var(--primary-color);
}

.help-message {
   position: absolute;
   /*top: 5px;*/
   bottom: calc(-1.5 * 1em);
   left: 0;
   margin: 0;
   font-size: 14px;
   color: red;
}

.TextInput.has-error input {
   background-color: var(--error-bg-color);
   color: var(--error-color);
}

.TextInput.has-error input:focus {
   border-color: var(--error-color);
}

.TextInput.has-error .help-message {
   color: var(--error-color);
}

.TextInput.success input {
   background-color: var(--success-bg-color);
   color: var(--success-color);
}

.TextInput.success input:focus {
   border-color: var(--success-color);
}

.TextInput.success .help-message {
   color: var(--success-color);
}
</style>