const React = require('react')
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action={`/plans/${planner._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend> Edit {planner.date} </legend>
                        <label>
                            To Do: <input
                            type="text"
                            name="todo"
                            placeholder="to do"
                            value={planner.date}
                        />
                        </label>
                        <label>
                            Notes: <input
                            type="text"
                            name="notes"
                            placeholder="notes for this entry"
                            value={planner.date}
                        />
                        </label>
                        <label>
                            To do is done: {this.props.planner.todoDone? <input type="checkbox" name="todoDone"/> : <input type="checkbox" name="todoDone"/>}
                        </label>
                    </fieldset>    
                    <input type="submit" value={`Edit ${planner.date}`}/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;