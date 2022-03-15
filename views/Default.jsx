const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        const {plans} = this.props
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8'/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" 
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
      crossorigin="anonymous"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title> Personal Planner </title>
                    
                    <div class="textone">
                    <link
                       rel="stylesheet" 
                       href="https://use.typekit.net/ymq7zsh.css"
                       />
                    </div>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
                    />
                    {/* Jquery */}
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossOrigin="anonymous"
                    >
                        
                    </script>
                    <link rel="stylesheet" href = "/styles.css"/>
                    <script src="/app.js" defer></script>

                </head>
                <body>
                    <header>
                        <h1> Your Personal Planner </h1>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout