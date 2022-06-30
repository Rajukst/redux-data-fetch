import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PostPreview from "../../Components/PostPreview/PostPreview";
import { fetchPosts } from "./postSlice";
const PostView = () => {
  const { isloading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <div className="loading d-flex align-items center justify-content-center">
        {isloading && <h3>Loading Data...</h3>}
      </div>
      {error && <h3>{error}</h3>}
      <Row xs={1} md={4} className="g-4 m-2">
        {posts &&
          posts.map((getData) => {
            return (
              <PostPreview key={getData.id} allData={getData}></PostPreview>
            );
          })}
      </Row>
    </div>
  );
};

export default PostView;
