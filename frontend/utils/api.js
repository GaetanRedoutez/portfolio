import axios from 'axios'
import { API_ROUTES } from './constant'

/**********   SKILLS  ***********/

/**
 * Retrieve skills from database
 * @returns {Array.Object}
 */
export async function getSkills() {
  try {
    const response = await axios.get(API_ROUTES.GET_SKILLS)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**********   PROJECTS  ***********/

/**
 * Retrieve skills from database
 * @returns {Array.Object}
 */
export async function getProjects() {
  try {
    const response = await axios.get(API_ROUTES.GET_PROJECTS)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
