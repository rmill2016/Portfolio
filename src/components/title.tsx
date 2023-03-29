import React from 'react'

type Props = {
  title: string
}

const Title = (title: Props) => {
  return (
    <div className="mx-auto h-fit w-fit lg:col-start-1 lg:col-span-full lg:row-start-1 lg:my-auto">
      <h4 className="relative px-4 py-2  bg-inherit before:absolute before:-top-2 before:-right-2 before:border-2 before:border-primary before:w-5/6 before:h-5/6 bg-clip-padding before:bg-clip-padding before:-z-[1] before:border-b-0 before:border-l-0 after:absolute after:-bottom-2 after:-left-2 after:border-2 after:border-primary after:w-5/6 after:h-5/6 after:bg-clip-padding after:-z-[1] after:border-t-0 after:border-r-0">
        {title?.title}
      </h4>
    </div>
  )
}

export default Title
