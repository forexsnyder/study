import api from './api-config'

export const getTopics = async () => {
  try {
      const response = await api.get('/topics')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getTopic = async id => {
  try {
      const response = await api.get(`/topics/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createTopic = async topic => {
  try {
      const response = await api.post('/topics', topic)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateTopic = async (id, topic) => {
  try {
      const response = await api.put(`/topics/${id}`, topic)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteTopic = async id => {
  try {
      const response = await api.delete(`/topics/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}