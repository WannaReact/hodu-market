import { useState } from 'react';
// import styled from 'styled-components';

function AddproductPage() {
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  return (
    <>
      <header>상품 등록</header>
      <main>
        <img src={createObjectURL} alt="임시" />
        <input type="file" id="img" onChange={uploadToClient} />
      </main>
    </>
  );
}

// const Image = styled.img`
// `

export default AddproductPage;
