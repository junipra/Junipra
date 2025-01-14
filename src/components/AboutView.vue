<script setup>
import { CheckBadgeIcon, AdjustmentsVerticalIcon, LifebuoyIcon } from '@heroicons/vue/24/solid' 
import Footer from './Footer.vue';

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <section class="flex-grow py-20">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                <h2 class="text-5xl font-semibold text-gray-800">About Junipra</h2>
                <p class="mt-4 text-lg text-gray-700">
                    Helping small businesses thrive in the digital age, one solution at a time.
                </p>
                </div>

                <div class="grid lg:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-4xl font-semibold text-blue-600">Our Mission</h3>
                    <p class="mt-4 text-gray-700 leading-relaxed">
                    At Junipra, our mission is to empower small businesses by delivering exceptional digital solutions. Whether it's creating a stunning website, optimizing SEO, or crafting custom software, we’re here to ensure your business has the tools it needs to succeed online.
                    </p>
                    <p class="mt-4 text-gray-700 leading-relaxed">
                    We know how overwhelming digital transformation can feel, especially for solo entrepreneurs and small teams. That’s why we provide personalized, accessible, and effective services designed to make your life easier.
                    </p>
                </div>

                <div class="flex flex-col space-y-6">
                    <div class="flex items-start">
                        <CheckBadgeIcon class="w-20 h-20 p-3 text-blue-600" />
                    <div>
                        <h4 class="text-2xl font-semibold text-gray-800">Experienced and Trusted</h4>
                        <p class="mt-2 text-gray-700">
                        With years of experience in software engineering and a proven track record, you can count on us to deliver professional results every time.
                        </p>
                    </div>
                    </div>

                    <div class="flex items-start">
                        <AdjustmentsVerticalIcon class="w-20 h-20 p-3 text-blue-600" />
                    <div>
                        <h4 class="text-2xl font-semibold text-gray-800">Customized for You</h4>
                        <p class="mt-2 text-gray-700">
                        We take the time to understand your business needs and craft tailored solutions to meet your goals.
                        </p>
                    </div>
                    </div>

                    <div class="flex items-start">
                        <LifebuoyIcon class="w-20 h-20 p-3 text-blue-600" />
                    <div>
                        <h4 class="text-2xl font-semibold text-gray-800">Support at Every Step</h4>
                        <p class="mt-2 text-gray-700">
                        From initial consultation to ongoing support, we’re with you every step of the way to ensure your success.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section>
            <Footer />
        </section>
    </div>
</template>
  
  