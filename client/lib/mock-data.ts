import type { ArtifactType, Citation, QuizQuestion, Source } from "@/types";
export const sources: Source[] = [
  {
    id: "s1",
    name: "The Creative Mind.pdf",
    type: "pdf",
    meta: "48 pages · 2.4 MB",
    snippet:
      "Creativity emerges when familiar ideas are connected in unfamiliar ways. Constraints provide a starting point for exploration.",
  },
  {
    id: "s2",
    name: "A field guide to better ideas",
    type: "link",
    meta: "Web article · 8 min read",
    snippet:
      "A useful creative practice moves through three stages: collecting observations, connecting patterns, and testing possibilities.",
  },
  {
    id: "s3",
    name: "My research notes",
    type: "note",
    meta: "Personal notes · 1,240 words",
    snippet:
      "Try a daily observation practice. Capture one surprising detail, connect it to a past idea, and make a small experiment.",
  },
];
export const citations: Citation[] = sources.map((s, i) => ({
  sourceId: s.id,
  label: "Source " + (i + 1),
  page: i === 0 ? 14 : undefined,
  snippet: s.snippet,
}));
export const artifactTypes: {
  id: ArtifactType;
  label: string;
  description: string;
}[] = [
  {
    id: "summary",
    label: "Summary",
    description: "The big picture, without the page count.",
  },
  {
    id: "study-guide",
    label: "Study Guide",
    description: "A clear path from reading to understanding.",
  },
  {
    id: "quiz",
    label: "Quiz",
    description: "Find out what stuck. Learn what didn’t.",
  },
  {
    id: "flashcards",
    label: "Flashcards",
    description: "Small questions. Stronger recall.",
  },
  {
    id: "mind-map",
    label: "Mind Map",
    description: "See the connections hiding in your sources.",
  },
  {
    id: "report",
    label: "Report",
    description: "Bring your evidence into one thoughtful document.",
  },
  {
    id: "timeline",
    label: "Timeline",
    description: "Put ideas and events into perspective.",
  },
  {
    id: "slides",
    label: "Slide Outline",
    description: "A story worth presenting, ready to shape.",
  },
];
export const summary = {
  title: "The science of better ideas",
  intro:
    "Creativity isn’t a lightning bolt. It’s a practice of noticing, connecting, and experimenting — and it gets better with intention.",
  points: [
    {
      title: "Collect before you create",
      text: "Build a rich library of observations. The more varied your inputs, the more unexpected your connections.",
    },
    {
      title: "Make room for the unexpected",
      text: "Combine ideas across disciplines. A new perspective often matters more than a new piece of information.",
    },
    {
      title: "Small experiments beat big plans",
      text: "Test an idea early. Feedback turns a possibility into something useful.",
    },
  ],
};
export const studySections = [
  {
    title: "01 · Understand the fundamentals",
    text: "Define divergent and convergent thinking. Explain how constraints can encourage creative exploration.",
    questions: [
      "How does divergent thinking differ from evaluation?",
      "Why can a useful constraint improve an idea?",
    ],
  },
  {
    title: "02 · Connect the concepts",
    text: "Compare the collection → connection → experiment framework across all three sources.",
    questions: [
      "What role does observation play?",
      "Find one example of a cross-discipline connection.",
    ],
  },
  {
    title: "03 · Put it into practice",
    text: "Keep an observation journal for three days. Choose two unrelated entries and design a small experiment.",
    questions: [
      "What would count as useful feedback?",
      "How could you make the first test smaller?",
    ],
  },
];
export const quizQuestions: QuizQuestion[] = [
  {
    question: "Which practice is most likely to lead to an original idea?",
    options: [
      "Waiting for a moment of inspiration",
      "Connecting observations from different fields",
      "Repeating the same approach more quickly",
      "Avoiding constraints altogether",
    ],
    correct: 1,
    explanation:
      "Original ideas often come from unexpected connections between familiar observations.",
  },
  {
    question: "What is the purpose of a small experiment?",
    options: [
      "To prove an idea is perfect",
      "To avoid sharing your work",
      "To get feedback before investing heavily",
      "To replace the need for observation",
    ],
    correct: 2,
    explanation:
      "Small experiments reveal what works, so you can improve an idea while the cost of change is low.",
  },
  {
    question: "What should you do before evaluating possible solutions?",
    options: [
      "Explore a variety of possibilities",
      "Choose the first familiar answer",
      "Remove every constraint",
      "Create a complete presentation",
    ],
    correct: 0,
    explanation:
      "Divergent thinking creates possibilities; convergent thinking helps you evaluate them.",
  },
];
export const flashcards = [
  {
    question: "What is divergent thinking?",
    answer: "Exploring many possible ideas or solutions before selecting one.",
  },
  {
    question: "Why do constraints help creativity?",
    answer:
      "They focus exploration and encourage new approaches within a meaningful boundary.",
  },
  {
    question: "What are the three stages of creative practice?",
    answer: "Collect observations, connect patterns, and test possibilities.",
  },
];
export const timeline = [
  {
    date: "DAY 01",
    title: "Collect observations",
    text: "Capture details from books, conversations, and everyday life.",
  },
  {
    date: "DAY 02",
    title: "Connect the dots",
    text: "Look for a shared pattern between two unrelated ideas.",
  },
  {
    date: "DAY 03",
    title: "Make something small",
    text: "Turn your connection into a sketch, a question, or a prototype.",
  },
  {
    date: "DAY 04",
    title: "Reflect and refine",
    text: "Use feedback to improve your next experiment.",
  },
];
export const slides = [
  {
    title: "Good ideas are a practice",
    subtitle: "The science of creative thinking",
    points: ["Move beyond the inspiration myth", "Build a repeatable process"],
  },
  {
    title: "Collect. Connect. Create.",
    subtitle: "A framework for better ideas",
    points: [
      "Gather diverse observations",
      "Find unexpected patterns",
      "Test the smallest useful version",
    ],
  },
  {
    title: "Start with one experiment",
    subtitle: "From insight to action",
    points: [
      "Choose a question worth exploring",
      "Define useful feedback",
      "Reflect, refine, and repeat",
    ],
  },
];
export const chatScripts = [
  {
    prompt: "What are the key ideas across these sources?",
    answer:
      "Your sources share one big idea: creativity is a skill you can build. Collect diverse observations, connect them in unexpected ways, then test your ideas with small experiments. The goal isn’t more information — it’s turning what you know into something useful.",
  },
  {
    prompt: "Summarize chapter 3",
    answer:
      "Chapter 3 explores how unexpected connections lead to better ideas. It recommends collecting diverse observations, setting a useful constraint, and testing a small version of your idea. Try pairing two unrelated notes and asking: what could these help me make?",
  },
  {
    prompt: "Make a quiz from these sources",
    answer:
      "I’ve created a three-question quiz from your sources. It covers divergent thinking, the value of constraints, and learning through small experiments. Open the quiz in your artifacts panel to test what you remember.",
  },
];
export const testimonials = [
  {
    name: "Maya Chen",
    role: "Graduate researcher",
    initials: "MC",
    quote:
      "My reading used to end with a folder of PDFs. Now it ends with a clear argument and the citations to back it up.",
  },
  {
    name: "Jordan Ellis",
    role: "Product designer",
    initials: "JE",
    quote:
      "The mind maps help me see connections I missed. It feels like my notes finally started talking to each other.",
  },
  {
    name: "Aisha Patel",
    role: "Medical student",
    initials: "AP",
    quote:
      "I turn a chapter into a study guide, then quiz myself. One workspace, instead of five different tools.",
  },
  {
    name: "Leo Martín",
    role: "Independent writer",
    initials: "LM",
    quote:
      "Being able to trace an answer back to the exact source makes the whole process feel more grounded.",
  },
  {
    name: "Nora Williams",
    role: "Learning designer",
    initials: "NW",
    quote:
      "From source material to a workshop outline in minutes. I get to spend more time shaping the story.",
  },
  {
    name: "Sam Okafor",
    role: "Strategy consultant",
    initials: "SO",
    quote:
      "The report gives me a useful first structure. The sources stay attached, so reviewing it is actually easy.",
  },
];
export const pricing = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "For your next curious rabbit hole.",
    limits: [
      "10 sources per workspace",
      "50 chat messages / month",
      "5 artifacts / month",
    ],
    features: [
      "All 8 artifact types",
      "Answers with citations",
      "Markdown exports",
    ],
    cta: "Start for free",
  },
  {
    name: "Pro",
    monthly: 19,
    yearly: 15,
    description: "For turning knowledge into your best work.",
    limits: [
      "200 sources per workspace",
      "2,000 chat messages / month",
      "100 artifacts / month",
    ],
    features: [
      "Everything in Free",
      "Larger files & longer sources",
      "All export formats",
      "Priority generation",
    ],
    cta: "Get started with Pro",
  },
  {
    name: "Team",
    monthly: 39,
    yearly: 31,
    description: "For ideas that are better together.",
    limits: [
      "500 sources per workspace",
      "5,000 chat messages / member",
      "300 artifacts / member / month",
    ],
    features: [
      "Everything in Pro",
      "Shared team workspaces",
      "Member & access controls",
      "Centralized billing",
    ],
    cta: "Explore Team",
  },
];
export const faqs = [
  {
    question: "What can I add as a source?",
    answer:
      "The planned workspace supports PDFs, EPUB books, DOCX documents, plain text, Markdown, web links, YouTube transcripts, and Google Docs. This landing-page demo uses three sample sources to show how the experience works.",
  },
  {
    question: "How are answers grounded in my sources?",
    answer:
      "The intended experience retrieves relevant passages from your selected sources and links each answer to supporting excerpts. In this frontend demo, citation chips open sample excerpts. Always review the original context when accuracy matters.",
  },
  {
    question: "What is an artifact?",
    answer:
      "An artifact is something you can use beyond the conversation: a summary, study guide, quiz, flashcard deck, mind map, report, timeline, or slide outline. Each keeps its source attributions attached.",
  },
  {
    question: "Can I edit and export what I create?",
    answer:
      "You can try copying and downloading Markdown in this demo. PDF and DOCX actions preview the planned export flow. In the full workspace, artifacts are designed to become editable documents you can take into your own tools.",
  },
  {
    question: "Is my content private?",
    answer:
      "Private workspaces and team access controls are part of the planned product experience. This page runs entirely in your browser with sample content: files you select here are displayed locally and are never uploaded.",
  },
  {
    question: "Can I try it before choosing a plan?",
    answer:
      "Absolutely. Try the interactive playground below, explore all eight artifact formats, and create a sample artifact. The plans shown are illustrative; no account, payment, or subscription is created in this demo.",
  },
];
