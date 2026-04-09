import React, { useState } from 'react';

const projectsData = [
    {
        id: 1,
        title: 'Project A',
        category: 'Web Development',
        beforeImage: 'path/to/beforeImageA.jpg',
        afterImage: 'path/to/afterImageA.jpg',
        metrics: 'Increased efficiency by 30%',
        testimonials: ['This project changed everything! - Client 1'],
        technologies: ['React', 'Node.js', 'CSS'],
    },
    {
        id: 2,
        title: 'Project B',
        category: 'Design',
        beforeImage: 'path/to/beforeImageB.jpg',
        afterImage: 'path/to/afterImageB.jpg',
        metrics: 'Improved user engagement by 50%',
        testimonials: ['Absolutely fantastic! - Client 2'],
        technologies: ['Figma', 'Photoshop'],
    },
    // Add more project objects as needed
];

const PortfolioPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const openModal = (project) => {
        setActiveProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setActiveProject(null);
        setModalOpen(false);
    };

    const filteredProjects = selectedCategory === 'All' ? projectsData : projectsData.filter(project => project.category === selectedCategory);

    return (
        <div>
            <h1>Project Showcase</h1>
            <div>
                <label htmlFor="category-filter">Filter by Category:</label>
                <select id="category-filter" onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="All">All</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Design">Design</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <div className="project-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card" onClick={() => openModal(project)}>
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>

            {isModalOpen && activeProject && (
                <div className="modal">
                    <button onClick={closeModal}>Close</button>
                    <h2>{activeProject.title}</h2>
                    <div className="comparison"> 
                        <img src={activeProject.beforeImage} alt="Before" />
                        <img src={activeProject.afterImage} alt="After" />
                    </div>
                    <p>{activeProject.metrics}</p>
                    <h3>Testimonials</h3>
                    <ul>
                        {activeProject.testimonials.map((testimonial, index) => (
                            <li key={index}>{testimonial}</li>
                        ))}
                    </ul>
                    <h3>Technologies Used</h3>
                    <ul>
                        {activeProject.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PortfolioPage;
