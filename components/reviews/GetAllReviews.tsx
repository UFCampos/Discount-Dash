"use client";
import {
  useGetAllReviewsQuery,
  usePutReviewMutation,
} from "@/lib/redux/service/reviewsAPI";
import { useState } from "react";
import { useSelector } from "@/lib/redux/hooks";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";

const AllReviews = ({ productId }: { productId: string }) => {
  const { id, name: nameUser } = useSelector((state) => state.userProfile);
  const { data: profile, isError } = useGetProfileQuery({ id });
  console.log(profile);

  const [mutate] = usePutReviewMutation();
  const { data, isLoading } = useGetAllReviewsQuery({ productId });
  const [flag, setFlag] = useState(false);
  console.log(data);
  
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
  });
  const handleChangeFlag = (rating, comment) => {
    setFlag(true);
    setReview({
      rating,
      comment
    })
  };
  // const handleSetStates = (rating: number, comment: string) => {
  //   setReview({
  //     rating,
  //     comment,
  //   });
  // };

  const handlePostUpdateReview = (reviewId : string, itemId : string) => {
    mutate({
      reviewId,
      comment: review.comment,
      rating: review.rating,
      itemId,
    })
  }

  return (
    <div>
      <h1> all Reviews</h1>
      <div>
        {data?.map((items: any) => {
          return (
            <div key={items?.id}>
              <p>{items?.name}</p>
              <br />
              {items?.name === profile?.name || items?.name === nameUser ? (
                <button onClick={() => handleChangeFlag(items?.rating, items?.comment)}> Edit </button>
              ) : null}
              {flag ? (
                <div>
                  <input
                    type="number"
                    placeholder="Rating (1-5)"
                    value={review.rating}
                    onChange={(e) => {
                      setReview({
                        ...review,
                        rating: parseInt(e.target.value),
                      });
                    }}
                  />
                  <input
                    placeholder="Comment"
                    value={review.comment}
                    onChange={(e) =>
                      setReview({ ...review, comment: e.target.value })
                    }
                  />
                  <button onClick={() => handlePostUpdateReview(items?.id, items?.productId)}>Update Review</button>
                </div>
              ) : (
                <>
                  <p>{items?.rating}</p>
                  <p>{items?.comment}</p>
                </>
              )}

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
