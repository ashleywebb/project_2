const React = require('react');

class Show extends React.Component {
    render() {
        const plan = this.props.plan
        return (
            <div>
                <article>
                    <h2>
                        {plan.date} :
                        {plan.todoDone ? 'Is done' : 'Is not done'}
                    </h2>
                    <h3>
                        {plan.todo}
                    </h3>
                    <a href={`/plans/${plan._id}/Edit`}><button>Edit</button></a>
                    <form action={`/plans/${plan._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE"/>    
                    </form>
                    <a href="/plans/"><button> Back to Main Page </button></a>
                </article>
            </div>
        )
    }
} 

module.exports = Show