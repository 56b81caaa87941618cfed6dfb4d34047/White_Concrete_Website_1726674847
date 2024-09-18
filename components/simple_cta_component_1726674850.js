<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="bg-red-500 dark:bg-red-700 flex-1"><div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center"><div id="cta-title-container" class="flex"><h2 id="cta-title" class="flex-1 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                        Elevate Your Space with White Concrete Magic!
                    </h2></div> <div id="cta-subtitle-container" class="flex"><p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-600 dark:text-gray-300 md:text-lg">
                        Unleash the power of elegance and innovation with our stunning white concrete solutions
                    </p></div> <div id="cta-button-container" class="flex"><a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-6 py-3 mr-2 mb-2 dark:focus:ring-purple-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        Discover White Concrete Wonders
                    </a></div></div></div></section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
