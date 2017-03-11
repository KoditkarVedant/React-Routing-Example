import React from 'react'

class PostsIndex extends React.Component {
    //this will called first time the component is going to/about to
    // render on UI not every time
    componentWillMount() {
        console.log('this would be a good time to call fetch posts')
    }
    render() {
        return (
            <div>List of blog posts</div>
        )
    }
}

export default PostsIndex
