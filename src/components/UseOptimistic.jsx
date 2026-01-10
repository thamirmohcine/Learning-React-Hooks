import React, { useOptimistic, useState } from 'react'

export default function SimpleChat(){

    const [messages, setMessages] = useState([{text: "Hello!", sending: false }])

    const [optimisticMessage, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [...state, {text: newMessage, sending: true}]
    )

    async function handleSend(formData) {
        const text = formData.get("message");

        addOptimisticMessage(text);

        await new Promise((res => setTimeout(res, 2000)));

        setMessages(prev => [...prev, {text, sending:false}])
    }

    return (
        <div    style={{padding: "20px"}}>
            {optimisticMessage.map((msg, index) => (
                <p  key={index} style={{opacity: msg.sending ? 0.5 : 1}}>
                    {msg.text} {msg.sending && "(Sending...)"}
                </p>
            ))}

            <form action={handleSend}>
                <input type="text" name='message' placeholder='Type a message ...' />
                <button type='submit'>Send</button>
            </form>

        </div>
    )
}