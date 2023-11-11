import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Loading } from "@/components/loading";
import Navbar from "@/components/navbar";
import Pagination from "@/components/pagination";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <div className="text-center mt-4">
      <span className="text-4xl	">VERD TEST</span>
      </div>
      <div className="mt-4">
      <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          dynamicHeight
        >
          <div>
          <img src="/banner.png"/>
          </div>
          <div>
            <img src="/banner.png"/>
          </div>
        </Carousel>
      </div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg lg:py-4">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-10 mt-16 ">
          {isLoading ? (
            <>
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            <>
              {data?.products.map((e, index) => {
                return <Card key={index} title={e.title} thumbnail={e.thumbnail} description={e.description} />;
              })}
            </>
          )}
        </div>
      </div>
      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalCount={100}
          pageSize={9}
          onPageChange={(currentPage) => setCurrentPage(currentPage)}
          label={400}
        />
      </div>
    <div className="mt-10">
    <Footer />
    </div>
    </main>
  );
}
