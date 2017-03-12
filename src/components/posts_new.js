import React from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'

class PostsNew extends React.Component {
    render() {
        const {
            handleSubmit,
            fields: {
                title,
                categories,
                content
            }
        } = this.props

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>{'Title'}</label>
                    <input type="text" className="form-control" {...title}/>
                </div>
                <div className="form-group">
                    <label>{'Catrgories'}</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>
                <div className="form-group">
                    <label>{'Content'}</label>
                    <textarea className="form-control" {...content}/>
                </div>

                <button
                    type="submit"
                    className="btn btn-sm btn-primary">
                    {'Submit'}
                </button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title','categories','content']
}, null, { createPost })(PostsNew)
