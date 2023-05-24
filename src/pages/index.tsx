import React from 'react';

function MyPage({ data }) {
  // Render the page using the fetched data

  console.log(data);
  
  return (
    <div>
      <h1>My Page</h1>
      <p style={{display:'flex',flexDirection:'column'}} className='bg-red-300'>{data.map(d=><>{d.title}</>)}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or perform server-side computations
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  // const data = 'await response.json();'

  console.log(data);
  

  // Return the fetched data as props
  return {
    props: {
      data
    }
  };
}

export default MyPage;

