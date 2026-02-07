import React from 'react';
import MapComponent from './components/MapComponent';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <MapComponent />
        </div>
    );
};

export default App;
