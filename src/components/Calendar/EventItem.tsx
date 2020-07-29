import React, {FC} from 'react'
import {useDispatch} from 'react-redux'
import {UserEvent, deleteUserEvent} from '../../redux/user-events'

interface Props {
    event: UserEvent;
}

const EventItem: FC<Props> = ({event}) => {
const dispatch = useDispatch()


    const handleDeleteClick = () => {
        dispatch(deleteUserEvent(event.id));
      }
    return (
        <div className="calendar-event">
        <div className="calendar-event-info">
          <div className="calendar-event-time">10:00 - 12:00</div>
          <div className="calendar-event-title">{event.title}</div>
        </div>
        <button onClick={handleDeleteClick} className="calendar-event-delete-button">
          &times;
        </button>
      </div>
    )
}

export default  EventItem
