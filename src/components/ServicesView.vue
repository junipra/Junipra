<script setup>
import { ComputerDesktopIcon, ChartBarIcon, CodeBracketIcon, GlobeAltIcon, HashtagIcon, BriefcaseIcon } from '@heroicons/vue/24/solid' 
import Footer from './Footer.vue';

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <section class="flex-grow pt-16 lg:pt-20 pb-16">
            <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-5xl font-semibold text-gray-800">Our Services</h2>
                <p class="mt-4 text-lg text-gray-700">
                Junipra offers a full range of digital solutions designed to help small businesses thrive online.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
                <h3 class="text-2xl font-bold text-blue-600 flex items-center space-x-2">
                    <ComputerDesktopIcon class="w-16 h-16 text-blue-600" />
                    <span>Website Development</span>
                </h3>
                <ul class="mt-4 space-y-2 text-gray-700">
                <li>- Custom-designed websites tailored to your business</li>
                <li>- Fully responsive for all devices</li>
                <li>- Ongoing maintenance and updates</li>
                <li>- E-commerce and portfolio solutions</li>
                </ul>
            </div>

            <div>
                <h3 class="text-2xl font-bold text-blue-600 flex items-center space-x-2">
                    <CodeBracketIcon class="w-16 h-16 text-blue-600" />
                    <span>Custom Software Development</span>
                </h3>
                <ul class="mt-4 space-y-2 text-gray-700">
                <li>- Tailored solutions for your unique business needs</li>
                <li>- Apple iOS app development</li>
                <li>- MacOS desktop applications</li>
                <li>- System integrations and automation</li>
                </ul>
            </div>

            <div>
                <h3 class="text-2xl font-bold text-blue-600 flex items-center space-x-2">
                    <ChartBarIcon class="w-16 h-16 text-blue-600" />
                    <span>SEO Services</span>
                </h3>
                <ul class="mt-4 space-y-2 text-gray-700">
                <li>- Comprehensive keyword research</li>
                <li>- On-page and off-page optimization</li>
                <li>- Local SEO to target your area</li>
                <li>- Performance tracking and analytics</li>
                </ul>
            </div>

            <div>
                <h3 class="text-2xl font-bold text-blue-600 flex items-center space-x-2">
                    <GlobeAltIcon class="w-16 h-16 text-blue-600" />
                    <span>Domain Registration</span>
                </h3>
                <ul class="mt-4 space-y-2 text-gray-700">
                <li>- Assistance with domain selection</li>
                <li>- Domain purchasing and setup</li>
                <li>- Renewal management</li>
                <li>- Secure and reliable hosting advice</li>
                </ul>
            </div>

            <div>
                <h3 class="text-2xl font-bold text-blue-600 flex items-center space-x-2">
                    <HashtagIcon class="w-16 h-16 text-blue-600" />
                    <span>Social Media Management</span>
                </h3>
                <ul class="mt-4 space-y-2 text-gray-700">
                <li>- Account setup and optimization</li>
                <li>- Content strategy and planning</li>
                <li>- Regular posting and engagement</li>
                <li>- Analytics and performance reports</li>
                </ul>
            </div>

            <div>
                <h3 class="text-2xl font-bold text-blue-600 flex items-center space-x-2">
                    <BriefcaseIcon class="w-16 h-16 text-blue-600" />
                    <span>Business Analytics and Reporting</span>
                </h3>
                <ul class="mt-4 space-y-2 text-gray-700">
                <li>- Data-driven insights to grow your business</li>
                <li>- Custom dashboards and reports</li>
                <li>- Performance tracking and KPIs</li>
                <li>- Automation of routine analytics tasks</li>
                </ul>
            </div>
            </div>
        </div>
        </section>  

        <section>
            <Footer />
        </section>
    </div>    
</template>
  