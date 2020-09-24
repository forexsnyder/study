import api from './api-config'

export const getFlashcards = async () => {
  try {
      const response = await api.get('/flashcards')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getFlashcard = async id => {
  try {
      const response = await api.get(`/flashcards/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createFlashcard = async flashcard => {
  try {
      const response = await api.post('/flashcards', flashcard)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateFlashcard = async (id, flashcard) => {
  try {
      const response = await api.put(`/flashcards/${id}`, flashcard)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteFlashcard = async id => {
  try {
      const response = await api.delete(`/flashcards/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}