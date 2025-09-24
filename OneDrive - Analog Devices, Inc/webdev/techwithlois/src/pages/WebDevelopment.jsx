import React from 'react'
import webDevData from '../data/webdev.json';
import TopicDetailLayout from '../components/TopicDetailLayout';

const WebDevelopment = () => {
  return (
    <TopicDetailLayout data={webDevData} routePrefix="/webdev" />
  )
}

export default WebDevelopment