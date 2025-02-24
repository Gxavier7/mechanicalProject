import api from "./api"

const worksService = {
  getActiveWorks: async () => {
    const res = await api.get("/works/active").catch((error) => {
      return error.response
    })

    return res;
  }
}

export default worksService 