"use client";
import {
  useGetAllReviewsQuery,
  useNewReviewMutation,
} from "@/lib/redux/service/reviewsAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";
import AllReviews from "./GetAllReviews";

const Reviews = ({ productId }: { productId: string }) => {
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
  });
  // const { data, isLoading } = useGetAllReviewsQuery({ productId });
  const [mutate] = useNewReviewMutation();
  let { id } = useSelector((state) => state.userProfile);
  const { data: profile, isError } = useGetProfileQuery({ id });

  const postReview = () => {
    mutate({
      productId,
      name: profile?.name,
      rating: review.rating,
      comment: review.comment,
      userId: id,
    });
    setReview({
      rating: 0,
      comment: "",
    });
  };

  return (
    <div>
      <h1>Reviews</h1>
      <div>
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={review.rating}
          onChange={(e) =>{
            setReview({ ...review, rating: parseInt(e.target.value) })}
          }
        />
        <input
          placeholder="Comment"
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
        />
        <br />
        <button onClick={postReview}>Post</button>
      </div>
    </div>
  );
};

export default Reviews;
