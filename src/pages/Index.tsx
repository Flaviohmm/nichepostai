import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
    return (
        <>
            <Helmet>
                <title>NichePost AI - Gerador de Posts Instagram para Nutricionistas</title>
                <meta
                    name="description"
                    content="Gere posts perfeitos para Instagram de nutricionistas em segundos com IA. Economize tempo, aumente engajamento e crie conteúdo otimizado para seu público."
                />
                <meta name="keywords" content="instagram, nutricionista, posts, IA, inteligência artificial, conteúdo, marketing digital, saúde" />
                <link rel="canonical" href="https://nichepostai.com" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navbar />
                <main>
                    <HeroSection />
                    <FeaturesSection />
                    <TestimonialsSection />
                    <PricingSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Index;
