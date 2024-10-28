import React from 'react';

interface HeaderProps {
    currentSection: string;
    setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({currentSection, setCurrentSection}) => {
    return (
        <header>
            <h1>Adonis Zepeda</h1>
            <nav>
                <ul>
                    {['About', 'Portfolio', 'Contact', 'Resume'].map(section => (
                        <li
                        key = {section}
                        className = {currentSection === section ? 'active': ''}
                        onClick ={() => setCurrentSection(section)}>
                            {section}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Header;