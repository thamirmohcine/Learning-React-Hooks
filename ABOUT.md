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