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

// List Entities
routes.get('/event', listEvents)

//Create Entity
routes.post('/event', createEvent)

//View Entity
routes.get('/event/:eventId', viewEvent)

//Edit Entity
routes.patch('/event/:eventId', updateEvent)

//Delete Entity
routes.delete('/event/:eventId', deleteEvent)

export default routes;