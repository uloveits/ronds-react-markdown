## Quick start

### First, install the build from npm:

```bash
yarn add ronds-react-markdown
```

### And use it in your ReactJS application:

```js
import React from 'react'
import MdEdit from 'ronds-react-markdown'

const index = () => {
    return ( <
        MdEdit onChange = {
            (event, editor) => {
                const data = editor.getData()
                console.log({
                    event,
                    editor,
                    data
                })
            }
        }
        />
    )
}

export default index
```
