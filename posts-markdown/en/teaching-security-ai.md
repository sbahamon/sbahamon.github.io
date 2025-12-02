---
title: "Teaching Security in the Age of AI"
date: 2025-01-08
tags: ["Education", "AI", "Career Development"]
excerpt: "After 600+ classes, here's what I've learned about teaching cybersecurity fundamentals while preparing students for an AI-augmented future in security operations."
readingTime: "6 min read"
lang: en
prevPost: "/posts/llms-threat-detection.html"
nextPost: "/posts/home-lab-security.html"
---

After delivering 600+ cybersecurity classes to students ranging from complete beginners to seasoned IT professionals, I've learned that teaching security is fundamentally about bridging knowledge gaps. Now, with AI tools transforming how we work, those gaps are shifting—and so must our teaching approach.

## The Question Everyone Asks

"Will AI replace security professionals?"

I hear this in every class now. My answer: **No, but AI will replace security professionals who don't adapt.** The real question isn't whether to embrace AI—it's how to teach security fundamentals in a way that prepares students for an AI-augmented future.

## What Still Matters (Maybe More Than Ever)

### 1. Critical Thinking Over Tool Knowledge

In 2020, I taught students how to manually analyze network packets with Wireshark. Today, AI tools can parse packet captures instantly and highlight anomalies. But here's what hasn't changed: students still need to understand *why* a packet is anomalous and *what* to do about it.

The shift in my teaching: I spend less time on tool mechanics and more time on developing the analytical framework that helps students question AI-generated insights.

> "The goal isn't to memorize commands—it's to develop security intuition that guides how you use any tool, AI or otherwise."

### 2. Understanding the Fundamentals Enables AI Usage

Paradoxically, AI tools work best when you already understand the basics. A student who doesn't understand the CIA triad (Confidentiality, Integrity, Availability) can't effectively prompt an AI to design a security architecture.

I've seen students copy-paste AI-generated security configurations without understanding that they introduced massive vulnerabilities. The fundamentals aren't optional—they're the foundation that makes AI tools useful rather than dangerous.

### 3. Communication Matters More in Bilingual Contexts

Teaching in both English and Spanish has taught me something crucial: technical concepts don't always translate directly. When you add AI tools to the mix—many of which perform poorly in languages other than English—the need for strong bilingual instruction becomes even more critical.

I now spend more time helping Spanish-speaking students craft effective English prompts for AI tools while teaching them to validate outputs in their native language. It's an additional layer of translation and verification that monolingual educators might not consider.

## How I've Adapted My Curriculum

### New Module: "AI-Assisted Threat Hunting"

Instead of teaching traditional threat hunting in isolation, I now integrate AI tools from day one. But with structure:

1. **Manual Analysis First:** Students learn to identify IOCs (Indicators of Compromise) by hand
2. **AI-Assisted Analysis:** Same exercise, but now with ChatGPT/Claude analyzing logs alongside them
3. **Comparison Exercise:** Students document what the AI caught, what it missed, and why
4. **Hybrid Workflow Design:** Students design workflows that leverage both human and AI capabilities

This approach has been transformative. Students aren't just learning to use AI—they're learning to think critically about its role in security operations.

### Updated Case Studies

Every case study now includes an "AI consideration" section:

- How could AI have detected this threat sooner?
- What would AI have missed?
- How might attackers use AI to evade detection?

This keeps AI front-and-center without making it the sole focus. Security is still security—AI is just another tool in the arsenal.

### Hands-On Projects with Real Stakes

One of my most successful new assignments: "Build a security monitoring system that uses AI for log analysis, but design it knowing the AI will occasionally hallucinate."

This forces students to think about:

- Validation mechanisms
- Human-in-the-loop checkpoints
- Fallback procedures when AI fails
- Cost-benefit analysis of AI integration

## What Students Need to Succeed

Based on 600+ classes, here's what I've found students need to thrive in an AI-augmented security career:

### Technical Foundation
- Solid understanding of networking, operating systems, and security principles
- Basic scripting ability (Python remains king)
- Experience with security tools—even if AI can automate them

### AI Literacy
- Understanding how LLMs work (at a high level)
- Knowing their limitations (hallucinations, bias, training data cutoffs)
- Effective prompt engineering for security contexts

### Soft Skills
- Critical thinking and healthy skepticism
- Communication skills to explain AI-generated insights to stakeholders
- Adaptability—the tools will keep changing

## Mistakes I've Made (So You Don't Have To)

### Over-relying on AI in Teaching

Early on, I tried using AI to generate lab exercises. Bad idea. The exercises were technically correct but pedagogically weak—they didn't build on each other properly or account for common misconceptions.

**Lesson:** AI can assist in curriculum development, but the pedagogical design still requires human expertise.

### Not Addressing Student Concerns About Job Security

I initially avoided discussing whether AI would eliminate security jobs. Students felt anxious and distracted. Now I address it head-on in the first class: AI changes the job, but demand for security professionals is only growing.

**Lesson:** Students need honest conversations about AI's impact on careers, not false reassurances.

## Advice for Fellow Educators

1. **Integrate AI, Don't Replace With It:** Use AI to enhance your teaching, not substitute for fundamental instruction
2. **Teach Verification Skills:** Students need to know how to validate AI output—this is now a core security skill
3. **Stay Current, But Don't Chase Every Trend:** Focus on foundational concepts that will outlast any specific AI tool
4. **Build Bilingual Resources:** If you can, create materials in multiple languages—AI tool limitations make this more important than ever

## The Bottom Line

AI isn't making cybersecurity education obsolete—it's making it more important. Students need strong fundamentals to use AI effectively, critical thinking to validate its outputs, and adaptability to keep learning as the tools evolve.

The best security professionals of the future won't be those who know the most tools or write the best prompts. They'll be those who understand security deeply enough to know when to trust AI, when to question it, and when to override it entirely.

And that's exactly what we need to teach.
