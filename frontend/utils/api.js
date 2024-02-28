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

/**********   RESUME  ***********/

/**
 * Retrieve hard skills from database
 * @returns {Array.Object}
 */
export async function getHardSkills() {
  try {
    const response = await axios.get(API_ROUTES.GET_HARDSKILLS)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Retrieve experiences from database
 * @returns {Array.Object}
 */
export async function getExperiences() {
  try {
    const response = await axios.get(API_ROUTES.GET_EXPERIENCES)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Retrieve formations from database
 * @returns {Array.Object}
 */
export async function getFormations() {
  try {
    const response = await axios.get(API_ROUTES.GET_FORMATIONS)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Retrieve languages from database
 * @returns {Array.Object}
 */
export async function getLanguages() {
  try {
    const response = await axios.get(API_ROUTES.GET_LANGUAGES)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Retrieve soft skills from database
 * @returns {Array.Object}
 */
export async function getSoftSkills() {
  try {
    const response = await axios.get(API_ROUTES.GET_SOFTSKILLS)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Retrieve hobby from database
 * @returns {Array.Object}
 */
export async function getHobbies() {
  try {
    const response = await axios.get(API_ROUTES.GET_HOBBIES)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Send contact form mail
 *
 */
export async function postContact(formDataObj) {
  try {
    const response = await axios.post(API_ROUTES.POST_CONTACT, formDataObj)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
