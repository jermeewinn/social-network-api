const router = require('express').Router;
const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThought,
    addReaction,
    deleteThought,
    deleteReaction

} = require('../../controllers/thought-controller');
// GET/POST functions for /api/thoughts
router
    .route('/thought')
    .get(getAllThoughts)
    .get(getThoughtById)
    .post(createNewThought)
    .put(updateThought)
    .delete(deleteThought);
// GET/POST/DELETE functions for /api/thoughts/:thoughtId/reaction
router
    .route('/thought/:thoughtId/reaction')
    .post(addReaction)
    .delete(deleteReaction)
module.exports = router;