import heroImg from "../assets/images/heroImg.png";
import community1 from "../assets/images/community/community1.jpg";
import community2 from "../assets/images/community/community2.jpg";
import community3 from "../assets/images/community/community3.jpg";
import community4 from "../assets/images/community/community4.jpg";
import community5 from "../assets/images/community/community5.jpg";
import journey1 from '../assets/images/journey1.jpg';
import journey2 from '../assets/images/journey2.jpg';

export const heroData = {
    firstName: "Souhardya",
    lastName: "BOSE",
    photo: heroImg,
    stat: {
        number: "5000+",
        label: "STUDENTS"
    },
    location: "LPU",
    established: "2021",
    cta: {
        primary: { label: "JOURNEY", href: "#journey", },
    }
};

export const journeyData = {
    title: "Journey",
    items: [
        {
            id: "1",
            year: "2021",
            title: "Foundations in Community",
            subtitle: "Early beliefs",
            description: "Early exposure to strong communities shaped a belief that people grow best when supported collectively. Started with 5 students in a classroom. No budget. Just belief.",
            media: { type: "image", src: journey1 },
            metric: "5→50",
            metricLabel: "community members"
        },
        {
            id: "2",
            year: "2022",
            title: "Learning Through Practice",
            subtitle: "Events & technology",
            description: "Hands-on work in event management and technical projects built a deep understanding of creating meaningful experiences that resonate and inspire action.",
            media: { type: "image", src: journey2 },
            metric: "12",
            metricLabel: "events organized"
        },
        {
            id: "3",
            year: "2023",
            title: "Community in Action",
            subtitle: "Real-world moments",
            description: "Working directly with students and partners demonstrated the impact of well-designed programs. Quiet students found their voice. Introverts became leaders.",
            media: { type: "youtube", src: "https://www.youtube.com/embed/Iqp9DeqrqYI" },
            metric: "2000+",
            metricLabel: "attendees"
        },
        {
            id: "4",
            year: "2024",
            title: "Long-Term Purpose",
            subtitle: "Sustainable growth",
            description: "Focused on building systems and programs that continue to support communities over time. Passed down, improved, reimagined by each new cohort.",
            media: { type: "image", src: journey2 },
            metric: "4",
            metricLabel: "active programs"
        }
    ]
};

export const achievementsData = {
    title: "Achievements",
    stats: [
        {
            value: "5000+",
            label: "Students Mentored",
            description: "Positively impacted the lives of students through mentorship, guiding them towards success."
        },
        {
            value: "150+",
            label: "Seminars Delivered",
            description: "A seasoned speaker who has delivered impactful seminars with engaging, thought-provoking ideas."
        },
        {
            value: "10+",
            label: "TEDx Talks",
            description: "Featured as a speaker at multiple TEDx events, presenting complex ideas in an accessible manner."
        },
        {
            value: "15+",
            label: "Podcast Guest",
            description: "Shared expertise on leading podcasts through meaningful conversations and insights."
        }
    ],
    items: [
        {
            id: "a1",
            text: "Appointed as NEP SAARTHI by Govt of India (UGC, Ministry of Education); selected among 40,000 students to represent India's largest university to the UGC Chairman.",
            category: "recognition",
            year: "2023",
        },
        {
            id: "a2",
            text: "Elected as Chairperson of IEEE LPU.",
            category: "leadership",
            year: "2022",
        },
        {
            id: "a3",
            text: "Invited by VIT Vellore as a guest speaker for a podcast (Oct 2020).",
            category: "recognition",
            year: "2020",
        },
        {
            id: "a4",
            text: "Mentored and guided teams for Google Solutions Challenge (2020, 2021).",
            category: "mentorship",
            year: "2021",
        },
        {
            id: "a5",
            text: "Completed industrial research training at IIT Kanpur under Dr. Aman (HOD, CSE).",
            category: "research",
            year: "2022",
        },
        {
            id: "a6",
            text: "Hosted and organized multiple workshops, seminars, and podcasts for Google Developer Student Clubs.",
            category: "leadership",
            year: "2023",
        }
    ]
};

export const testimonialsData = {
    title: "Testimonials",
    items: [
        {
            id: "1",
            name: "Shashank Mishra",
            role: "Data Engineer - III",
            company: "Expedia",
            text: "I had a great experience working with Souhardya, he is very passionate and innovative with community building skills. His presence always made me comfortable in large scale events. Keep it up Souhardya!",
            rating: 5,
            featured: true
        },
        {
            id: "2",
            name: "Jaideep Prasad",
            role: "Founder",
            company: "Mentro",
            text: "He is a very dedicated team player with skills to match with it. Souhardya will be a great fit to any organization and help in its growth. Wish him all the best!",
            rating: 5,
            featured: true
        },
        {
            id: "3",
            name: "Abhishek Mitra",
            role: "CEO & Managing Director",
            company: "Indian Cyber Security Solutions",
            text: "Out of the box thinker and a team player to have in the team. Young chap like him who is matured and professional which is really good to see. Wish him a very bright future ahead. All the best.",
            rating: 5,
            featured: true
        }
    ]
};

export const techfluenceData = {
    title: "Techfluence",
    subtitle: "The Show",
    description: "Hosting meaningful conversations with tech leaders, innovators, and creators. Shaping the future of tech evangelism.",
    episodes: [
        { id: "tf1", title: "Future of Product Management", guest: "Rahul Maheshwari", platform: "YouTube", duration: "45 min", thumbnail: community1 },
        { id: "tf2", title: "Scaling Tech Communities", guest: "Aman Dhattarwal", platform: "LinkedIn Live", duration: "32 min", thumbnail: community2 },
        { id: "tf3", title: "The Startup Mindset", guest: "Jaideep Prasad", platform: "YouTube", duration: "50 min", thumbnail: community3 }
    ]
};

export const productIdeologyData = {
    title: "Product Ideology",
    pillars: [
        { id: "p1", title: "User Centricity", description: "Deeply understanding student pain points to build educational products that actually matter.", icon: "Users" },
        { id: "p2", title: "Scalable Systems", description: "Designing architectures that support millions of concurrent users without compromising depth.", icon: "Layers" },
        { id: "p3", title: "Agile Growth", description: "Rapid iteration cycles from classroom feedback to global product updates.", icon: "Zap" }
    ],
    workflow: [
        { step: "01", name: "Insight", detail: "Gathering raw feedback from millions of students." },
        { step: "02", name: "Strategy", detail: "Mapping product roadmaps to educational outcomes." },
        { step: "03", name: "Delivery", detail: "Consulting on high-impact tech deployments." }
    ]
};

export const contactData = {
    email: "souhardya.bose@example.com",
    location: "Punjab, India",
    responseTime: "< 24 hours",
    socials: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/souhardya-bose", handle: "souhardya-bose", followers: "15k+" },
        { platform: "Twitter", url: "https://twitter.com/souhardya_bose", handle: "@souhardya_bose", followers: "8.2k" },
        { platform: "Instagram", url: "https://instagram.com/souhardya_bose", handle: "@souhardya_bose", followers: "12.7k" },
        { platform: "YouTube", url: "https://youtube.com/@souhardya_bose", handle: "@souhardya_bose", followers: "5.3k" }
    ]
};

export function getProfile() {
    return {
        ...heroData,
        stats: achievementsData.stats,
        socialLinks: contactData.socials,
    };
}

export function getJourney() { return journeyData.items; }
export function getAchievements() { return achievementsData.items; }
export function getTestimonials() { return testimonialsData.items; }
export function getContact() { return contactData; }
export function getTechfluence() { return techfluenceData; }
export function getProductIdeology() { return productIdeologyData; }