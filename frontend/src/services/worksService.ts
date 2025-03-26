import api from "./api"

const worksService = {
  getServiceById: async (id: string) => {
    const res = await api.get(`/works/${id}`).catch((error) => {
      return error.response
    })

    return res;
  },

  getAllWorks: async () => {
    const res = await api.get("/works").catch((error) => {
      return error.response
    })

    return res;
  },

  getActiveWorks: async () => {
    const res = await api.get("/works/active").catch((error) => {
      return error.response
    })

    return res;
  }
}

export default worksService 