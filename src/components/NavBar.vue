<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex justify-around w-1/5">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
              <img
                src="../assets/images/logo/logo-orange.png"
                alt="Logo"
                class="h-10 w-25 mr-2"
              />
            </a>
          </div>
          <!-- Primary Navbar items -->
        </div>
        <div class="flex items-center w-3/5">
          <form action="" class="w-full">
            <a-input placeholder="Basic usage">
              <template #suffix>
                <a-tooltip
                  title="Extra information"
                  class="w-10 flex items-center justify-around"
                >
                  <a
                    href=""
                    class="
                      py-2
                      px-2
                      font-medium
                      text-white
                      bg-orange-500
                      hover:bg-orange-400
                      transition
                      duration-300
                    "
                  >
                    <SearchOutlined />
                  </a>
                </a-tooltip>
              </template>
            </a-input>
          </form>
        </div>
        <!-- Secondary Navbar items -->
        <div class="flex items-center justify-around w-1/5">
          <button
            class="
              py-2
              px-2
              bg-orange-500
              flex
              items-center
              text-white
              space-x-2
              hover:bg-orange-400
              transition
              duration-300
            "
            @click="showModal"
          >
            <UserOutlined />
            <div class="hidden md:flex">Đăng nhập/Đăng ký</div>
          </button>
          <a-modal
            v-model:visible="visible"
            @ok="handleOk"
            :footer="null"
            class="new-style"
          >
            <div class="w-3/5 p-6">
              <div class="heading">
                <h4 class="text-2xl font-semibold">Đăng nhập bằng email</h4>
                <p>Nhập email và mật khẩu tài khoản Passdo</p>
              </div>
              <div class="form mt-5">
                <a-input placeholder="abc@gmail.com" />
                <a-input-password placeholder="Mật khẩu" />
              </div>
              <a-button key="submit" :loading="loading" @click="handleOk"
                >Đăng nhập
              </a-button>
            </div>
            <div class="w-2/5 icon">
              <img
                src="../assets/images/icon/cat.svg"
                class="w-4/5 cat"
                alt=""
              />
              <img
                src="../assets/images/icon/mountain.svg"
                class="w-full mountain"
                alt=""
              />
            </div>
          </a-modal>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
.new-style .ant-modal-close {
  top: -20px !important;
  right: -20px !important;
  border-radius: 50% !important;
  @apply bg-white w-10 h-10 flex items-center order-2 !important;
}
.new-style .ant-modal-content {
  @apply rounded-2xl !important;
}
.new-style .ant-modal-body {
  @apply flex !important;
  padding: 0;
}
.new-style .ant-input {
  @apply text-lg !important;
}
.new-style .icon {
  position: relative;
}
.icon > .mountain {
  position: absolute;
  bottom: 0;
  right: 0;
}
.icon > .cat {
  position: absolute;
  right: 20px;
  bottom: 60px;
}
</style>
<style scoped>
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
.new-style .ant-input-password > input {
  border: none !important;
}
input:focus {
  box-shadow: none !important;
}
.ant-input-affix-wrapper-focused {
  box-shadow: none !important;
}
.ant-btn {
  @apply mt-3 bg-orange-500 text-white hover:bg-orange-400 w-full !important;
  box-shadow: none !important;
  border: none !important;
}
</style>

<script>
import { SearchOutlined, UserOutlined } from "@ant-design/icons-vue";
export default {
  name: "NavBar",
  data() {
    return {
      loading: false,
      visible: false,
    };
  },
  components: {
    SearchOutlined,
    UserOutlined,
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.visible = false;
      }, 2000);
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
