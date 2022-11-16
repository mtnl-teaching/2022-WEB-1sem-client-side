function MyLi(props) {
  const padding = {
   padding: "100px"
  }

  return (
   <li style={padding}>{props.message}</li>
  );
}

export default MyLi