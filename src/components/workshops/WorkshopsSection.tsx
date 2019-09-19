import { Section } from "../section"
import * as React from "react"
import styled from "@emotion/styled"
import { WorkshopProps } from "./Workshop.types"
import useWorkshops from "./useWorkshopEvents"

const WorkshopListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const WorkList: React.FC<{ workshops: WorkshopProps[] }> = ({ workshops }) => (
  <WorkshopListWrapper>
    {!!workshops.length &&
      workshops.map(w => (
        <li key={w.startDate}>
          <Workshop {...w} />
        </li>
      ))}
  </WorkshopListWrapper>
)

export const WorkshopsSection: React.FC = () => {
  const workshops = useWorkshops()
  return (
    <Section>
      <h3>Workshops</h3>
      <WorkList workshops={workshops} />
    </Section>
  )
}

const WorkshopWrapper = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "date info";

  .date {
    align-items: flex-start;
    color: #ffd10a;
    display: flex;
    grid-area: date;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: bolder;
    letter-spacing: 0.25rem;
  }

  .info {
    align-items: center;
    display: flex;
    grid-area: info;
    justify-content: flex-start;
  }
`

export const Workshop: React.FC<WorkshopProps> = ({
  name,
  year,
  date,
  startDate,
}) => (
  <WorkshopWrapper vocab="http://schema.org/" typeof="Event">
    {/**
     //@ts-ignore */}
    <div className="date" property="startDate" content={startDate}>
      <span>{date}</span>
      <span>{year}</span>
    </div>
    <div className="info" property="name">
      {name}
    </div>
  </WorkshopWrapper>
)
