const React = require('react');

class Show extends React.Component {
    render() {
        const {planner} = this.props
        return (
            <div>
                <article>
                    <h2>
                        {planner.date} :
                        {planner.todoDone ? 'Is done' : 'Is not done'}
                    </h2>
                    <h3>
                        {planner.todo}
                    </h3>
                    <a href={`/plans/${planner._id}/Edit`}><button>Edit</button></a>
                    <form action={`/plans/${planner._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE"/>    
                    </form>
                    <a href="/plans/"><button> Back to Main Page </button></a>
                </article>
            </div>
        )
    }
} 

module.exports = Show