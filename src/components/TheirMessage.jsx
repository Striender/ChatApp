const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'Left' }}
        />
      );
    }
  
    return (
      <div className="message" style={{ float: 'left', marginLeft: '18px', color: 'white', backgroundColor: '#178393' }}>
        {message.text}
      </div>
    );
  };
  
  export default MyMessage;