import { useEffect, useState } from "react"
import { MeetUpEvent, WorkshopProps } from "./Workshop.types"

export default function useWorkshopEvents(): WorkshopProps[] {
  const [events, setEvents] = useState([] as WorkshopProps[])

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/api.meetup.com/EnglishFriday-by-Etnonautas/events"
    )
      .then(r => r.json())
      .then(r =>
        setEvents(
          r.map(({ name, local_date: date, time }: MeetUpEvent) => ({
            name,
            year: date.split("-")[0],
            startDate: new Date(time),
            date: date
              .split("-")
              .filter((x, i) => i > 0)
              .reverse()
              .join("/"),
          }))
        )
      )
  }, [])

  return events
}
