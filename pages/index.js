function Title(props) {
  const Tag = props.tag;
  console.log(Tag);
  return (
<>

    <Tag>{props.children}</Tag>
          <style jsx>
        {`
          ${Tag} {
            color: #cece;
            font-size:24px;
            font-weight:600;
          }
        `}
      </style>
      </>
  )


}


//Componente React
function HomePage() {
  //JSX
  return (
    <div>
      

     
      <Title tag="h1">Boas vindas</Title>
      <h2>Discord</h2>


    </div>
  );
}

export default HomePage;
