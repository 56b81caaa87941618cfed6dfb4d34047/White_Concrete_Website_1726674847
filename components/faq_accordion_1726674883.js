<template>
  <div>
    <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
      <div class="space-y-3 text-center">
        <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions About White Concrete</h1>
        <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to common queries about this versatile and elegant building material</p>
      </div>
      <div class="mt-14 max-w-2xl mx-auto">
        <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
          <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
            {{ item.q }}
            <!-- SVG adjustment depending on whether faq is selected -->
            <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </h4>
          <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
            <div class="px-4 py-6">
              <p class="text-gray-700 pb-4 max-w-full text-lg">{{ item.a }}</p>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      selectedFaq: null,
      faqs: [
        { q: "What is white concrete?", a: "White concrete is a specialized type of concrete made with white cement and light-colored aggregates. It offers a clean, bright appearance and is popular in modern architecture and design." },
        { q: "How does white concrete differ from regular concrete?", a: "The main difference lies in the materials used. White concrete uses white cement and carefully selected light-colored aggregates, while regular concrete typically uses gray cement and standard aggregates." },
        { q: "What are the benefits of using white concrete?", a: "White concrete offers aesthetic appeal, improved light reflection, heat reduction in urban environments, and versatility in architectural design. It's also durable and can be easily colored or textured." },
        { q: "Is white concrete more expensive than regular concrete?", a: "Yes, white concrete is generally more expensive due to the higher cost of white cement and specially selected aggregates. However, its unique properties and aesthetic value often justify the additional cost." },
        { q: "How do I maintain white concrete?", a: "Regular cleaning with mild soap and water, sealing to prevent staining, and avoiding harsh chemicals are key to maintaining white concrete. Prompt removal of spills and periodic resealing will help preserve its appearance." }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* Add any desired scoped CSS here */
</style>
