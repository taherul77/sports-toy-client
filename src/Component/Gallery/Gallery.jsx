const Gallery = () => {
  return (
    <div>
      <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?4"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 mt-6">
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              className="object-cover w-full  rounded-3xl"
              src="https://source.unsplash.com/random/300x300/?4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
