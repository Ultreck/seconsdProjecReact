import axios from "axios"

export const useAxios = () => {
      const postAxios = (path, data) => {
            axios.post(path, data);
          }
          const getAxios = (path, data) => {
            return  axios.get(path, data);
          }
     return {postAxios, getAxios};
}


