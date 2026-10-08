export interface Source {
  id: string;
  name: string;
  type: "pdf" | "link" | "note" | "book" | "doc";
  meta: string;
  snippet: string;
}
export interface Citation {
  sourceId: string;
  label: string;
  page?: number;
  snippet: string;
}
export type ArtifactType =
  | "summary"
  | "study-guide"
  | "quiz"
  | "flashcards"
  | "mind-map"
  | "report"
  | "timeline"
  | "slides";
export interface Artifact {
  id: string;
  type: ArtifactType;
  title: string;
  sourceIds: string[];
  citations: Citation[];
  content: string;
}
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: Citation[];
}
