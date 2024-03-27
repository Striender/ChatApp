import { ChatEngine } from 'react-chat-engine';
import { IsTyping } from 'react-chat-engine';
import './App.css' ; 
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="7eddae47-50ec-4622-85dd-9c8a0e4f23e6"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App ;
