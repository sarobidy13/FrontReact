import React from 'react';

const ContentHeader = ({ text }) => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{text}</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContentHeader;