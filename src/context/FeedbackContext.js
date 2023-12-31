import {createContext, useState} from "react";
import { v4 as uuidv4} from "uuid";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is fedback item 1",
      rating: 10
    },
    {
      id: 2,
      text: "This is fedback item 2",
      rating: 1
    },
    {
      id: 3,
      text: "This is fedback item 3",
      rating: 2
    },
    {
      id: 4,
      text: "This is fedback item 4",
      rating: 5
    },
    {
      id: 5,
      text: "This is fedback item 5",
      rating: 8
    },
  ]);


  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });


    // Add new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    
    setFeedback([newFeedback,...feedback])

  }


  // Delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this feedback?")){
      setFeedback(feedback.filter((item)=>(
        item.id !== id
      )))
    }
  }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item)=> (item.id === id ? {...item, ...
        updItem } : item))
    )
   
  }


  // Set item to be updated
  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit: true
    })
  }


  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;