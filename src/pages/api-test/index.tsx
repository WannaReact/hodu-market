import { nanoid } from 'nanoid';
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import * as Styled from './styled';
import { apiList, handler } from './utils';

function ApiTest() {
  const [info, setInfo] = useState<any>(apiList[0].api[0]);
  const [url, setUrl] = useState<string>(apiList[0].url);

  const createAsideButtons = (apiInfo, prevPath = '') =>
    apiInfo.map(({ url, api: apiArr, nested }) =>
      apiArr
        .map((apiObject) => (
          <Styled.AsideButton
            key={nanoid()}
            className="aside-btn"
            onClick={() => {
              setInfo(apiObject);
              setUrl(`${prevPath}${url}`);
              window.scrollTo(0, 0);
            }}
          >
            <Styled.MethodName>{`[${apiObject.method}]`}</Styled.MethodName>
            <span>{`${prevPath}${url}${
              apiObject.param ? `/:${apiObject.param?.[1]}` : ''
            }`}</span>
          </Styled.AsideButton>
        ))
        .concat(createAsideButtons(nested ?? [], `${prevPath}${url}`))
    );

  const createForm = () => {
    const { button, body, query, param } = info;
    let objectId = null;
    if (param) {
      objectId = (
        <Styled.InputWrapper key={nanoid()}>
          {`${param[0]}: `}
          <Styled.Input />
        </Styled.InputWrapper>
      );
    }
    if (body) {
      return (
        <Styled.Form>
          {objectId}
          {body.map(([_, title]) => (
            <Styled.InputWrapper key={nanoid()}>
              {`${title}: `}
              <Styled.Input />
            </Styled.InputWrapper>
          ))}
          <Styled.Button onClick={handler(url, info)}>{button}</Styled.Button>
        </Styled.Form>
      );
    }
    if (query) {
      return (
        <Styled.Form>
          {objectId}
          {query.map(([_, title]) => (
            <Styled.InputWrapper key={nanoid()}>
              {`${title}: `}
              <Styled.Input />
            </Styled.InputWrapper>
          ))}
          <Styled.Button onClick={handler(url, info)}>{button}</Styled.Button>
        </Styled.Form>
      );
    }
    return (
      <>
        <Styled.Form>{objectId}</Styled.Form>
        <Styled.Button key={nanoid()} onClick={handler(url, info)}>
          {button}
        </Styled.Button>
      </>
    );
  };

  return (
    <Styled.Container>
      <Styled.Aside>{createAsideButtons(apiList)}</Styled.Aside>
      <Styled.Section>{createForm()}</Styled.Section>
    </Styled.Container>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      gnb: {
        active: false
      }
    }
  };
};

export default ApiTest;
