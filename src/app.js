

var app = {
    title: 'Indecision App',
    subtitle: "This is the app!"
}



var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        
    </div>
    );

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);