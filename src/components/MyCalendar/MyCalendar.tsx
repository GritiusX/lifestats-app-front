import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import "./MyCalendar.scss";
dayjs.extend(timezone);
const localizer = dayjsLocalizer(dayjs);
const DnDCalendar = withDragAndDrop(Calendar);

function MyCalendar() {
	const [events, setEvents] = useState([
		{
			id: 1,
			title: "Reunión de equipo",
			start: new Date(2024, 5, 28, 10, 0, 0), // 28 de junio de 2024, 10:00 AM
			end: new Date(2024, 5, 28, 11, 0, 0), // 28 de junio de 2024, 11:00 AM
			allDay: false,
			resizable: true,
			isDraggable: true,
		},
		{
			id: 2,
			title: "Día completo de entrenamiento",
			start: new Date(2024, 5, 29), // 29 de junio de 2024
			end: new Date(2024, 5, 29), // 29 de junio de 2024
			allDay: false,
			resizable: true,
			isDraggable: true,
		},
		{
			id: 3,
			title: "Consulta médica",
			start: new Date(2024, 5, 30, 14, 30, 0), // 30 de junio de 2024, 2:30 PM
			end: new Date(2024, 5, 30, 15, 30, 0), // 30 de junio de 2024, 3:30 PM
			allDay: false,
			resizable: true,
			isDraggable: true,
		},
		{
			id: 4,
			title: "Consulta Cuantica",
			start: new Date(2024, 5, 30, 14, 30, 0), // 30 de junio de 2024, 2:30 PM
			end: new Date(2024, 5, 30, 15, 30, 0), // 30 de junio de 2024, 3:30 PM
			allDay: false,
			resizable: true,
			isDraggable: true,
		},
		{
			id: 5,
			title: "Consulta Pernica",
			start: new Date(2024, 5, 30, 14, 30, 0), // 30 de junio de 2024, 2:30 PM
			end: new Date(2024, 5, 30, 15, 30, 0), // 30 de junio de 2024, 3:30 PM
			allDay: false,
			resizable: true,
			isDraggable: true,
		},
	]);

	const onEventDrop = ({ event, start, end, allDay }) => {
		const updatedEvent = { ...event, start, end, allDay };
		const updatedEvents = events.map((evt) =>
			evt.id === event.id ? updatedEvent : evt
		);
		setEvents(updatedEvents);
	};

	const onEventResize = ({ event, start, end, allDay }) => {
		const updatedEvent = { ...event, start, end, allDay };
		const updatedEvents = events.map((evt) =>
			evt.id === event.id ? updatedEvent : evt
		);
		setEvents(updatedEvents);
	};

	const onDragStart = ({ event }) => {
		console.log("Inicio de arrastre:", event);
	};

	return (
		<div className="calendarHeight">
			<DnDCalendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				allDayAccessor="allDay"
				draggableAccessor={() => true}
				resizableAccessor={(event) => event.resizable}
				onEventDrop={onEventDrop}
				onEventResize={onEventResize}
				onDragStart={onDragStart}
				resizable
				step={5}
				timeslots={5}
			/>
		</div>
	);
}

export default MyCalendar;
