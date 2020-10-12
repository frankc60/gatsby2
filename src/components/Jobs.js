import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        id
        date
        company
        position
        updated_at
        description {
          name
          id
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiJobs: { nodes },
  } = data

  return (
    <article>
      <h2>jobs component</h2>
      {nodes.map(d => {
        return (
          <article key={d.id}>
            {d.company} - {d.date} - {d.position}
            <div>
              {d.description.map(x => {
                return (
                  <p>
                    {x.id} - {x.name}
                  </p>
                )
              })}
            </div>
          </article>
        )
      })}
      <p>{JSON.stringify(data)}</p>
    </article>
  )
}

export default Jobs
