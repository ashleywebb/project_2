const React = require('react')
const DefaultLayout = require ('../Default.jsx')
const Calendar = require('react-calendar')

class Index extends React.Component {
    render() {
        const { plans } = this.props
        return (
            <DefaultLayout>
            <div>
                <nav>
                    <ul class="nav nav-tabs">
                        <a href="/plans/new">New Entry |</a>
                        <a href="/plans/edit"> | Edit an Entry</a>
                    </ul>
                </nav>
                <ul>
                    {
                        plans.map((planner) => (
                            <article>
                                <a href={`/plans/${planner._id}`}>
                                    <h2>
                                        {planner.date}
                                    </h2>
                                    <h3>
                                        {planner.todo} : {planner.todoDone ? 'All done!' : 'Not done - get to it!'}
                                    </h3>
                                    <h3>
                                        {planner.notes}
                                    </h3>
                                </a>
                            </article>
                        ))
                    }
                </ul>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index