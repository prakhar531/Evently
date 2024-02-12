{ searchParams }: (SearchParamProps): output =>{ category: 'Nextjs14', page: '1', query: 'erwe' }
Access url of current page.

Why JSON.parse(JSON.stringify(events)) while dealing with mongoDB query results?
Mongoose queries return Mongoose documents, which are JavaScript objects representing MongoDB documents.

    Conversion to JSON String: JSON.stringify(events) converts the JavaScript object events into a JSON-formatted string. This process serializes the JavaScript object into a string that represents its state.

    Parsing JSON String: JSON.parse() then parses the JSON string back into a JavaScript object. This effectively creates a deep copy of the original object. It's important to note that this creates a new object separate from the original one, with all nested objects and arrays also duplicated.

    JSON.parse(JSON.stringify(events)) is a common technique to create a deep copy of a JavaScript object or array, and it's often used when dealing with Mongoose query results to ensure that you're working with a separate copy of the data.

    Deep Copying: Sometimes, when dealing with complex objects or arrays with nested structures, a simple assignment (const copy = events) only creates a shallow copy. This means that nested objects and arrays within events still reference the same objects in memory as the original events object. By using JSON.parse(JSON.stringify(events)), you create a deep copy where all nested objects and arrays are also duplicated, ensuring that changes to one object do not affect the other.
    Removal of Mongoose-Specific Properties: Additionally, using JSON.stringify() and JSON.parse() can strip away Mongoose-specific properties attached to Mongoose documents, effectively converting them into plain JavaScript objects. This can be helpful if you want to manipulate the data in a way that doesn't involve Mongoose-specific functionality.

Button is given property of asChild when it has <Link/> tag inside it.

auth() in clerk: https://clerk.com/docs/references/nextjs/authentication-object#properties

Hydration errors: https://nextjs.org/docs/messages/react-hydration-error
