import { useState } from "react";

let nexId = 0;
function Chat(){
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage]= useState([]);
  const [userName, setUserName] = useState("");
  const [roomName, setroomName]= useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value)
  }

  const handleUserName = (e) => {
    setUserName(e.target.value);
    
  }

  const handleroom = (e) => {
    setroomName(e.target.value);
  }

 
  function handleSubmit(e){
    e.preventDefault();//阻止浏览器的默认行为
    if(!userName || !message || !roomName){
      alert("Please fill all fields")
      return;
    }

   
    
    setNewMessage([...newMessage, {id: nexId++, message: message, userName: userName}]);
    setMessage("");
    setUserName("")

  }

  

  return(
    <>
      <h1>{roomName}</h1>
      <form onSubmit={handleSubmit} >

         <input type='text' placeholder='Message' value={message} onChange={handleMessage}/>
      <input type="text" placeholder='Username' value={userName}  onChange={handleUserName} />
        <input type="text" placeholder='RoomName' value={roomName}  onChange={handleroom} />
        
      <button  type='submit'>发送</button>
      </form>
    
      
     
    
         <ul>
        {newMessage.map((m)=><p key={m.id}> <strong>{m.userName}:</strong>  {m.message} {" "} 
        <button onClick={()=>setNewMessage(newMessage.filter(n=>n.id!==m.id))}>撤回</button>
        
        
        
        </p> )}
        </ul>

    
    </>
  )
}


export default function Chatroom() {
  return(
    <>
   
    <Chat />
    
    
    </>
  )
}