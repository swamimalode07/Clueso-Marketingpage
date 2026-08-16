export type AgentTask = {
  id: string;
  label: string;
  working: string;
};

export const agentTasks: AgentTask[] = [
  { id: "captions", label: "Add captions", working: "Adding captions" },
  { id: "pauses", label: "Remove pauses", working: "Removing pauses" },
  {
    id: "translate",
    label: "Translate to Spanish",
    working: "Translating to Spanish",
  },
  { id: "brand", label: "Apply brand style", working: "Applying brand style" },
  {
    id: "document",
    label: "Create step-by-step document",
    working: "Creating the step-by-step document",
  },
  {
    id: "effects",
    label: "Add animations, zooms & more",
    working: "Working on animations and callouts",
  },
];

export const agentCopy = {
  name: "Clueso Agent",
  status: "Active",
  prompt: "Make this video more engaging and easy to understand.",
  intro: "Got it! I'll handle the editing for you.",
  hint: "This will take a few seconds.",
  placeholder: "Ask me anything or tell me what to change...",
  done: "All done. Your video is ready to export.",
};

export const editorMeta = {
  project: "Product Update — Aug 2025",
  ratio: "16:9",
  currentTime: "0:04",
  duration: "1:37",
  brand: "Acme",
};

export const captionText = {
  en: "Here's how it works.",
  es: "Así es como funciona.",
};

export type EditorState = {
  captions: boolean;
  pausesRemoved: boolean;
  translated: boolean;
  branded: boolean;
  document: boolean;
  effects: boolean;
};

export const deriveEditorState = (completed: number): EditorState => ({
  captions: completed > 0,
  pausesRemoved: completed > 1,
  translated: completed > 2,
  branded: completed > 3,
  document: completed > 4,
  effects: completed > 5,
});
