import React from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link } from 'react-router'

class PostsNew extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object
    }

    onSubmit(props) {
        this.props.createPost(props)
        .then(() => {
            // blog post has been created navigate user to index
            this.context.router.push('/')
        })
    }

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
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched ? 'has-danger': ''}`}>
                    <label>{'Title'}</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className='text-help'>
                        {title.touched && title.error}
                    </div>
                </div>
                <div className={`form-group ${categories.touched ? 'has-danger': ''}`}>
                    <label>{'Catrgories'}</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className='text-help'>
                        {categories.touched && categories.error}
                    </div>
                </div>
                <div className={`form-group ${content.touched ? 'has-danger': ''}`}>
                    <label>{'Content'}</label>
                    <textarea className="form-control" {...content}/>
                    <div className='text-help'>
                        {content.touched && content.error}
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-sm btn-primary">
                    {'Submit'}
                </button>
                <Link to="/" className="btn btn-sm btn-danger">
                    {'Cancel'}
                </Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if(!values.title) {
        errors.title = 'Title is required !'
    }
    if(!values.categories) {
        errors.categories = 'Categories required !'
    }
    if(!values.content) {
        errors.content = 'Content is required !'
    }
    return errors
}

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title','categories','content'],
    validate
}, null, { createPost })(PostsNew)
