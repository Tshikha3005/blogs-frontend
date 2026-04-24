export const postFormConfig = [
  {
    name: "title",
    label: "Title",
    type: "input",
    rules: [
      { required: true, message: "Title is required" },
      { min: 3, message: "Minimum 3 characters" },
    ],
  },
  {
    name: "author",
    label: "Author",
    type: "input",
    rules: [{ required: true, message: "Author is required" }],
  },
  {
    name: "content",
    label: "Content",
    type: "textarea",
    rules: [
      { required: true, message: "Content is required" },
      { min: 10, message: "Minimum 10 characters" },
    ],
  },
];
