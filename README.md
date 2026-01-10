# React Hooks Guide 🎣

A beginner-friendly guide to understanding and using React Hooks. This repository covers all essential React Hooks with clear explanations and practical examples.

## 📚 Table of Contents

- [What are Hooks?](#what-are-hooks)
- [useState](#usestate)
- [useEffect](#useeffect)
- [useContext](#usecontext)
- [useRef](#useref)
- [useReducer](#usereducer)
- [useLayoutEffect](#uselayouteffect)
- [useMemo](#usememo)
- [useCallback](#usecallback)
- [useActionState](#useactionstate)
- [useDeferredValue](#usedeferredvalue)
- [useEffectEvent](#useeffectevent)
- [use](#use)
- [useOptimistic](#useoptimistic)
- [useTransition](#usetransition)
- [Custom Hooks](#custom-hooks)

## What are Hooks?

Hooks are functions that let you use React features in functional components. In other words, Hooks make functional components work like class components, giving you access to state, lifecycle methods, and other React features.

## useState

`useState` is a Hook that allows you to add state to functional components.

### What is State?

State is simply a value or variable that belongs to your component and can change over time.

### Syntax:
```
const [state, setState] = useState(initialValue);
```

- **initialValue**: The initial value of your state

## useEffect

`useEffect` is used to perform side effects in your component.

### What are Side Effects?

Side effects are actions performed with the "outside world" - anything that reaches outside of your React components.

### Common Side Effects:
- Fetching data from an API
- Updating the DOM (document & window)
- Timer functions like `setTimeout` and `setInterval`

### Syntax:
```
useEffect(callback, dependencies)
```

- **callback**: WHAT TO RUN - the function containing your side effect logic
- **dependencies**: WHEN TO RUN - array that controls when the effect runs

### Variations of useEffect:
- `useEffect(callback)` - runs on every render
- `useEffect(callback, [])` - runs only once (on mount)
- `useEffect(callback, [variable])` - runs when variable changes

## useContext

`useContext` Hook is used to manage global data in your React application.

### Use Cases:
- Global state
- Themes
- Services
- User settings

### Why Do We Need useContext?

Imagine an app with a parent component, its children, and those children having their own children. If you need user details from the parent in a deeply nested child, you'd have to pass it through every level (prop drilling). useContext solves this problem by creating global data accessible to all components.

### How to Create a Context:

Creating a context requires 3 simple steps:

1. **Creating the Context**
2. **Providing the Context**
3. **Consuming the Context**

### Syntax:
```
const MyContext = createContext(defaultValue);
const data = useContext(MyContext);
```

- **MyContext**: The context object created with `createContext`
- **defaultValue**: Optional default value when no provider is found

## useRef

`useRef` allows us to access DOM elements directly and store mutable values that do NOT cause a re-render when changed.

### Syntax:
```
const ref = useRef(initialValue);
```

- **initialValue**: The initial value stored in the ref (commonly `null` for DOM refs)

## useReducer

`useReducer` is used to manage state in React applications, working as a state management tool.

### What is State Management?

State management helps you manage all application states in a simple, organized way.

Use `useReducer` when you have complex state logic, multiple states, or many methods to handle state updates. It keeps all state logic in one place, making your code easier to understand and maintain.

### Syntax:
```
const [state, dispatch] = useReducer(reducer, initialState, init);
```

- **reducer**: A function that determines how state updates (takes current state and action)
- **initialState**: The initial state value
- **init**: Optional function to lazily initialize state

## useLayoutEffect

`useLayoutEffect` works exactly like `useEffect` with the same syntax, but with one key difference: **WHEN IT RUNS**.

- `useEffect` runs **after** the DOM is painted on the browser
- `useLayoutEffect` runs **before** the DOM is painted on the browser

Use `useLayoutEffect` when you need to:
- Measure layout dimensions (height, width)
- Make DOM mutations before paint
- Read layout and synchronously re-render

⚠️ **Note:** `useLayoutEffect` runs synchronously, which can affect performance if overused.

### Syntax:
```
useLayoutEffect(callback, dependencies)
```

- **callback**: The function to run before DOM paint
- **dependencies**: Array controlling when the effect runs

## useMemo

### What is Memoization?

Memoization is a technique for improving code performance by caching expensive calculations.

`useMemo` is useful for avoiding expensive calculations on every render when the returned value hasn't changed.

- Use `useEffect` for side effects
- Use `useMemo` for expensive functions and calculations

### Syntax:
```
const memoizedValue = useMemo(calculateValue, dependencies);
```

- **calculateValue**: A function that performs the expensive calculation
- **dependencies**: Array of values - recalculates only when these change

## useCallback

`useCallback` returns a memoized function, preventing functions from being re-created on every render.

### useMemo vs useCallback:
- `useMemo` returns a **memoized value**
- `useCallback` returns a **memoized function**
- `useCallback` can accept parameters when called, `useMemo` cannot

### Syntax:
```
const memoizedCallback = useCallback(fn, dependencies);
```

- **fn**: The function you want to memoize
- **dependencies**: Array of values - recreates function only when these change

## useActionState

`useActionState` is a Hook that helps you manage state for form actions and async operations like form submissions.

### What Does It Do?

It combines state management with action handling, making it perfect for forms where you need to track loading states, errors, and results from server actions or async operations.

### Use Cases:
- Form submissions with loading and error states
- Server actions in Next.js
- Any async action that needs state tracking

### Syntax:
```
const [state, formAction, isPending] = useActionState(action, initialState, permalink);
```

- **action**: An async function that performs the action (receives previous state and form data)
- **initialState**: The initial state value before any action runs
- **permalink**: Optional URL for progressive enhancement
- **Returns**: Current state, wrapped action function, and pending status

## useDeferredValue

`useDeferredValue` lets you defer updating a part of the UI to keep it responsive during heavy rendering.

### What Does It Do?

It creates a "delayed" version of a value that updates after more urgent updates finish. This helps prevent slow renders from blocking user interactions.

### Use Cases:
- Search input filtering large lists
- Keeping UI responsive during expensive computations
- Prioritizing urgent updates over visual updates

### Syntax:
```
const deferredValue = useDeferredValue(value, initialValue);
```

- **value**: The value you want to defer
- **initialValue**: Optional value to use during initial render
- **Returns**: A deferred version of the value that may lag behind

## useEffectEvent

`useEffectEvent` (experimental) extracts non-reactive logic from useEffect, creating an event function that doesn't need to be in the dependency array.

### What Does It Do?

It solves the problem of needing to access latest props/state in effects without triggering re-runs. The extracted function always sees the latest values but doesn't cause the effect to re-execute.

### Use Cases:
- Reading latest props in effects without re-running the effect
- Event handlers inside effects that need fresh values
- Logging or analytics that shouldn't trigger effect re-runs

### Syntax:
```
const onEvent = useEffectEvent(handler);
```

- **handler**: The function containing your event logic
- **Returns**: A stable function reference that always uses latest values

⚠️ **Note:** This is an experimental hook and may change in future React versions.

## use

`use` is a Hook that lets you read the value of a resource like a Promise or Context directly in your component.

### What Does It Do?

Unlike other hooks, `use` can be called conditionally and in loops. It suspends the component while waiting for Promises to resolve, integrating seamlessly with React Suspense.

### Use Cases:
- Reading data from Promises (async data fetching)
- Consuming Context without nesting
- Conditional resource reading

### Syntax:
```
const value = use(resource);
```

- **resource**: A Promise or Context object you want to read
- **Returns**: The resolved value of the Promise or Context value

⚠️ **Note:** When used with Promises, must be paired with Suspense and Error Boundaries.

## useOptimistic

`useOptimistic` allows you to show optimistic UI updates while an async action is in progress.

### What Does It Do?

It lets you immediately show what the state *will be* after an action succeeds, before the actual server response comes back. If the action fails, it automatically reverts to the actual state.

### Use Cases:
- Instant UI feedback for like buttons or votes
- Optimistic comment/post additions
- Shopping cart updates
- Any action where you want immediate visual feedback

### Syntax:
```
const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
```

- **state**: The actual current state value
- **updateFn**: Function that returns the optimistic state (receives current state and optimistic value)
- **Returns**: The optimistic state to display, and a function to trigger optimistic updates

## useTransition

`useTransition` lets you mark state updates as non-urgent (transitions), keeping the UI responsive during slow renders.

### What Does It Do?

It allows you to update state without blocking the UI. Urgent updates (like typing) stay instant, while non-urgent updates (like filtering) can be delayed to keep interactions smooth.

### Use Cases:
- Filtering or searching large lists
- Tab switching with heavy content
- Navigation between routes
- Any state update that triggers expensive rendering

### Syntax:
```
const [isPending, startTransition] = useTransition();
```

- **isPending**: Boolean indicating if a transition is in progress
- **startTransition**: Function to wrap state updates you want to mark as transitions

### useTransition vs useDeferredValue:
- `useTransition` - marks state *updates* as non-urgent
- `useDeferredValue` - marks a *value* as non-urgent

## Custom Hooks

### What are Custom Hooks?

Custom Hooks are reusable functions that you create for your own use. They allow you to extract component logic into reusable functions.

When you have logic that uses multiple hooks and you want to reuse it across your project, create a custom hook instead of duplicating code.

### Naming Convention:

Custom hooks must start with "use" (e.g., `useFetch`, `useLocalStorage`, `useAuth`)

## 🚀 Getting Started

Clone this repository to explore the examples:

```bash
git clone https://github.com/thamirmohcine/Learning-React-Hooks.git
cd Learning-React-Hooks
npm install
npm run dev
```
