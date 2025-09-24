import React from 'react';
import electronicsData from '../data/topics.json';
import TopicDetailLayout from '../components/TopicDetailLayout';

const Electronics = () => {
  return <TopicDetailLayout data={electronicsData} routePrefix="/electronics" />;
};

export default Electronics;
