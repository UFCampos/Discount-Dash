"use client";
import { useGetAllReviewsQuery } from "@/lib/redux/service/reviewsAPI";

const AllReviews = ({ productId }: { productId: string }) => {
  const { data, isLoading } = useGetAllReviewsQuery({ productId });
  console.log(data);
  return (
    <div>
      <h1> all Reviews</h1>
      <div>
        {data?.map((items: any) => {
          return (
            <div key={items.id}>
              <br />
              <p>{items.name}</p>
              <p>{items.rating}</p>
              <p>{items.comment}</p>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllReviews;
