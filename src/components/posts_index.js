import React from 'react'

//used to connect component to redux state
import { connect } from 'react-redux'

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
                <div>List of Posts</div>
            </div>
        )
    }
}


export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)
