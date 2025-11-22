"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap, TrendingUp, Users, Award, Sparkles, Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="SaaSify"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="SaaSify"
          description="Build, scale, and manage your SaaS product with confidence. All-in-one platform for modern businesses."
          buttons={[
            { text: "Start Free Trial", href: "https://example.com/signup" },
            { text: "Watch Demo", href: "https://example.com/demo" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807017062-cfqpyhr9.jpg"
          imageAlt="Modern technology dashboard interface"
          showDimOverlay={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Powerful Features Built for Growth"
          description="Everything you need to succeed in one unified platform. From development to deployment."
          tag="Core Features"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Real-time Collaboration",
              description: "Work seamlessly with your team in real-time. Stay synchronized across all devices with instant updates and change notifications.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807018111-90cyfuq8.jpg",
              imageAlt: "Cloud computing infrastructure technology"
            },
            {
              id: 2,
              title: "Advanced Analytics",
              description: "Get deep insights into your application performance. Track metrics that matter and make data-driven decisions instantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807019005-mvn2mm3n.jpg",
              imageAlt: "Data analytics dashboard metrics"
            },
            {
              id: 3,
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance standards. Protect your data with industry-leading security protocols and audit trails.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807019734-4l9xz1tm.jpg",
              imageAlt: "Security protection digital technology"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="Trusted by Thousands"
          description="Join companies worldwide that have transformed their operations with SaaSify."
          tag="Our Impact"
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Growth Rate",
              value: "350%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807021199-a6tdvi42.jpg",
              imageAlt: "Growth chart upward trending business"
            },
            {
              id: "2",
              icon: Users,
              title: "Active Users",
              value: "50K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807021982-6urbjjyi.jpg",
              imageAlt: "Users people network connected"
            },
            {
              id: "3",
              icon: Zap,
              title: "Deployments",
              value: "1M+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807022464-erx3xgcr.jpg",
              imageAlt: "Server deployment technology infrastructure"
            },
            {
              id: "4",
              icon: Award,
              title: "Uptime",
              value: "99.99%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807023135-brae7ryz.jpg",
              imageAlt: "Uptime reliability performance gauge"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your team. Scale as you grow. No hidden fees."
          tag="Pricing Plans"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "$29/month",
              name: "Starter",
              buttons: [
                { text: "Get Started", href: "https://example.com/signup?plan=starter" },
                { text: "Chat to Sales", href: "#contact" }
              ],
              features: [
                "Up to 5 team members",
                "50GB storage",
                "Basic analytics",
                "Community support",
                "2 environments"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$99/month",
              name: "Professional",
              buttons: [
                { text: "Get Started", href: "https://example.com/signup?plan=professional" },
                { text: "Chat to Sales", href: "#contact" }
              ],
              features: [
                "Up to 25 team members",
                "500GB storage",
                "Advanced analytics",
                "Priority email support",
                "Unlimited environments",
                "API access"
              ]
            },
            {
              id: "enterprise",
              price: "Custom",
              name: "Enterprise",
              buttons: [
                { text: "Request Demo", href: "https://example.com/demo" },
                { text: "Sales Contact", href: "#contact" }
              ],
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Custom analytics",
                "24/7 dedicated support",
                "SSO & SAML",
                "Custom integrations",
                "SLA guarantee"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Industry Leaders"
          description="See what our customers have to say about their experience with SaaSify."
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, TechFlow",
              testimonial: "SaaSify transformed how our team collaborates. The platform is intuitive and powerful. We've increased productivity by 40% in just three months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807023916-tpxn4iwd.png",
              imageAlt: "Professional woman business portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO, DataWorks",
              testimonial: "The analytics capabilities are exceptional. Real-time insights have helped us optimize our infrastructure costs significantly. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807024848-s3sjac5n.jpg",
              imageAlt: "Professional man business portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Founder, GrowthLabs",
              testimonial: "Best SaaS platform we've used. The customer support is outstanding, and the team is always innovating. It just works.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807025583-gisk554h.jpg",
              imageAlt: "Professional woman entrepreneur portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Lead, InnovateCo",
              testimonial: "Security was our top concern, and SaaSify exceeded expectations. Enterprise-grade features with a user-friendly interface. Perfect match for us.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807026399-fcci2ipt.jpg",
              imageAlt: "Professional man tech entrepreneur portrait"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              role: "VP Engineering, CloudScale",
              testimonial: "Scaling our infrastructure has never been easier. The deployment process is smooth, and the documentation is comprehensive. Great product.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807027183-rfindy6m.jpg",
              imageAlt: "Professional business woman smiling"
            },
            {
              id: "6",
              name: "James Peterson",
              role: "Operations Manager, FastFlow",
              testimonial: "We've saved thousands in operational costs using SaaSify. The ROI is incredible, and our team loves the interface. Definitely worth it.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807027959-9zoavu78.jpg",
              imageAlt: "Professional business man confident"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on SaaSify for their operations"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807028643-n30gkgww.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807029381-avhmliym.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807030071-0tdbjv0m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807030556-vgqfssaw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763807031067-z26z4ya9.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with SaaSify"
          description="Subscribe to our newsletter for weekly updates, feature releases, and exclusive tips to maximize your productivity."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to our Privacy Policy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SaaSify"
          copyrightText="© SaaSify, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "https://example.com/security" },
                { label: "Status", href: "https://status.example.com" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "https://example.com/about" },
                { label: "Blog", href: "https://example.com/blog" },
                { label: "Careers", href: "https://example.com/careers" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "https://docs.example.com" },
                { label: "API Reference", href: "https://api.example.com/docs" },
                { label: "Tutorials", href: "https://example.com/tutorials" },
                { label: "Community", href: "https://community.example.com" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Terms of Service", href: "https://example.com/terms" },
                { label: "Cookie Policy", href: "https://example.com/cookies" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/saasify", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/saasify", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com/saasify", ariaLabel: "GitHub" },
            { icon: Mail, href: "mailto:hello@saasify.com", ariaLabel: "Email" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}