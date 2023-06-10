import { useEffect } from "react";


const useChangeTitle = (title) => {
    useEffect(() => {
        document.title = title; // Set the title when the component mounts
    
        return () => {
          document.title = 'My Website'; // Reset the title when the component unmounts
        };
      }, [title]);
};

export default useChangeTitle;