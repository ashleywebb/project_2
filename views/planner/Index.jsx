const { GridFSBucketWriteStream } = require('mongodb');
const React = require('react')
// const DefaultLayout = require ('../Default.jsx')

class Index extends React.Component {
    render() {
        const { plans } = this.props;
        return (
            // <DefaultLayout>
            <div>
                <nav>
                    <a href="/plans/new">Create a new entry</a>
                </nav>
                <ul>
                    {
                        plans.map((plan) => {
                            return (
                                <li key={`${plan._id}`}>
                                    <a href={`/plans/${plan._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`DELETE ${plan.name}`}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            //</DefaultLayout>
        )
    }
}