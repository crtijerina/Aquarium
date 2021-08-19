const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    post_id: 1
  },
];

  const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;