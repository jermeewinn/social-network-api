const router = require('express').Router();
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
    .post(createNewThought)
    .delete(deleteThought);
// GET/POST/DELETE functions for /api/thoughts/:thoughtId/reaction
router
    .route('/thought/:thoughtId/reaction')
    .get(getThoughtById)
    .post(addReaction)
    .put(updateThought)
    .delete(deleteReaction);

module.exports = router;