import React from 'react'
import { GET_AGES_URL, GET_LEVELS_URL, GET_GENDERS_URL, GET_STATES_URL, GET_ALL_DATA_URL } from "../constants/API";

export function getAges() {
  return (
     fetch(GET_AGES_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
     }).then(res => res.json())
  )
}


export function getLevel() {
  return (
     fetch(GET_LEVELS_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
     }).then(res => res.json())
  )
}

export function getGenders() {
  return (
     fetch(GET_GENDERS_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
     }).then(res => res.json())
  )
}

export function getStates() {
  return (
     fetch(GET_STATES_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
     }).then(res => res.json())
  )
}


export function getStudentsData() {
  return (
     fetch(GET_ALL_DATA_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
     }).then(res => res.json())
  )
}

