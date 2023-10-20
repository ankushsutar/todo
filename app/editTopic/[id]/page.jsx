import React from 'react'
import EditTopicForm from '@/components/EditTopicForm'

const getTopicById = async(id) => {
 const apiUrl = process.env.BACKEND_URL
 try {
  const res = await fetch(apiUrl+`/api/topics/${id}`,{
    cache:"no-store"
  })

  if(! res.ok){
    throw new Error("Could not fetch topic")
  }

  return res.json();
 } catch (error) {
    console.log("error",error)
 }
}

const EditTopic = async({params}) => {
  const {id} = params
  const {topic} = await getTopicById(id);
  const {title, description} = topic
  console.log("id",id)
  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}

export default EditTopic 