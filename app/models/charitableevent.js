import mongoose from 'mongoose'
const Schema = mongoose.Schema

export default mongoose.model('CharitableEvent', new Schema({ 
  title: {
    type: String,
    default: '',
    required: 'Please fill title'
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill description'
  },
  type: {
    type: String,
    default: '',
    required: 'Please fill type'
  },
  date: {
    type: Date
  },
  deadline: {
    type: Date
  },
  city: {
    type: String,
    default: ''
  },
  state: {
    type: String,
    default: ''
  },
  postal_address: {
    type: String,
    default: ''
  },
  charitableEntityId: {
    type: String,
    required: 'Please fill the id of the CharitableEntity (charitableEntityId) who is creating this'
  },
  createdByUserId: {
    type: String,
    required: 'Please fill the id of the user who is creating this'
  },
  created: {
    type: Date,
    default: Date.now
  }
}))