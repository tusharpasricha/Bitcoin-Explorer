//const express = require('express');

const { posts, comments } = require("../models/commentposts");
const generateId = require('../utils/genID');

const getPosts = (req, res) => {
  return res.status(200).send(posts);
};

const getPostbyHash = (req, res) => {
  const hash = req.params.hash;
  const requestedpost = posts.find((post) => post.hash === hash);
  if (requestedpost === undefined)
    return res.status(404).send("Post not found");
  return res.status(200).send(requestedpost);
}

const comment = (req, res) => {
    const hash = req.params.hash;
    const requestedpost = posts.find(post => post.hash === hash);
    if (requestedpost === undefined)
        return res.status(404).send('Post not found');
    const cid = generateId();
    const newcomment = { commentid: cid, post_hash: hash, userid:req.user.id, thecomment: req.body.comment };
    comments.push(newcomment);
    requestedpost.commentsarray.push(cid);
    return res.status(201).send({
        message: 'Comment added successfully',
        data:{}
    })
};

const viewcomments = (req, res) => {
  const requestedposthash = req.params.hash;
  const retpost = posts.find((post) => post.hash === requestedposthash);
  if (retpost === undefined)
    return res.status(404).send("Sorry, we couldn't find that post.");
  const commentsarray = comments.filter(
    (comment) => comment.post_hash === requestedposthash
  );
  return res.status(200).send(commentsarray);
};

module.exports = { getPosts, getPostbyHash,comment, viewcomments };
