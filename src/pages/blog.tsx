import React, { useState } from 'react';

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const articles = [
        { id: 1, title: 'Understanding React', author: 'John Doe', readTime: '5 min', category: 'React' },
        { id: 2, title: 'Getting Started with Next.js', author: 'Jane Smith', readTime: '7 min', category: 'Next.js' },
        { id: 3, title: 'CSS Grid Layout', author: 'Alice Johnson', readTime: '4 min', category: 'CSS' },
        // ... other articles
    ];

    const categories = [...new Set(articles.map(article => article.category))];

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        (selectedCategory ? article.category === selectedCategory : true)
    );

    return (
        <div>
            <h1>Blog</h1>
            <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <div className="blog-grid">
                {filteredArticles.map(article => (
                    <div key={article.id} className="blog-card">
                        <h2>{article.title}</h2>
                        <p>By {article.author} - {article.readTime}</p>
                        <a href={`/blog/${article.id}`}>Read More</a>
                    </div>
                ))}
            </div>
            <form>
                <h2>Sign up for our newsletter</h2>
                <input type="email" placeholder="Your email" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default BlogPage;