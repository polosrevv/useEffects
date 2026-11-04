import { useState, useEffect } from 'react'
 
function InboxTitle() {
  const [unread, setUnread] = useState(0)
 
  useEffect(() => {
    document.title = `(${unread}) Inbox`
  }, [unread])
 
  return (
    <div className="inbox">
      {unread > 0 ?
       <p>You have {unread} unread messages</p> 
       : <p>Inbox</p>}
      <button onClick={() => setUnread(unread + 1)}>New message</button>
      <button onClick={() => setUnread(0)}>Mark all read</button>
    </div>
  )
}
 
export default InboxTitle
