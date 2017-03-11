import React from 'react'

//used to connect component to redux state
import { connect } from 'react-redux'

import { Link } from 'react-router'

//action creator
import { fetchPosts } from '../actions/index'

class PostsIndex extends React.Component {
    //this will called first time the component is about to
    // render on UI not every time
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link
                        to="posts/new"
                        className="btn btn-sm btn-primary">
                        {'Add a Post'}
                    </Link>
                </div>
                <div>List of Posts</div>
            </div>
        )
    }
}


export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)
