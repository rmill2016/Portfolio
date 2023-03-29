import { ServicecardRecord } from '@/gql/graphql'
import { isList, isListItem } from 'datocms-structured-text-utils'
import React from 'react'
import { renderNodeRule, StructuredText } from 'react-datocms/structured-text'
import { FaCheckCircle } from 'react-icons/fa'

type Props = {
  card: ServicecardRecord
  index: number
}

const Card = ({ card, index }: Props) => {
  return (
    <div
      id={`item${index + 1}`}
      className="relative w-full h-auto carousel-item aspect-[4/5] max-w-[400px]"
    >
      <div className="flex flex-col items-center w-full h-auto p-8 overflow-y-auto border-2 border-primary rounded-2xl">
        <ul className="flex flex-col h-full gap-4 p-0 m-0">
          <h3 className="mx-auto w-fit">{card.title}</h3>
          <hr className="w-full my-4 border-2 border-accent" />
          <StructuredText
            data={card.body?.value}
            customNodeRules={[
              renderNodeRule(isList, ({ children, key }) => (
                <ul
                  key={key}
                  className="flex flex-col items-start gap-4 m-0 list-none"
                >
                  {children}
                </ul>
              )),
              renderNodeRule(isListItem, ({ children, key }) => (
                <li className="relative pl-4">
                  <FaCheckCircle className="absolute w-6 h-auto -left-6 -top-[2px]" />
                  {children}
                </li>
              )),
            ]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Card
