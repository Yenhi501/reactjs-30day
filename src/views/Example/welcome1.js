// props.name - Ghi hoa chữ đầu - 
function First(props) {
    return <h1>Welcome {props.name}</h1>;
  }
  
  function welcome1() {
    return (
      <div className="name">
        <First name="Yến Nhi" />
        <First name="Minh Quân" />
      </div>
    );
  }
  
  export default welcome1;
  