import AboutFeatures from '@/components/about/AboutFeatures'
import HeroStatement from '@/components/about/HeroStatement'
import FAQSection from '@/components/home/FAQSection'
import Hero from '@/components/ui/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero
                title="Pioneering Algorithmic Forex Trading"
                subtitle="The $7.5 trillion forex market demands precision, not guesswork.<br/>We've engineered intelligent trading algorithms that never sleep, never panic, and never miss opportunities."
                button={{ href: "", text: "Start Automated Trading" }}
            />
            <HeroStatement />
            <AboutFeatures />
            <FAQSection />
        </div>
    )
}

export default page
