import React, {useState} from 'react';

const Collapse = ({ collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return (
        <>
            <button
                className="collapse-button"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? 'Show' : 'Hide'} content
            </button>
            <div
                className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
                aria-expanded={isCollapsed}
            >
                {children}
            </div>
        </>
    );
};

