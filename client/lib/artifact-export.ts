import {
  artifactTypes,
  flashcards,
  quizQuestions,
  slides,
  studySections,
  summary,
  timeline,
  sources,
} from "@/lib/mock-data";
import type { ArtifactType } from "@/types";
export function artifactMarkdown(
  type: ArtifactType,
  sourceIds = sources.map((s) => s.id),
) {
  const heading =
    "# " +
    (artifactTypes.find((a) => a.id === type)?.label ?? "Artifact") +
    ": Creative thinking\n\n";
  let body = "";
  switch (type) {
    case "summary":
      body =
        summary.intro +
        "\n\n" +
        summary.points.map((p) => "## " + p.title + "\n" + p.text).join("\n\n");
      break;
    case "study-guide":
      body = studySections
        .map(
          (s) =>
            "## " +
            s.title +
            "\n" +
            s.text +
            "\n" +
            s.questions.map((q) => "- " + q).join("\n"),
        )
        .join("\n\n");
      break;
    case "quiz":
      body = quizQuestions
        .map(
          (q, i) =>
            "## " +
            (i + 1) +
            ". " +
            q.question +
            "\n" +
            q.options
              .map((o, n) => "- " + String.fromCharCode(65 + n) + ". " + o)
              .join("\n") +
            "\n\nAnswer: " +
            q.options[q.correct] +
            "\n" +
            q.explanation,
        )
        .join("\n\n");
      break;
    case "flashcards":
      body = flashcards
        .map((c) => "## " + c.question + "\n" + c.answer)
        .join("\n\n");
      break;
    case "mind-map":
      body =
        "Creative thinking\n├─ Collect: gather diverse observations\n├─ Connect: find patterns\n├─ Experiment: test a small idea\n├─ Reflect: learn from feedback\n└─ Constraints: focus exploration";
      break;
    case "timeline":
      body = timeline
        .map((e) => "## " + e.date + " · " + e.title + "\n" + e.text)
        .join("\n\n");
      break;
    case "slides":
      body = slides
        .map(
          (s, i) =>
            "## Slide " +
            (i + 1) +
            ": " +
            s.title +
            "\n" +
            s.subtitle +
            "\n" +
            s.points.map((p) => "- " + p).join("\n"),
        )
        .join("\n\n");
      break;
    case "report":
      body =
        "## Executive summary\n" +
        summary.intro +
        "\n\n## Findings\n" +
        summary.points
          .map((p) => "### " + p.title + "\n" + p.text)
          .join("\n\n") +
        "\n\n## Recommendation\nStart a daily observation journal and one small experiment each week.";
  }
  return (
    heading +
    body +
    "\n\n---\nSample source attributions:\n" +
    sources
      .filter((s) => sourceIds.includes(s.id))
      .map((s) => "- " + s.name)
      .join("\n") +
    "\n\nGenerated locally in the closecopy frontend demo."
  );
}
export function downloadMarkdown(text: string, name: string) {
  const url = URL.createObjectURL(
    new Blob([text], { type: "text/markdown;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = name + ".md";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
