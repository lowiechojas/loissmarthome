import React from 'react'
import ProgData from '../data/programming.json';
import TopicDetailLayout from '../components/TopicDetailLayout';

const ProgrammingLanguage = () => {
  return (
    <TopicDetailLayout data={ProgData} routePrefix="/programming" />
  )
}

export default ProgrammingLanguage