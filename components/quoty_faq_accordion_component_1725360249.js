<!--
INSTRUCTION: Summary: Contains a section with:
INSTRUCTION: 1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
INSTRUCTION: 2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
-->

<template>
  <section class="py-8 bg-white pl-4">
    <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions About Our Blockchain Analysis App</h2>
    <!-- Accordion -->
    <div class="space-y-3">
      <!-- Accordion item -->
      <div
        v-for="(term, index) in terms"
        :key="index"
        :class="['text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900', { 'expanded': term.expanded }]"
      >
        <h3>
          <button
            type="button"
            class="flex items-center justify-between w-full text-left font-medium px-5 py-3"
            @click="toggle(index)"
            :aria-expanded="term.expanded"
            :aria-controls="'terms-text-' + index"
          >
            <span>{{ term.title }}</span>
            <svg
              class="shrink-0 ml-8 fill-slate-400 dark:fill-slate-500"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center rotate-90 transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
            </svg>
          </button>
        </h3>
        <div
          :id="'terms-text-' + index"
          role="region"
          :aria-labelledby="'terms-title-' + index"
          class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out"
          :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]"
        >
          <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
            <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
              {{ term.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuotyFaqAccordionComponent",
  data() {
    return {
      terms: [
        { title: "What types of blockchain data can this app analyze?", description: "Our app can analyze a wide range of blockchain data, including transaction histories, smart contract interactions, token transfers, and emerging trends across various blockchain networks.", expanded: false },
        { title: "How up-to-date is the blockchain information provided?", description: "Our app provides near real-time analysis of blockchain data, with new information being processed and added to our database within minutes of occurring on the blockchain.", expanded: false },
        { title: "Can I customize the analysis for specific blockchain projects or tokens?", description: "Yes, our app offers customizable analysis options. You can focus on specific blockchain networks, projects, or tokens to get tailored insights and reports relevant to your interests or business needs.", expanded: false },
        { title: "Is the app suitable for both beginners and experienced blockchain analysts?", description: "Absolutely! Our app is designed with an intuitive interface for beginners, while also offering advanced features and in-depth analysis tools for experienced users and professional blockchain analysts.", expanded: false }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.terms[index].expanded = !this.terms[index].expanded;
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
