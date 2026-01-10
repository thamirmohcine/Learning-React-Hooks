import React, { useOptimistic, useState, useRef } from 'react'

export default function ChatRoom () {
    const [message, setmessages] = useState([
        {text: "Welcome", id: 1, sending: false, failed: false }, 
    ])

    const formRef = useRef(null);

    const [optimisticMessage, addOpmisticMessage] = useOptimistic(
        message, 
        (state, newMessageText) => [
            ...state,
            {text: newMessageText, id: Date.now(), sending: true, failed : false},
        ]
    );

    async function sendMessageAction(formData){
        const messageText = formData.get("message");

        addOpmisticMessage(messageText);

        formRef.current?.reset();

        try{
            await new Promise((res, rej) =>{
                setTimeout(() => {
                    const isSucsses = Math.random() > 0.5;
                    isSucsses ? res() : rej(new Error("Network Error")); 
                }, 2000);
            });

            setmessages((prev) => [
                ...prev,
                {text: messageText, id: Date.now(), sending: false, failed: true},
            ]);
        }catch (e) {
            console.error("seding message fails");
        }
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Chat Room </h2>
      
      <div style={{ border: "1px solid #ccc", height: "200px", padding: "10px", marginBottom: "10px", overflowY: "auto" }}>
        {optimisticMessage.map((msg) => (
          <div key={msg.id} style={{ 
            background: msg.failed ? "#5c1a1a" : "#0b93f6",
            marginBottom: "8px", 
            color: msg.sending ? "#888" : "#fff",
            textAlign: "right"
          }}>
            {msg.text} 
            {msg.sending && <small> Sending...</small>}
          </div>
        ))}
      </div>

      <form action={sendMessageAction} ref={formRef}>
        <input name="message" placeholder="WRite Your Message Here ..." required />
        <button type="submit">Send</button>
      </form>
    </div>
    )
}