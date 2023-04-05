import { gql } from '@apollo/client'

export const FRAGMENT_ASSET = 'title alt url'

export const QUERY_HOMEPAGE = gql`
  {
    homepage {
      title
      header {
        logo {
          ${FRAGMENT_ASSET}
        }
        goback
        backarrow {
          ${FRAGMENT_ASSET}
        }
      }
      welcomemessage {
        blocks
        links
        value
      }
      carousel {
        ${FRAGMENT_ASSET}
      }
      profileimage {
        ${FRAGMENT_ASSET}
      }
      floatingicons {
        ${FRAGMENT_ASSET}
      }
      links {
        title
        to
        icon {
          ${FRAGMENT_ASSET}
        }
      }
    }
  }
`

export const QUERY_SERVICESPAGE = gql`
  {
    servicespage {
      title
      header {
        goback
        logo {
          ${FRAGMENT_ASSET}
        }
        backarrow {
          ${FRAGMENT_ASSET}
        }
      }
      servicesmessage {
        text {
          value
        }
        images {
          ${FRAGMENT_ASSET}
        }
      }
      cards {
        title
        body {
          value
        }
      }
      skills {
        title
        icon {
          ${FRAGMENT_ASSET}
        }
      }
      skillstitle
      techstacktitle
      techstack {
        title
        body
        icon {
          ${FRAGMENT_ASSET}
        }
      }
    }
  }
`

export const QUERY_WORKPAGE = gql`
  {
    workpage {
      title
      header {
        goback
        backarrow {
          ${FRAGMENT_ASSET}
        }
        logo {
          ${FRAGMENT_ASSET}
        }
      }
      projects {
        title
        images {
          ${FRAGMENT_ASSET}
        }
        role
        date
        details {
          value
        }
        link {
          title
          to
          icon {
            ${FRAGMENT_ASSET}
          }
        }
      }
    }
  }
`

export const QUERY_CONTACTPAGE = gql`
  {
    contactpage {
      title
      header {
        goback
        backarrow {
          ${FRAGMENT_ASSET}
        }
        logo {
          ${FRAGMENT_ASSET}
        }
      }
      subtitle
      getintouch
      profileimage {
        ${FRAGMENT_ASSET}
      }
      cvlink {
        title
        to
        icon {
          ${FRAGMENT_ASSET}
        }
      }
      contacticons {
        title
        to
        icon {
          ${FRAGMENT_ASSET}
        }
      }
    }
  }
`
