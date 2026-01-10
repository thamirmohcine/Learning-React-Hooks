import React, { use, Suspense, useState } from 'react';

async function  fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1') 

  const data = await res.json()
  return (data);
}

const UserCard = ({userPromise}) => {
  const user = use(userPromise)

  return (
    <>
    
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </>
  )
}

export default function UserApp() {
  const [userPromise, setUserPromise] = useState(null);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Testing UseEffectEvent </h1>
      <button onClick={() => setUserPromise(fetchUser())}>
        Load User Profile
      </button>

      <div style={{ marginTop: '20px' }}>
        {userPromise && (
          <Suspense fallback={<h2>Loading User Data...</h2>}>
             <UserCard userPromise={userPromise} />
          </Suspense>
        )}
      </div>
    </div>
  );
}