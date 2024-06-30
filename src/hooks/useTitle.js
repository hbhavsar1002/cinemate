import { useEffect } from "react";

export const useTitle = (title,query) => {
  useEffect(() => {
    if (query) {
      document.title = `${title} ${query}`;
      return;
    }
    document.title = title;
  });
  return null;
};
