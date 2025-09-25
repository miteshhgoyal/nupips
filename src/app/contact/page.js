import CTA from '@/components/contact/CTA'
import FAQSection from '@/components/home/FAQSection'
import Hero from '@/components/ui/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero
                title="Trading Questions? <br/> Expert Answers Instantly."
                subtitle="Stuck with your forex bot setup, risk management, or profit targets? <br/>Connect with our algorithmic trading specialists right now."
                button={{ href: "", text: "Talk to Trading Experts" }}
            />
            <CTA />
            <FAQSection />
        </div>
    )
}

export default page
