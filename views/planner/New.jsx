const React = require('react')
const DefaultLayout = require('../Default.jsx')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action = "/plans" method="post">
                    <fieldset>
                        <legend> Create a new entry </legend>
                        <label>
                            DATE: <input type="date" name="date" placeholder="enter date!"/>
                        </label>
                        <label>
                            TO DO: <input type="text" name="todo" placeholder="enter your todo list!"/>
                        </label>
                        <label>
                            NOTES: <input type="text" name="notes" placeholder="enter any notes for the day."/>
                        </label>
                        <label>
                            DONE: <input type="checkbox" name="todoDone"/>
                        </label>
                    </fieldset>
                    <input type="submit" value="create New Entry" />
                </form>
                </DefaultLayout>
        )
    }
}


module.exports = New