import React, { Component } from "react";

class RecentPost extends Component {
    render() {
        return (
            <div className="recent-posts-wrapper">
                <div className="recent-posts">
                    <div className="post-headings">
                        Recent Posts
                    </div>
                    <ul className="recent-post">
                        <li>recent post 0 </li>
                        <li>recent post 1</li>
                        <li>recent post 2 </li>
                    </ul>

                </div>
            </div>
        )
    }
}
export default RecentPost