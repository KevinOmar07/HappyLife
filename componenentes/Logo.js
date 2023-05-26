import React from 'react';


class Logo extends React.Component{
    render() {
        return (
            <>
                <div className="logo-container animate__animated animate__rubberBand">
                    <div> <img src="../imgs/icon.png" alt="" width="60px" height="60px"/></div>
                    <h2>HappyLife</h2>
                </div>
            </>
        )
    }
}
export default Logo;