import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const products = [
  { img: "https://i.ibb.co/pRwMxWj/photo-2023-02-24-20-44-07.jpg" },
  { img: "https://i.ibb.co/cDy0N80/photo-2023-02-24-20-44-09.jpg" },
  { img: "https://i.ibb.co/jRMnLZL/photo-2023-02-24-20-44-10.jpg" },
  { img: "https://i.ibb.co/bBSRg4J/photo-2023-02-24-20-44-13.jpg" },
  { img: "https://i.ibb.co/j8y6dq3/photo-2023-02-24-20-44-15.jpg" },
  { img: "https://i.ibb.co/G0MbqmV/photo-2023-02-24-20-44-16.jpg" },
  { img: "https://i.ibb.co/BP8RtWt/photo-2023-02-24-20-44-18.jpg" },
  { img: "https://i.ibb.co/GFnmN5J/photo-2023-02-24-20-44-19.jpg" },
  { img: "https://i.ibb.co/42m6NcP/photo-2023-02-24-20-44-21.jpg" },
  { img: "https://i.ibb.co/fpD2MsZ/photo-2023-02-24-20-44-23.jpg" },
  { img: "https://i.ibb.co/kQ3tTkn/photo-2023-02-24-20-44-25.jpg" },
  { img: "https://i.ibb.co/3ztjrp3/photo-2023-02-24-20-44-27.jpg" },
  { img: "https://i.ibb.co/qWBvmsm/photo-2023-02-24-20-44-32.jpg" },
  { img: "https://i.ibb.co/JpqMDwb/photo-2023-02-24-20-44-34.jpg" },
  { img: "https://i.ibb.co/n3NsS4Y/photo-2023-02-24-20-44-37.jpg" },
  { img: "https://i.ibb.co/8ggHXZG/photo-2023-02-24-20-44-40.jpg" },
  { img: "https://i.ibb.co/1MCXT6T/photo-2023-02-24-20-43-57.jpg" },
];

const Gallery = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-3xl mb-10 font-extrabold mt-10">
        Our Factory
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <PhotoProvider>
          {products.map((p, i) => (
            <PhotoView key={i} src={p.img}>
              <img class="h-64 w-full object-cover" src={p.img} alt="" className="rounded-lg"/>
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Gallery;
