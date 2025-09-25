import AboutFeatures from '@/components/about/AboutFeatures'
import HeroStatement from '@/components/about/HeroStatement'
import CTA from '@/components/contact/CTA'
import FAQSection from '@/components/home/FAQSection'
import Hero from '@/components/ui/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero
                title="The Story Behind Nupips"
                subtitle="Trading is hard.<br/>Your prop firm shouldn't make it harder. Traders Deserve Better!"
                button={{ href: "", text: "Start Automated Trading" }}
            />
            <HeroStatement />
            <AboutFeatures />
            <FAQSection />
        </div>
    )
}

export default page
