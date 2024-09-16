import React from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import withDragAnDrop from 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/libs/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import './Calendar.css'


export default function Calendar() {

    const DragAndDropCalendar = withDragAndDrop(Calendar);
    const localizer = momentLocalizer(moment);

  return (
    <div>
      <DragAndDropCalendar
        defaultDate = {moment().toDate()}
        defaultView ='month'
        events = {[{}]}
        localizer = {localizer}
        resizable
        className = 'calendar'
/>

    </div>
  )
}
