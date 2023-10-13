"use client";
import {
  useGetReviewsQuery,
  useNewReviewMutation,
} from "@/lib/redux/service/reviewsAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";

const Reviews = ({productId}: {productId: string}) => {
    const [review, setReview] = useState({
        rating: 0,
        comment: "",
    });
  const { data, isLoading } = useGetReviewsQuery(null);
  const [mutate] = useNewReviewMutation();
  let { id , name } = useSelector((state) => state.userProfile);
  const { data : profile, isError } = useGetProfileQuery({ id });

  
  
  const postReview = () => {
    
    if(name === undefined || name === "" || name === null){
      mutate({
        productId,
        name : profile.name,
        rating: review.rating,
        comment: review.comment,
        userId : id,
      });
    }else{
      mutate({
        productId,
        name : profile.name,
        rating: review.rating,
        comment: review.comment,
        userId : id,
      });
    }
    console.log(data);
    console.log(productId);
    console.log(review);
    console.log(id);
    console.log(profile.name);
    setReview({
      rating: 0,
      comment: "",
    })
  };

  return (
    <div>
      <h1>Reviews</h1>
      <div>
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={review.rating}
          onChange={(e) =>
            setReview({ ...review, rating: parseInt(e.target.value) })
          }
        />
        <textarea
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
