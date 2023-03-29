import React, { useRef, useState } from 'react'
import { WorktileRecord } from '@/gql/graphql'
import { renderNodeRule, StructuredText } from 'react-datocms'
import { FaReact } from 'react-icons/fa'
import { isList, isListItem } from 'datocms-structured-text-utils'
import { motion } from 'framer-motion'
import { dropdownStagger, menuLinks } from '@/helpers/transitions'

interface IProps {
  project: WorktileRecord
}

const Dropdown = ({ project }: IProps) => {
  const [focus, setFocus] = useState<boolean>()
  let title = project.title
  let role = project.role
  let date = project.date
  let details = project.details?.value
  return (
    <div
      tabIndex={0}
      className=" group collapse collapse-arrow"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <h3 className="collapse-title after:text-accent after:scale-[2] group-focus:text-accent group-focus:duration-300 group-focus:ease-in-out group-focus:origin-right group-focus:transition-colors xl:h-fit">
        {title}
      </h3>
      <div className="grid w-full grid-cols-2 collapse-content">
        <p className="col-start-1 mr-auto">{role}</p>
        <p className="col-start-2 ml-auto">{date}</p>
        <StructuredText
          data={details}
          customNodeRules={[
            renderNodeRule(isListItem, ({ children, key }) => {
              return (
                <motion.div key={key} className="relative" variants={menuLinks}>
                  <FaReact className="absolute text-lg -left-8 top-[8px] fill-accent md:text-2xl" />
                  <li>{children}</li>
                </motion.div>
              )
            }),
            renderNodeRule(isList, ({ children, key }) => (
              <motion.ul
                key={key}
                className="col-start-1 m-0 list-none col-span-full"
                variants={dropdownStagger}
                initial="hide"
                animate={focus ? 'show' : 'hide'}
              >
                {children}
              </motion.ul>
            )),
          ]}
        />
      </div>
    </div>
  )
}

export default Dropdown
