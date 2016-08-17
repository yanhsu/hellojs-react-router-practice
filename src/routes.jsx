import {Route, IndexRoute} from 'react-router';

import {App} from 'App.jsx';
import {CounterPage} from 'Counter/CounterPage.jsx';
import {AboutPage} from 'About/AboutPage.jsx';
import {ToDoListPage} from 'ToDo/TodoPage.jsx';

export default (
<Route path="/" component={App}>
<IndexRoute component={CounterPage}/>
<Route path="counter" component={CounterPage}/>
<Route path="about/:name" component={AboutPage}/>
<Route path="todolist" component={ToDoListPage}/>
</Route>
);
