// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
// Create web server
const app = express();
app.use(bodyParser.json());
app.use(cors());
// Create an object to store posts and comments
const posts = {};
// Helper function to handle events
const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, title } = data;
        // Add the new post to the posts object
        posts[id] = { id, title, comments: [] };
    }
    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        // Find the post object in the posts object
        const post = posts[postId];
        // Add the new comment to the post object
        post.comments.push({ id, content, status });
    }
    if (type === 'CommentUpdated') {
        const { id, content, postId, status } = data;
        // Find the post object in the posts object
        const post = posts[postId];
        // Find the comment object in the post object
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });
        // Update the comment object
        comment.status = status;
        comment.content = content;
    }
};
// Route handler for GET requests to /posts
app.get('/posts', (req, res) => {
    res.send(posts);
});
// Route handler for POST requests to /events
app.post('/events', (req, res) => {
    const { type, data } = req.body;
    // Handle the event
    handleEvent(type, data);
    res.send({});
});
// Start listening on port 4002
app.listen(4002, async () => {
    console.log('Listening on 4002');
    // Get all events from the event bus
    const res = await axios.get('http://localhost:4005/events');
    // Loop through all events and handle them
    for (let event of res.data) {
        console.log('Processing event:', event.type);
        handleEvent(event.type, event.data);
    }
});

// Path: comments.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
// Create web server
const app = express();
app.use(bodyParser.json());
app.use(cors());
// Create an object to store posts and comments
const posts = {};
// Helper function to handle events
const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, title } = data;
        // Add the new post to the posts object
        posts[id] = { id, title, comments: [] };
    }
    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        // Find the post object in the posts object
        const post = posts[postId];
        // Add the new comment to the post object
        post.comments.push({ id, content, status });
    }
    if (type === 'CommentUpdated') {
        const { id, content, postId, status } = data;
        // Find the post object in the posts object
        const post = posts[postId];
        // Find the comment object in the post object
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });
        // Update the comment object
        comment.status = status;
        comment.content = content;
    }
};
// Route handler for GET requests to /posts
app.get('/posts', (req, res) => {
    res.send(posts);
});
// Route handler for POST requests to /events
app.post('/events', (req, res) => {
    const { type, data } = req.body;
    // Handle the event
    handleEvent(type, data);
    res.send({});
});
// Start listening on port 4002
app.listen(4002, async () => {
    console.log('Listening on 4002');
    //
    app.listen(4002, async () => {
        console.log('Listening on 4002');
        // Get all events from the event bus
        const res = await axios.get('http://localhost:4005/events');
        // Loop through all events and handle them
        for (let event of res.data) {
            console.log('Processing event:', event.type);
            handleEvent(event.type, event.data);
        }
    });

    // Path: comments.js
    // Create web server
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const axios = require('axios');
    // Create web server
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    // Create an object to store posts and
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    // Create an object to store posts and comments
    const posts = {};
    // Helper function to handle events
    const handleEvent = (type, data) => {
        if (type === 'PostCreated') {
            const { id, title } = data;
            // Add the new post to the posts object
            posts[id] = { id, title, comments: [] };
        }
        if (type === 'CommentCreated') {
            const { id, content, postId, status } = data;
            // Find the post object in the posts object
            const post = posts[postId];
            // Add the new comment to the post object
            post.comments.push({ id, content, status });
        }
        if (type === 'CommentUpdated') {
            const { id, content, postId, status } = data;
            // Find the post object in the posts object
            const post = posts[postId];
            // Find the comment object in the post object
            const comment = post.comments.find(comment => {
                return comment.id === id;
            });
            // Update the comment object
            comment.status = status;
            comment.content = content;
        }
    };
    // Route handler for GET requests to /posts
    app.get('/posts', (req, res) => {
        res.send(posts);
    });
    // Route handler for POST requests to /events
    app.post('/events', (req, res) => {
        const { type, data } = req.body;
        // Handle the event
        handleEvent(type, data);
        res.send({});
    });
    // Start listening on port 4002
    app.listen(4002, async () => {
        console.log('Listening on 4002');
        // Get all events from the event bus
        const res = await axios.get('http://localhost:4005/events');
        // Loop through all events and handle them
        for (let event of res.data) {
            console.log('Processing event:', event.type);
            handleEvent(event.type, event.data);
        }
    });

    // Path: comments.js
    // Create web server
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    // Create an object to store posts and comments
    const posts = {};

    // Helper function to handle events
    const handleEvent = (type, data) => {
        if (type === 'PostCreated') {
            const { id, title } = data;

            // Add the new post to the posts object
            posts[id] = { id, title, comments: [] };
        }

        if (type === 'CommentCreated') {
            const { id, content, postId, status } = data;

            // Find the post object in the posts object
            const post = posts[postId];

            // Add the new comment to the post object
            post.comments.push({ id, content, status });
        }

        if (type === 'CommentUpdated') {
            const { id, content, postId, status } = data;

            // Find the post object in the posts object
            const post = posts[postId];

            // Find the comment object in the post object
            const comment = post.comments.find(comment => {
                return comment.id === id;
            });

            // Update the comment object
            comment.status = status;
            comment.content = content;
        }
    };

    // Route handler for GET requests to /posts
    app.get('/posts', (req, res) => {
        res.send(posts);
    });

    // Route handler for POST requests to /events
    app.post('/events', (req, res) => {
        const { type, data } = req.body;

        // Handle the event
        handleEvent(type, data);

        res.send({});
    });

    // Start listening on port 4002
    app.listen(4002, async () => {
        console.log('Listening on 4002');

        // Get all events from the event bus
        const res = await axios.get('http://localhost:4005/events');

        // Loop through all events and handle them
        for (let event of res.data) {
            console.log('Processing event:', event.type);

            handleEvent(event.type, event.data);
        }
    });