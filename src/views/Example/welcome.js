import 'C:/Users/admind/OneDrive - The University of Technology/Desktop/ReactJS/learn_react/src/styles/welcome.scss'

function Welcome(props)
{
    return (<h1> Hello, {props.name}</h1>);
}

function AppWelcome(){
    return (
        <div className="info">
            <p className='info-item'><Welcome name="Yến Nhi" /></p>
            <p className='info-item'><Welcome name="Heo" /></p>
        </div>
    );
}
export default AppWelcome;