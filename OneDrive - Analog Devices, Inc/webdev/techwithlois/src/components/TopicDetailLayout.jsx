import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TopicDetailLayout = ({ data, routePrefix = "" }) => {
  const { topicId } = useParams();
  const selectedTopic = topicId ? data.find(t => t.slug === topicId) : null;

  return (
    <div className="flex h-screen overflow-hidden sm:ml-30 sm:mr-30">
      {/* Sidebar */}
      <div className="sm:w-[20vw] bg-gray-100 p-4 space-y-2 overflow-y-auto">
        {data.map(topic => (
          <Link
            key={topic.id}
            to={`${routePrefix}/${topic.slug}`}
            className="block text-blue-700 hover:underline"
          >
            {topic.title}
          </Link>
        ))}
      </div>

      {/* Main content */}
      <div className="w-full p-4 overflow-y-auto bg-zinc-50">
        {selectedTopic ? (
          <div>
            <h1 className="text-3xl font-bold">{selectedTopic.title}</h1>
            <p className="mt-4 text-lg">{selectedTopic.description}</p>
            <p className="text-lg">{selectedTopic.content}</p>
            {selectedTopic.image && (
              <img
                src={selectedTopic.image}
                alt={selectedTopic.title}
                className="w-auto h-[50vh] mt-6"
              />
            )}
          </div>
        ) : (
          <h2 className="text-xl text-gray-600">
            We're excited for you to learn something here!
          </h2>
        )}
      </div>
    </div>
  );
};

export default TopicDetailLayout;
