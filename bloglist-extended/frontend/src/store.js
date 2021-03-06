import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { default as notificationReducer } from './reducers/notificationReducer'
import { default as blogReducer } from './reducers/blogReducer'
import { default as loginReducer } from './reducers/loginReducer'
import { default as userReducer } from './reducers/userReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogReducer,
  login: loginReducer,
  users: userReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
