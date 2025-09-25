import React from 'react'
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PricingSection from '@/components/home/PricingSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import StepsSection from '@/components/home/StepsSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesGrid from '@/components/home/FeaturesGrid';
import FAQSection from '@/components/home/FAQSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

function page() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <ComparisonSection />
            {/* <StepsSection /> */}

            <FeaturesGrid />
            <AboutSection />
            <FAQSection />
            <TestimonialsSection />
        </>
    )
}

export default page;
