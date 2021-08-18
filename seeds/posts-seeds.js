const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    contents: 'Lorem ipsum dolor sit amet',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;