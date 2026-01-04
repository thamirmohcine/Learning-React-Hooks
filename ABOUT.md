## what is HOOKS ? 

Hooks are the functins to use some react features in functional components.

in other words , Hooks are functions that make Functional components work like Class components.

# what is UseState() ? 

useState Hook is a fucntion to add State in fucntional Component.

* What is state ? 

State is nothing but just value or variable of your component .

# useEffect ?

UseEffect is used to peform side effects in our component.

* what is side Effect

side effects are actions which are performed with the "Outside World".

we perform a side effect when we need to reach outside of our React components to do something.

#### some Common side Effects 

Fetching data from API
updating the DOM document & window 
Timer functions setTimeout & setInterval

useEffect (callback , dependencies)

callback : WHAT TO RUN 
dependencies : WHEN TO RUN 

#### variation of useeffect

- useeffect without dependencies
- useeffect with emty array
- useeffect with variables 


# What Is UseContext ?

useContext Hook is used to manage global data in react application .

- Global State     - Services
- Themes           - User Settings

### Why We Need UseContext Hook ?

imagine creating an app that had a parrent component and its children and the children has children , and we have a user details in the parents but we need to use in one of the childs . here we shoud drill it as a props from one to it child intil the last ...
here is the probleme of the propsDrilling the useContext solve that probleme by help us creating a globale data for our app and make it avaliable for all components .

### How To Create a Context ?

Create Context require 3 simple Steps :

1 - Creating the Context 
2 - Providing the Context 
3 - Consuming the Context

creating a context and inside the <context /> component we give it children , to be able to hold childrens and give them the accecibility to get the props whenever a child need it 

# What is useRef ?

useRef allows us to access DOM elements.

is a React hook that lets you store a mutable value that does NOT cause a re-render when it changes.


# What is useReducer ?

useReduser is used to manage atate in our react application.

in other words , useReducer works like a state managment tool .
 
### what is state management ?

state management is used to manage all states of application in simple way .

always use he useReducer hook when you have a lot of states and methods to handle .
useReducer is a React Hook used to manage complex state logic in a predictable way. Instead of updating state directly, you dispatch actions that describe what should happen, and a reducer function decides how the state changes based on those actions. This approach keeps all state logic in one place, makes the code easier to understand and maintain, and is especially useful when a component has multiple state values or many ways to update the same state.


# What is useLayoutEffect ?

useLayoutEffect works exactly the same as useEffect (also the same syntax).

But the difference is "WHEN IT'S RUN".
useEffect Runs After the DOM is printed on the browser
But useLayoutEffect Run sbefor the DOM is printed on the browser
Whenever we want to run code befor the DOM is printed
    hight, width, or anithing related to layout 
useLayoutEffect runs Synchronously 
the most common use case of UseLayoutEffect is to get the dimension of the layout.
that's why it's name useLayoutEffect
