import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { SparklesIcon } from "@/components/icons";
import { editorHeading } from "@/content/editor";

const EditorSection = () => (
  <Section id="editor">
    <SectionHeading
      icon={<SparklesIcon />}
      label={editorHeading.label}
      title={editorHeading.title}
      subtitle={editorHeading.subtitle}
      maxWidth="max-w-280"
    />
  </Section>
);

export default EditorSection;
