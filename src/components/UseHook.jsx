import React, { use, Suspense, useState } from 'react';

class ErrorBoundary extends React.Component{
  constructor(props){
    super (props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error){
    return {hasError : true};
  }

  componentDidCatch(error, errorInfo){
    return alert("ErrorBoundary caught an error");
  }

  render() {
    if (this.state.hasError){
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

async function fetchJoke() {

  const res = await fetch('https://api.chucknorris.io/jokes/random')
  if (!res.ok){
    throw new Error("Failed to fetch data from server")
  }
  const data = await res.json();
  return data.value;
}

function JokeContent({ jokePromise }) {

  
  const joke = use(jokePromise);

  return (
    <div style={{ padding: '20px', backgroundColor: '#000', borderRadius: '8px' }}>
      <h3>Current Joke</h3>
      <p>{joke}</p>
    </div>
  );
}

export default function JokeApp() {
  const [jokePromise, setJokePromise] = useState(null);

  
  function loadJoke() {
    setJokePromise(null);
    setTimeout(() => {
        setJokePromise( fetchJoke());
    }, 100);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Testing  use Hook</h1>
      <button onClick={loadJoke}>Get New Joke</button>

      <div style={{ marginTop: '20px' }}>
        {jokePromise && (
          <ErrorBoundary fallback={<h2 style={{color: 'red'}}> AN ERROR OCCURE DURING FETCHING DATA</h2>}>
            <Suspense fallback={<h2>Loading...</h2>}>
              <JokeContent jokePromise={jokePromise} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}