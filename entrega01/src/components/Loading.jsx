import React from "react";

const Loading = () => {

    return (        
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Loading;