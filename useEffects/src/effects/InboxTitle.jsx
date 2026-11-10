
// Steven Gonell
// 11/3/2026
// This component displays the inbox title with the number of unread messages.
// It updates the document title dynamically based on the unread messages count.
import { useState, useEffect } from 'react'
 
function InboxTitle() {
  // State to store the number of unread messages
  const [unread, setUnread] = useState(0)
 
  // Effect to update the document title based on the number of unread messages
  useEffect(() => {
    document.title = `(${unread}) Inbox`
  }, [unread])
 // This is what will be displayed on the page based on the number of unread messages
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
