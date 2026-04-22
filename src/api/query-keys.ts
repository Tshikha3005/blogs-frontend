export const postKeys = {
  all: ["posts"] as const,
  lists: () => [...postKeys.all, "list"] as const,
  detail: (id: number) => [...postKeys.all, "details", id] as const,
};
