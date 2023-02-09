<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import {ref} from 'vue';
import {NButton,NSpace, NPageHeader, NBreadcrumb, NBreadcrumbItem,NGrid,NGi,NDropdown} from 'naive-ui';
const enable = true;
const disable = false;
const options = [
  {
    label:"Money will come and go",
    key:"外面正在下大雨"
  },
  {
    label:"It was quite by accident",
    key:"真是始料未及"
  },
  {
    label:"Every dog has his day",
    key:"時來運轉"
  }
];
const practiceThemes = ref(
[
"Schulte Table",
      "7+2 rule",
      "Working Memory Capacity",
      "Match Practice",
      "Prospective Memory",
      "Retrospective Memory",
      "word puzzle",
      "imagine table items"
    ]
)
const breadcrumb = ref([
  "Bypasses",
  "Matter",
  "Uplifting",
  "Resilience",
  "Plumbing Command",
  "unveil"
]);
</script>

<template>
  <n-space :wrap="enable" justify="center" size="small" style="width:100%" :vertical="enable">
      <div style="display:block; width:100%; background: red"> test </div>
      <NPageHeader subtitle="SPY SCHOOL: Are you Sharp Enough to be a KGB Agent?" style="flex-grow:1: width:100%">
        <template #header>
          <n-breadcrumb>
              <n-breadcrumb-item v-for="item in breadcrumb">{{item}}</n-breadcrumb-item>
          </n-breadcrumb>
        </template>      
        <template  #title>
          <span class="white-txt">Mnemonic</span> 
        </template>
        <template #extra>
          <n-space style="margin-left: 100px;">
            <n-button>Zaidgarnik Effect</n-button>
                <n-dropdown trigger="hover" :options="options">
                  <n-button>...need more</n-button>
                </n-dropdown>
          </n-space>
        </template>
        <n-grid :cols="4" x-gap="10" y-gap="10">
            <n-gi v-for="(item, index) in practiceThemes" class="txt" :class="[index%2===0?'light-green':'green']">{{item}}</n-gi>
            <!-- <n-gi class="txt light-green"><RouterLink to="/about">About</RouterLink></n-gi>
            <n-gi class="txt green"><RouterLink to="/">Home</RouterLink></n-gi> -->
        </n-grid>
      </NPageHeader>    
      <!-- <RouterView /> -->
  </n-space>
  
</template>

<style scoped>
.white-txt{
  color:white;
}
.txt{
  display:flex;
  align-items: center;
  justify-content: center;
}
.green{
  height: 108px;
  background-color: rgba(0,128,0,0.24);
}
.light-green{
  height: 108px;
  background-color: rgba(0,128,0,0.12);
}
</style>
