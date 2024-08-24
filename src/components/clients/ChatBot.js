// pages/index.js
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

export const FAQChatbot = ({setOpen}) => {
  const [messages, setMessages] = useState([{text: 'Hi, how may I help you?', isUser: false}]);
  const [userInput, setUserInput] = useState('');
    console.log(messages)

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      const newMessage = { text: userInput, isUser: true };
      console.log('executed', userInput);
      await setMessages([...messages, newMessage]);
      console.log('after execution', messages);

      processUserQuery(userInput);
      setUserInput('');
    }
  };

  const processUserQuery = (query) => {
    // Implement logic to match user query to relevant FAQ response
    const response = getFAQResponse(query);
    const newMessage = { text: response, isUser: false };
    setMessages((messages) => [...messages, newMessage]);
  };

  const getFAQResponse = (query) => {
    // Implement logic to map user queries to FAQ responses
    switch (query.toLowerCase()) {
      case 'what is the return policy?':
        return 'Our return policy is 30 days from the date of purchase. You can return any unused items for a full refund.';
      case 'how long does shipping take?':
        return 'Standard shipping takes 5-7 business days. We also offer expedited shipping options for an additional fee.';
      case 'do you offer any discounts?':
        return 'Yes, we offer a 10% discount for first-time customers and a 5% discount for returning customers.';
      default:
        return 'Im sorry, I don\'t have an answer for that question. Please try rephrasing your question or check our FAQ page.';
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>FAQ Chatbot</h1>
        <IconButton
          aria-label="close"
          onClick={()=>setOpen(false)}
          sx={{
            position: 'absolute',
            right: 10,
            top: 1,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon color='primary'/>
        </IconButton>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button type="submit">Send</button>
      </form>
      <style jsx>{`
        .chat-container {
          max-width: 350px;
          position: fixed;
          bottom: 10px;
          right: 10px;
          background-color: white;
          z-index: 1;
          box-shadow: 0px 0px 10px gray;
        }
        .chat-header {
          background-color:#4287f5 ;
          color: white;
          padding: 10px;
          text-align: center;
          margin-bottom: 10px;
        }
        .chat-messages {
          height: 300px;
          overflow-y: scroll;
          padding: 10px;
          font-size: 14px;
          
        }
        .user-message, .bot-message {
          margin-bottom: 17px;
          padding: 5px;
          border-radius: 10px;
        }
        .user-message {
          text-align: right;
        }
        .bot-message {
          text-align: left;
        }
        .chat-input {
          display: flex;
        }
        .chat-input input {
          flex-grow: 1;
          padding: 5px 10px;
          font-size: 16px;
          border-top: 1px solid black;
        }
        .chat-input button {
          background-color: #4287f5;
          color: white;
          border: none;
          padding: 5px 10px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};