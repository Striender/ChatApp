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
            projectID="72dabd9c-5884-4ddd-9fdd-09c694c7de9b"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App ;