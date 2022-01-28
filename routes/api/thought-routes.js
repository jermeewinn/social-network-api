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
    .route('/thoughts')
    .get(getAllThoughts)
    .post(createNewThought)
    .delete(deleteThought);
// GET/PUT functions for /api/thought/:thoughtId
router
    .route('/thought/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
// GET/POST/DELETE functions for /api/thoughts/:thoughtId/reaction
router
    .route('/thought/:thoughtId/reaction')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;