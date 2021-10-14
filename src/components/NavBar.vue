<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex justify-around w-1/5">
          <div >
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
              <img src="../assets/images/logo/logo-orange.png" alt="Logo" class="h-10 w-25 mr-2">
            </a>
          </div>
          <!-- Primary Navbar items -->
        </div>
        <div class="flex items-center w-3/5">
            <form action="" class="w-full">
              <a-input placeholder="Basic usage">
                <template #suffix>
                  <a-tooltip title="Extra information" class="w-10 flex items-center justify-around">
                    <a href="" class="py-2 px-2 font-medium text-white bg-orange-500 hover:bg-orange-400 transition duration-300">
                      <SearchOutlined />
                    </a>
                  </a-tooltip>
                </template>
              </a-input>
            </form>
          </div>
        <!-- Secondary Navbar items -->
        <div class="flex items-center justify-around w-1/5">
          <button class="py-2 px-2 bg-orange-500 flex items-center text-white space-x-2 hover:bg-orange-400 transition duration-300">
            <UserOutlined/>
            <div class="hidden md:flex">
              Đăng nhập/Đăng ký
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>

</style>

<script>
import { SearchOutlined, UserOutlined } from '@ant-design/icons-vue';
export default {
  name: "NavBar",
  components: {
    SearchOutlined,
    UserOutlined
  },
  methods: {
    Toggle() {
      document.querySelector(".mobile-menu").classList.toggle("hidden");
    }
  }
}
</script>
