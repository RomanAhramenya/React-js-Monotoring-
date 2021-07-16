import React from 'react'
import s from './Disqus.module.css'
import {DiscussionEmbed} from 'disqus-react'
function DisqusAdd(props) {
    return (
        <div className={s.container} >
        <DiscussionEmbed
        shortname = 'monitor'
        config={
          {
            url:'http://localhost:3000/project/'+props.content,
            identifier:props.content,
            title:props.content,
            language:'ru'

          }
        }
        />
        
        </div>
    )
}

export default DisqusAdd