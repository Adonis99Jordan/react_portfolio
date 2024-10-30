
const workItems = [
    {
        title: 'Project 1',
        description: 'Description of project 1',
        image: '/images/work_item_bg.jpg',
        link: 'https://example.com/project1'
    },
    {
        title: 'Project 2',
        description: 'Description of project 2',
        image: '/images/work_item_bg.jpg',
        link: 'https://example.com/project1'
    },
    {
        title: 'Project 3',
        description: 'Description of project 3',
        image: '/images/work_item_bg.jpg',
        link: 'https://example.com/project1'
    },
];

function Portfolio() {
    return (
        <div className="container mt-5">
            <h1>Portofolio</h1>
            <p>This is the Portofolio page.</p>
            <div className="row">
                {workItems.map((item, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card card-background" style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="card-body card-body-overlay text-white">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href={item.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;