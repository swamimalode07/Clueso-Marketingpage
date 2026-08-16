export type UseCase = {
  id: string;
  label: string;
  company: string;
  caption: string;
};

export const useCasesHeading = {
  label: "use cases",
  titleLines: ["Scale your video production.", "Without scaling your team."],
  subtitle: "Train, launch, and sell like a team 10 times your size.",
};

export const useCases: UseCase[] = [
  {
    id: "customer-education",
    label: "Customer Education",
    company: "GitLab",
    caption:
      "GitLab powers customer education videos for GitLab University with Clueso.",
  },
  {
    id: "product-marketing",
    label: "Product Marketing",
    company: "Phenom",
    caption:
      "At Phenom, over 100 product managers create weekly release videos for every new feature using Clueso.",
  },
  {
    id: "sales-enablement",
    label: "Sales Enablement",
    company: "Lorem Ipsum",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    id: "learning-development",
    label: "Learning and Development",
    company: "Lorem Ipsum",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    id: "product-management",
    label: "Product Management",
    company: "Lorem Ipsum",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    id: "employee-training",
    label: "Employee Training",
    company: "Lorem Ipsum",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    id: "customer-support",
    label: "Customer Support",
    company: "Lorem Ipsum",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
];
