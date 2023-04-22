//const express = require('express');

const { posts, comments } = require("../models/commentposts");
const generateId = require('../utils/genID');

const getPosts = (req, res) => {
  return res.status(200).send(posts);
};

const comment = (req, res) => {
    const pid = req.params.postid;
    const requestedpost = posts.find(post => post.postid === pid);
    if (requestedpost === undefined)
        return res.status(404).send('Post not found');
    const cid = generateId();
    const newcomment = { commentid: cid, postid: pid, userid:req.user.id, thecomment: req.body.comment };
    comments.push(newcomment);
    requestedpost.commentsarray.push(cid);
    return res.status(201).send({
        message: 'Comment added successfully',
        data:{}
    })
};

const viewcomments = (req, res) => {
  const requestedpostid = req.params.id;
  const retpost = posts.find((post) => post.postid === requestedpostid);
  if (retpost === undefined)
    return res.status(404).send("Sorry, we couldn't find that post.");
  const commentsarray = comments.filter(
    (comment) => comment.postid === requestedpostid
  );
  return res.status(200).send(commentsarray);
};

module.exports = { getPosts, comment, viewcomments };
