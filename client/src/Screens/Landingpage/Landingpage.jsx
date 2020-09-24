import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Layout from "../../Component/Shared/Layout";
import api from "../../Services/api-config"
import Topic from "../../Component/Topic/Topic"



function Landingpage(){
  const [topics,updateTopics] = useState([])
  const params = useParams();

  useEffect(()=>{
    const fetchTopic = async ()=> {
      const resp= await api.get('/topics')
      updateTopics(resp.data)
      console.log(resp.data)
    }
    fetchTopic()
  },[])

  const topicsJSX = topics.map((topic, index) =>
  <Topic id={topic.id} name={topic.name} key={index} />
  
  )



  return (
    <Layout>
      <div className="main-topics">
      {topicsJSX}
      </div>
    </Layout>


    
  );
}

export default Landingpage;