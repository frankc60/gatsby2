import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(d => {
          return (
            <artcile key={d.id} className="service">
              {d.icon}
              <h4>{d.title}</h4>
              <div className="underline"></div>
              <p>{d.text}</p>
            </artcile>
          )
        })}
      </div>
    </section>
  )
}

export default Services
