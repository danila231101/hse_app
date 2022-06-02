import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Settings = () => {
    return (
        <>
            <h1>
                SETTINGS
            </h1>
            <ul style={{margin: '40px'}}>
                <li>
                    <Link to="./public/files/pres.pdf" target="_blank" download>
                        Download for Mac OS
                    </Link>
                </li>
                <li>
                    <Link to="./public/files/pres.pdf" target="_blank" download>
                        Download for Windows
                    </Link>

                </li>
                <li>
                    <a target="_blank" href="https://www.apple.com/app-store/">Policies</a>
                </li>
            </ul>
        </>
    );
};

export default Settings;
