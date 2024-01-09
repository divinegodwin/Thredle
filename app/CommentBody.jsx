import React, { useEffect, useState } from "react";
import Comment from "./comment";
import supabase from "./supabaseClient";

const CommentBody = ({post}) => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
   
  const handleCommentButton = async(e) => {
    e.preventDefault();
    setComments((prevComment) => [commentInput,  ...prevComment]);
    setCommentInput("");
    if(!commentInput){
      alert('not valid')
        return;
    }

    const{data:insertedComment, error:commentInsertError} = await supabase.from('Comment')
    .insert([{
      comment: commentInput,
      post_id: post.id
    }])
    if(commentInsertError){
      console.log('an error occured at insetting comment', error)
    }
    if(insertedComment){
     console.log('inserted comment to database')
    }
  }
      
  useEffect(() => {
          const fetch = async() =>{


    const {data:fetchComment, error:fetchCommentError} = await supabase .from('Comment')
    .select('comment')
    .eq('post_id', post.id)

    if(fetchCommentError){
      console.log(fetchCommentError, 'cant get comment')
    }
    if(fetchComment){
      setComments(fetchComment.map((entry)=>({id:entry.id, comment:entry.comment})))
     
    }
  
  };
  fetch()
}, [])
  

  return (


    <div className="mt-14 flex flex-col gap-6 h-[200px] overflow-y-auto">
    
    
    <div>  
      {comments.map((comment) => (
        <div key={comment.id} className="w-full flex flex-col p-2  bg-white mt-[0.1rem]">
          <p>{comment.comment}</p>
          </div>
      ))}
      </div>  

      <div className=' grid justify-center '>
        <Comment
          className="w-200px border-2 h-auto rounded-lg "
          handleCommentChange={(e) => setCommentInput(e.target.value)}
          value={commentInput}
          handleCommentButton={handleCommentButton}
        />
      </div>

    </div>
    
  );
};

export default CommentBody;