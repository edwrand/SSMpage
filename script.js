// This is a placeholder for your actual data
const posts = [
    { title: 'Post 1', content: 'This is the first post.' },
    { title: 'Post 2', content: 'This is the second post.' },
    // add more posts here
];

window.onload = () => {
    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
};
