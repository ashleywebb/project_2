const React = require('react')
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action={`/plans/${plan._id}?_method=PUT`} method="POST">
                    <fieldset>
                        <legend> Edit {plan.date} </legend>
                        <label>
                            To Do: <input
                            type="text"
                            name="todo"
                            placeholder="to do"
                            value={plan.date}
                        />
                        </label>
                        <label>
                            Notes: <input
                            type="text"
                            name="notes"
                            placeholder="notes for this entry"
                            value={plan.date}
                        />
                        </label>
                        <label>
                            To do is done: {this.props.plan.todoDone? <input type="checkbox" name="readyToEat"/> : <input type="checkbox" name="todoDone"/>}
                        </label>
                    </fieldset>    
                    <input type="submit" value={`Edit ${plan.date}`}/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;