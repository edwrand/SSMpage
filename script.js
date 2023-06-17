// This is a placeholder for your actual data
const posts = [
    { title: 'Instagram Growth Campaigns', content: 'With 10+ years of social media development, we can grow your followers, views, leads, or whatever you want to grow!' },
    { title: 'Facebook Ad Targeting', content: 'Who should I advertise to? What types of ad will lead to new customers? We can answer these questions and optimize your advertising spending.' },
    { title: 'Google Adwords', content: 'We can help you get to the top of Google search results and get more exposure.' },
    { title: 'TikTok Growth Campaigns', content: 'Maybe you want to reach younger generations on a newer platform like TikTok.' },

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
