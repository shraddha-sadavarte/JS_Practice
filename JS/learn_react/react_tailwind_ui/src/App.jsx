import React from 'react'
import Section1 from './components/section1/Section1'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. djdhf sjdsijo fdijfd fdjfdk dfhdi, jfkj.',
      tag:'Satisfied'
    },
     
    {
      img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tag:'Undeserved'
    },

    {
      img:'https://plus.unsplash.com/premium_photo-1661767929421-3d7f6c6c228d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
