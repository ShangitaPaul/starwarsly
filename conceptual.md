### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
Redux is a predictable state container for JS applications for managment of the app. It's use is for complex applications that share the state across multiple components; for the purposes of centralizing it.

- What are three features of the Redux developer tool in Chrome?
Time-travel debugging, action log, and state snapshot.

- What is a store?
A store in Redux is an object that serves as a "holding cell" for the app's state.
- What is a reducer?
A function that accepts the current state and action as args and returns the new state; defining the behavior of the state according to various actions.
- What is an action?
A plain JS object to describe some event. 
- What is an action creator?
A function that creates and returns an action by implementing the appropriate logic. 
- How does data flow in a React/Redux application?
Data flows unidirectional 
- What is the purpose of the `<Provider>` component?
It is part of the react-reduc library and used to wrap the root component of a React app
- What is the purpose of the `useSelector` hook? What does it return?
It is used to extract data from the Redux store.
- Describe the `useDispatch` hook. What do you use it for?
It is a Reduc hook that returns a reference to the dispatch function of the Redux store; to dispatch actions from functional components and enable them to interact with the Redux store.
- What is redux-thunk and why would you use it?
Redux-thunk is middleware for Redux to dispatch async actions; to allow action creators to return functions instead of plain action objects
- What are propTypes?
They document the expected types of properties passed to React components.
- Describe the `useCallback` hook.  What is it used for?
It is used for notating callback functions in React.
- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
Both are used to manage states but useReducer is better for managing local states with in a component, where Redux is better for global state management. 
