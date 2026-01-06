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
- [Custom Hooks](#custom-hooks)

## What are Hooks?

Hooks are functions that let you use React features in functional components. In other words, Hooks make functional components work like class components, giving you access to state, lifecycle methods, and other React features.

## useState

`useState` is a Hook that allows you to add state to functional components.

### What is State?

State is simply a value or variable that belongs to your component and can change over time.

```javascript
const [count, setCount] = useState(0);
```

## useEffect

`useEffect` is used to perform side effects in your component.

### What are Side Effects?

Side effects are actions performed with the "outside world" - anything that reaches outside of your React components.

### Common Side Effects:
- Fetching data from an API
- Updating the DOM (document & window)
- Timer functions like `setTimeout` and `setInterval`

### Syntax:
```javascript
useEffect(callback, dependencies)
```

- **callback**: WHAT TO RUN
- **dependencies**: WHEN TO RUN

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

```javascript
const MyContext = createContext();

// Provider
<MyContext.Provider value={data}>
  {children}
</MyContext.Provider>

// Consumer
const data = useContext(MyContext);
```

## useRef

`useRef` allows us to access DOM elements directly and store mutable values that do NOT cause a re-render when changed.

```javascript
const inputRef = useRef(null);
```

## useReducer

`useReducer` is used to manage state in React applications, working as a state management tool.

### What is State Management?

State management helps you manage all application states in a simple, organized way.

Use `useReducer` when you have complex state logic, multiple states, or many methods to handle state updates. It keeps all state logic in one place, making your code easier to understand and maintain.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## useLayoutEffect

`useLayoutEffect` works exactly like `useEffect` with the same syntax, but with one key difference: **WHEN IT RUNS**.

- `useEffect` runs **after** the DOM is painted on the browser
- `useLayoutEffect` runs **before** the DOM is painted on the browser

Use `useLayoutEffect` when you need to:
- Measure layout dimensions (height, width)
- Make DOM mutations before paint
- Read layout and synchronously re-render

⚠️ **Note:** `useLayoutEffect` runs synchronously, which can affect performance if overused.

## useMemo

### What is Memoization?

Memoization is a technique for improving code performance by caching expensive calculations.

`useMemo` is useful for avoiding expensive calculations on every render when the returned value hasn't changed.

- Use `useEffect` for side effects
- Use `useMemo` for expensive functions and calculations

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## useCallback

`useCallback` returns a memoized function, preventing functions from being re-created on every render.

### useMemo vs useCallback:
- `useMemo` returns a **memoized value**
- `useCallback` returns a **memoized function**
- `useCallback` can accept parameters when called, `useMemo` cannot

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## Custom Hooks

### What are Custom Hooks?

Custom Hooks are reusable functions that you create for your own use. They allow you to extract component logic into reusable functions.

When you have logic that uses multiple hooks and you want to reuse it across your project, create a custom hook instead of duplicating code.

### Example: useFetch

```javascript
const useFetch = (url) => {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResponses(data));
    }, [url])

    return responses
}
```

## 🚀 Getting Started

Clone this repository to explore the examples:

```bash
git clone https://github.com/thamirmohcine/Learning-React-Hooks.git
cd Learning-React-Hooks
npm install
npm run dev
```


Made with ❤️ for React beginners