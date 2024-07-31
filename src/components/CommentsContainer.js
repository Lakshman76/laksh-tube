import React from "react";
import CommentsList from "./CommentsList";

const commentData = [
  {
    name: "Lakshman kumar",
    description: "this is my comment for the first time.",
    replies: [
      {
        name: "Akshay kumar",
        description: "this is my comment for the first time.",
        replies: [
          {
            name: "saini",
            description: "this is my comment for the first time.",
            replies: [
              {
                name: "kumar",
                description: "this is my comment for the first time.",
                replies: [
                  {
                    name: "Lakshman kumar",
                    description: "this is my comment for the first time.",
                    replies: [
                      {
                        name: "Lakshman kumar",
                        description: "this is my comment for the first time.",
                        replies: [
                          {
                            name: "Lakshman kumar",
                            description:
                              "this is my comment for the first time.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Lakshman kumar",
                    description: "this is my comment for the first time.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Lakshman kumar",
                description: "this is my comment for the first time.",
                replies: [],
              },
            ],
          },
          {
            name: "Lakshman kumar",
            description: "this is my comment for the first time.",
            replies: [],
          },
        ],
      },
      {
        name: "Lakshman kumar",
        description: "this is my comment for the first time.",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    description: "this is my comment for the first time.",
    replies:[
      {
        name: "Lakshman kumar",
        description: "this is my comment for the first time.",
        replies: [
          {
            name: "Lakshman kumar",
            description: "this is my comment for the first time.",
            replies: [
              {
                name: "Lakshman kumar",
                description: "this is my comment for the first time.",
                replies: [],
              },
            ],
          },
        ],
      },
    ]
  },
  {
    name: "Rahul kumar",
    description: "Nice movie, I love this",
    replies:[
      {
        name: "Lakshman kumar",
        description: "this is my comment for the first time.",
        replies: [
          {
            name: "Lakshman kumar",
            description: "this is my comment for the first time.",
            replies: [],
          },
        ],
      },
    ]
  }
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
