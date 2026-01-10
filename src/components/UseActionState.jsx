import React, { useActionState } from 'react'

const EXISTING_USERS = ["Ahmed", "Sara", "loka", "John"];

async function updateProfileAction(prevState, formData){
  const name = formData.get("username");
  await new Promise(res => setTimeout(res, 2000));

  if (!name || name.trim() === "") return {error: "the name should not be empty", success: false};

    const userExists = EXISTING_USERS.some((user) => user.toLowerCase() === name.toLowerCase().trim());
    if (userExists){
      return {
        error: `The user "${name}" already exists ! please try another name .`,
        success : false
      }
    }

  return {success: true, message: `Hello ${name}`, error: null};
}

function ProfileNew() {
  const [state, formAction, isPending] = useActionState(updateProfileAction, {error: null, success: false});

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>User Registration</h2>
      <form action={formAction} style={{ display: 'flex', 
          flexDirection: 'column', gap: '10px', 
            maxWidth: '300px', margin: '0 auto' }}>
        <input name="username" placeholder='enter your name...' 
          disabled={isPending} style={{padding: '8px'}}/>

        <button type='submit' disabled={isPending}
          style={{ padding: '10px', cursor: isPending ? 'not-allowed' : 'pointer' }}>
          {!isPending ? "Add +" : "Loading..."}
        </button>

        {state?.error && <p style={{ color: "red", fontWeight: "bold" }}>{state.error}</p>}
        {state?.success && <p style={{ color: "green", fontWeight: "bold" }}>{state.message}</p>}
      </form>
      <div style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
        <strong>Registered Names (for testing):</strong> Ahmed, Sara, loka, John
      </div>
    </div>
  )
}

export default ProfileNew;