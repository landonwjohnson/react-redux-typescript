import React, {FC, useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {UserEvent, deleteUserEvent, updateUserEvent} from '../../redux/user-events'

interface Props {
    event: UserEvent;
}

const EventItem: FC<Props> = ({event}) => {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)


    const handleDeleteClick = () => {
        dispatch(deleteUserEvent(event.id));
    }

    const handleTitleClick = () => {
      setEditable(true)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if(editable){
        inputRef.current?.focus();
      }


    }, [editable])

    const [title, setTitle] = useState(event.title)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }

    const handleBlur = () => {
      if(title !== event.title){
        dispatch(updateUserEvent({
          ...event,
          title
        }))
      }
      setEditable(false);
    }


    return (
        <div className="calendar-event">
        <div className="calendar-event-info">
          <div className="calendar-event-time">10:00 - 12:00</div>
          <div className="calendar-event-title">
            {editable? (
              <input 
                ref={inputRef}  
                onChange={handleChange} 
                type="text" 
                value={title} 
                onBlur={handleBlur}
              />
            ): 
            <span onClick={handleTitleClick}>
              {event.title}
            </span> 
            }

            </div>
        </div>
        <button onClick={handleDeleteClick} className="calendar-event-delete-button">
          &times;
        </button>
      </div>
    )
}

export default  EventItem
