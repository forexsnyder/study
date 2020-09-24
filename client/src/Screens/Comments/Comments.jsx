import React, { useState, useEffect } from 'react';
import api from '../../Services/api-config'
import Layout from '../../Component/Shared/Layout'
import Comment from '../../Component/Comment/Comment'


const Comments = () => {
    const [comments,updateComments] = useState([])
    
  
    useEffect(()=>{
      const fetchComment = async ()=> {
        const resp= await api.get('/comments')
        updateComments(resp.data)
        console.log(resp.data)
      }
      fetchComment()
    },[])
    const commentsJSX = comments.map((comment, index) =>
    <Comment  comment={comment.comment} key={index} />
  )

    return (
        <Layout>
            <div>
            {commentsJSX}
            </div>
        </Layout>


    )
}

export default Comments