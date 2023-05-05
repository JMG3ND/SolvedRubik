import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTocSidebarStore = defineStore('tocSidebarData', () => {
  const tocSidebarData = ref(null);

  const tocSidebarDataFill = data => {
    const Array = [];
    data.forEach(element => {
      Array.push({ title: element.title, id: element.id });
    });
    tocSidebarData.value = Array;
  }
  return { tocSidebarData, tocSidebarDataFill }
})
