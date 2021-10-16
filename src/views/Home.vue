<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.ant-modal .ant-modal-close {
  top: -20px !important;
  right: -20px !important;
  border-radius: 50% !important;
  @apply bg-white w-10 h-10 flex items-center order-2 !important;
}
.ant-modal-content {
  @apply rounded-2xl !important;
}
.ant-input {
  border: none !important;
  border-bottom: 1px solid #808080 !important;
  @apply text-lg !important;
}
.ant-input-password {
  border: none !important;
  border-bottom: 1px solid gray !important;
  @apply mt-3 text-lg !important;
}
.ant-input-password > input {
  border: none !important;
}
input:focus {
  box-shadow: none !important;
}
.ant-input-affix-wrapper-focused {
  box-shadow: none !important;
  @apply text-lg;
}
.ant-btn {
  @apply mt-3 bg-orange-500 text-white hover:bg-orange-400 w-3/5 !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
