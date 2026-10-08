import type { ArtifactType } from "@/types";
import SummaryArtifact from "./SummaryArtifact";
import StudyGuideArtifact from "./StudyGuideArtifact";
import QuizArtifact from "./QuizArtifact";
import FlashcardArtifact from "./FlashcardArtifact";
import MindMapArtifact from "./MindMapArtifact";
import TimelineArtifact from "./TimelineArtifact";
import ReportArtifact from "./ReportArtifact";
import SlidesArtifact from "./SlidesArtifact";
export default function ArtifactRenderer({ type }: { type: ArtifactType }) {
  switch (type) {
    case "summary":
      return <SummaryArtifact />;
    case "study-guide":
      return <StudyGuideArtifact />;
    case "quiz":
      return <QuizArtifact />;
    case "flashcards":
      return <FlashcardArtifact />;
    case "mind-map":
      return <MindMapArtifact />;
    case "timeline":
      return <TimelineArtifact />;
    case "report":
      return <ReportArtifact />;
    case "slides":
      return <SlidesArtifact />;
  }
}
