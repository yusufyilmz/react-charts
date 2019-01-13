import { Server } from 'react-mock'
import data from '../data';

const marfeelDataEndPoint = '/api/v1/data'

const getData = () => {
  return {
    status: 'OK',
    items:data
  }
}

const requestMarfeelDataHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(getData())];
}

Server.mockGet(marfeelDataEndPoint, requestMarfeelDataHandler)
Server.on() 