import express from 'express'
import mongoose from 'mongoose'
import {
	createEvent, 
	viewEvent, 
	updateEvent, 
	deleteEvent, 
	listEvents
} from '../controllers/controller'

const routes   = express.Router() 

// List Events
routes.get('/event', listEvents)

//Create Event
routes.post('/event', createEvent)

//View Event
routes.get('/event/:eventId', viewEvent)

//Edit Event
routes.patch('/event/:eventId', updateEvent)

//Delete Event
routes.delete('/event/:eventId', deleteEvent)

export default routes;