import CTA from '@/components/contact/CTA'
import FAQSection from '@/components/home/FAQSection'
import Hero from '@/components/ui/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero
                title="Funding Fast. <br/> Answers Faster."
                subtitle="Questions about your account or the challenge? <br/>Just ask — we've got you."
                button={{ href: "", text: "Chat With Us" }}
            />
            <CTA />
            <FAQSection />
        </div>
    )
}

export default page
