"use client";
import {
  useGetAllReviewsQuery,
  usePutReviewMutation,
} from "@/lib/redux/service/reviewsAPI";
import { useState } from "react";
import { useSelector } from "@/lib/redux/hooks";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";
import { Review } from "@/utils/types";

const AllReviews = ({ productId }: { productId: string }) => {
  const { id, name: nameUser } = useSelector((state) => state.userProfile);
  const { data: profile } = useGetProfileQuery({ id });
  const { data, isLoading } = useGetAllReviewsQuery({ productId });

  const [mutate] = usePutReviewMutation();

  const [flag, setFlag] = useState(false);

  const [reviewState, setReviewState] = useState({
    rating: 0,
    comment: "",
  });

  const handleChangeFlag = (rating: number, comment: string) => {
    setFlag(true);
    setReviewState({
      rating,
      comment,
    });
  };

  const handlePostUpdateReview = (reviewId: string) => {
    mutate({
      reviewId,
      comment: reviewState.comment,
      rating: reviewState.rating,
    });
    setFlag(false);
  };

  return (
    <div>
      <h1> all Reviews</h1>
      <div>
        {data?.map((review: Review) => {
          return (
            <div key={review?.id}>
              <p>{review?.name}</p>
              <br />
              {/* Si el nombre de la review es el mismo que el usuario logeado se renderiza el boton de editar */}
              {review?.name === profile?.name || review?.name === nameUser ? (
                <button
                  onClick={() =>
                    handleChangeFlag(
                      reviewState.rating === 0
                        ? review?.rating
                        : reviewState.rating,
                      reviewState.comment === ""
                        ? review?.comment
                        : reviewState.comment
                    )
                  }
                >
                  {" "}
                  Edit{" "}
                </button>
              ) : null}
              {flag ? (
                <div>
                  <input
                    type="number"
                    placeholder="Rating (1-5)"
                    value={reviewState.rating}
                    onChange={(e) => {
                      setReviewState({
                        ...reviewState,
                        rating: parseInt(e.target.value),
                      });
                    }}
                  />
                  <input
                    placeholder="Comment"
                    value={reviewState.comment}
                    onChange={(e) =>
                      setReviewState({
                        ...reviewState,
                        comment: e.target.value,
                      })
                    }
                  />
                  <button onClick={() => handlePostUpdateReview(review?.id)}>
                    Update Review
                  </button>
                </div>
              ) : (
                <>
                  <p>
                    {reviewState.rating === 0
                      ? review?.rating
                      : reviewState.rating}
                  </p>
                  <p>
                    {reviewState.comment === ""
                      ? review?.comment
                      : reviewState.comment}
                  </p>
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
