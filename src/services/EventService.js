
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.0.101:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  createUser(user) {
    return apiClient.post('/api/users', user)
  },
  logIn(credentials) {
    return apiClient.post('/login', credentials)
  },
  logOut() {
    return apiClient.get('/logout')
  },
  getUsers() {
    return apiClient.get('/api/users')
  },
  getUser(username) {
    return apiClient.get('/api/user/' + username)
  },
  getEvents(from, to) {
    return apiClient.get('/api/events?from=' + from + '&to=' + to)
  },
  getEvent(id) {
    return apiClient.get('/api/event/' + id)
  },
  createEvent(event) {
    return apiClient.post('/api/events', event)
  },
  deleteEvent(id) {
    return apiClient.delete('/api/event/' + id)
  },
  getChecks(user, payed) {
    return apiClient.get('/api/check?user=' + user + '&payed' + payed)
  },
  createCheck(check) {
    return apiClient.post('/api/checks', check)
  },
  getNotifications(user) {
    return apiClient.get('/api/notifications?receiver=' + user)
  },
  createNotification(notification) {
    return apiClient.post('/api/notifications', notification)
  }
}