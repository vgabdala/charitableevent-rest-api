import express from 'express'
import mongoose from 'mongoose'
import CharitableEvent from '../models/charitableevent'

export function createEvent(req, res){
	if(validateRequest(req, res)){
		var newCharitableEvent = new CharitableEvent({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        date: req.body.date,
        deadline: req.body.deadline,
        city: req.body.city,
        state: req.body.state,
        postal_address: req.body.postal_address,
        charitableEntityId: req.body.charitableEntityId,
        createdByUserId: req.body.createdByUserId
      });

      newCharitableEvent.save((err) => {
        if(err) throw err
        res.json({ success: true, message: 'Charitable Event created successfully.' });
      });
	}
}

export function viewEvent(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.eventId)){
		CharitableEvent.find({_id: req.params.eventId}, (err,events) => {
			if(err) throw err;
			res.json(events)
		});
	} else {
		return res.json({ success: false, message: 'Viewing failed. The id provided is an invalid ObjectId.' });
	}
}

export function updateEvent(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.eventId)){
		CharitableEvent.update({_id: req.params.eventId}, req.body, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Updating failed. The id provided is an invalid ObjectId.' });
	}
}

export function deleteEvent(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.eventId)){
		CharitableEvent.remove({_id: req.params.eventId}, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Deleting failed. The id provided is an invalid ObjectId.' });
	}
}

export function listEvents(req, res){
	CharitableEvent.find((err, events) => {
		if(err) throw err
		res.json(events)
	});
}

function validateRequest(req, res){

  if((req.body.date == null || req.body.date == '')
    && (req.body.deadline == null || req.body.deadline == ''))
  {
    res.json({ success: false, message: 'Fail. Either date or deadline must be provided.' });
    return false;
  } 

  if(req.body.title == null || req.body.title == ''){
    res.json({ success: false, message: 'Fail. title must be provided.' });
    return false;
  } 

  if(req.body.description == null || req.body.description == ''){
    res.json({ success: false, message: 'Fail. description must be provided.' });
    return false;
  } 

  if(req.body.type == null || req.body.type == ''){
    res.json({ success: false, message: 'Fail. type must be provided.' });
    return false;
  }

  if(req.body.charitableEntityId == null || req.body.charitableEntityId == ''){
    res.json({ success: false, message: 'Fail. charitableEntityId must be provided.' });
    return false;
  }

  if(req.body.createdByUserId == null || req.body.createdByUserId == ''){
    res.json({ success: false, message: 'Fail. createdByUserId must be provided.' });
    return false;
  }

  return true;
}