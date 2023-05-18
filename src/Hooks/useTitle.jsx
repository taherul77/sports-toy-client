import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Sports Toys - ${title} `;
  }, [title]);
};
export default useTitle;