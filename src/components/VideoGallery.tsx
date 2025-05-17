import React from 'react';

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: "Hamylten Heights Infrastructure Tour",
      description: "Take a virtual tour of our world-class infrastructure and facilities.",
      videoUrl: "/lovable-uploads/vid1.mp4",
    },
    {
      id: 2,
      title: "Luxury Design Showcase",
      description: "Experience the elegant design and premium finishes of Hamylten Heights.",
      videoUrl: "/lovable-uploads/vid2.mp4",
    }
  ];

  return (
    <section id="videos" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-hamylten-navy mb-4">
            Experience <span className="text-hamylten-gold">Hamylten Heights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful property through these immersive video tours
          </p>
          <div className="h-1 w-20 bg-hamylten-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
              <div
                style={{
                  aspectRatio: '9 / 16',
                  width: '100%',
                  maxWidth: '270px',
                  maxHeight: '70vh',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <video
                  src={video.videoUrl}
                  title={video.title}
                  autoPlay
                  loop
                  muted
                  controls={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.5rem',
                    background: '#000',
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 w-full">
                <h3 className="font-playfair text-xl font-bold text-hamylten-navy mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
